import { Map } from 'components/organisms/Map'; // 순환 의존 문제로 수정
import { ICoord, LocationErrorCode } from 'types';
import { TransactionLocationTemplateWrapper } from './styled';

interface ITransactionLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord: ICoord;
  /** 거래희망장소 세부 위치*/
  location: string;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (errorCode: LocationErrorCode) => void;
}

export const TransactionLocationTemplate = ({
  coord,
  location,
  locationErrorEvent,
}: ITransactionLocationTemplateProps) => {
  return (
    <TransactionLocationTemplateWrapper>
      <Map
        coord={coord}
        markerInfo={location}
        locationErrorEvent={locationErrorEvent}
      />
    </TransactionLocationTemplateWrapper>
  );
};
