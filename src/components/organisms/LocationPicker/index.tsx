import React, { useCallback, useState } from "react";
import { Text, TextButton } from "components/atoms";
import { Map } from "components/organisms/Map"; // 순환 의존 문제로 수정
import { LocationPickerWrapper, PaddingWrapper } from "./styled";
import { ICoord, ILocation } from "types";
import { useReverseGeocode } from "hooks";

interface ILocationPickerProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord?: ICoord;
  /** 거래희망장소 선택 완료 버튼 클릭 이벤트 */
  onLocationSelect: (selectedLocation: ILocation) => void;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}
export const LocationPicker: React.MemoExoticComponent<
  ({
    coord,
    onLocationSelect,
    locationErrorEvent
  }: ILocationPickerProps) => JSX.Element
> = React.memo(
  ({ coord, onLocationSelect, locationErrorEvent }: ILocationPickerProps) => {
    const [centerCoord, setCenterCoord] = useState<any>(null);
    const { searchCoordinateToAddress } = useReverseGeocode();

    const handleButtonClick = useCallback(() => {
      if (centerCoord) {
        const iCoord: ICoord = {
          lat: centerCoord.lat(),
          lng: centerCoord.lng()
        } as const;

        searchCoordinateToAddress(centerCoord)
          .then((address: string) => {
            onLocationSelect({ coord: iCoord, address });
          })
          .catch((error: Error) => {
            console.error("Failed to fetch address:", error);
            // TODO: 에러 처리 로직 수정 필요
            locationErrorEvent(
              "주소를 가져오는데 실패했습니다. 다시 시도해주세요."
            );
          });
      }
    }, [
      centerCoord,
      onLocationSelect,
      searchCoordinateToAddress,
      locationErrorEvent
    ]);

    return (
      <LocationPickerWrapper>
        <PaddingWrapper>
            <Text variant="writing_bold">{"이웃과 만나서\n거래하고 싶은 장소를 선택해주세요."}</Text>
            <Text variant="desc_regular">
              만나서 거래할 때는&nbsp;
              <strong>누구나 찾기 쉬운 공공장소</strong>
              가 좋아요.
              <br/>
              나와 거래자 모두를 위해, 안전한 장소를 선택해주세요!
            </Text>
        </PaddingWrapper>
        <Map
          coord={coord}
          isCenterMarkerExist
          setCenterCoord={setCenterCoord}
          locationErrorEvent={locationErrorEvent}
        />
        <TextButton text="선택 완료" onClick={handleButtonClick} />
      </LocationPickerWrapper>
    );
  }
);

LocationPicker.displayName = "LocationPicker";
