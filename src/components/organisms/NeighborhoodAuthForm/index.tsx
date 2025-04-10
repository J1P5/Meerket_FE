import { TextButton } from 'components/atoms';
import { UserLocationBottomSheet } from 'components/organisms';
import { Map } from 'components/organisms/Map'; // 순환 의존 문제로 수정
import { useReverseGeocode } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ICoord, ILocation, LocationErrorCode } from 'types';
import { NeighborhoodAuthFormWrapper } from './styled';

interface INeighborhoodAuthFormProps {
  /** 유저 닉네임 */
  nickname: string;
  /** 나의 동네로 설정된 address */
  myAddress: string;
  /** 동네 인증 버튼 클릭 이벤트 */
  onSubmitButtonClick?: (location: ILocation) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (errorCode: LocationErrorCode) => void;
}
export const NeighborhoodAuthForm = ({
  nickname,
  myAddress,
  onSubmitButtonClick,
  locationErrorEvent,
}: INeighborhoodAuthFormProps) => {
  const [myCoord, setMyCoord] = useState<naver.maps.Coord | null>(null);
  const [location, setLocation] = useState<ILocation>({
    coord: undefined,
    address: '',
  });
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);

  const { searchCoordinateToAddress } = useReverseGeocode();

  useEffect(() => {
    if (myCoord) {
      const iCoord: ICoord = {
        lat: (myCoord as naver.maps.LatLng).lat(),
        lng: (myCoord as naver.maps.LatLng).lng(),
      } as const;

      searchCoordinateToAddress(myCoord)
        .then((address) => {
          setLocation({ coord: iCoord, address });
        })
        .catch((error: Error) => {
          locationErrorEvent(error.message as LocationErrorCode);
          setLocation({ coord: iCoord, address: '' });
        });
    }
  }, [myCoord, searchCoordinateToAddress]);

  const handleCheckButtonClick = useCallback(() => {
    if (location.address) {
      setIsOpenBottomSheet(true);
    }
  }, [location, myAddress]);

  const handleSubmitButtonClick = useCallback(() => {
    onSubmitButtonClick?.(location);
  }, [onSubmitButtonClick, location]);

  return (
    <NeighborhoodAuthFormWrapper>
      <Map setMyCoord={setMyCoord} locationErrorEvent={locationErrorEvent} />
      {location.address && (
        <TextButton
          text={'현재 위치가 맞아요!'}
          onClick={handleCheckButtonClick}
        />
      )}
      {createPortal(
        <UserLocationBottomSheet
          open={isOpenBottomSheet}
          onClose={() => setIsOpenBottomSheet(false)}
          nickname={nickname}
          myAddress={myAddress}
          address={location.address}
          onSubmitButtonClick={handleSubmitButtonClick}
        />,
        document.body,
      )}
    </NeighborhoodAuthFormWrapper>
  );
};
