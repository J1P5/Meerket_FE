import { useGeolocation } from 'hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavermaps } from 'react-naver-maps';
import { IMapProps, LocationErrorCode } from 'types';

const DEFAULT_COORD: [number, number] = [37.5666805, 126.9784147];
const DEFAULT_ZOOM_LEVEL: number = 16;

export const useMap = ({
  coord,
  isCenterMarkerExist,
  setMyCoord,
  markerInfo,
  locationErrorEvent,
}: IMapProps) => {
  const navermaps = useNavermaps();
  const defaultCenter = new navermaps.LatLng(...DEFAULT_COORD);

  /**
   * 지도 상태 관리
   */
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [myMarker, setMyMarker] = useState<naver.maps.Marker | null>(null);
  const [transactionMarker, setTransactionMarker] =
    useState<naver.maps.Marker | null>(null);
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow | null>(
    null,
  );
  const isFirstExecution = useRef(true);

  const GET_MY_LOCATION_CONDITION = true;
  const INIT_CONDITION = !coord && !isCenterMarkerExist;

  /**
   * 마커 위치 업데이트 및 표시
   */
  const updateMyMarkerPosition = useCallback(
    (position: naver.maps.Coord) => {
      if (!map || !myMarker) return;
      myMarker.setVisible(true);
      myMarker.setPosition(position);
      map.setZoom(DEFAULT_ZOOM_LEVEL);
    },
    [map, myMarker],
  );

  /**
   * 위치 정보 획득 성공 시 처리
   */
  const onSuccessGeolocation = useCallback(
    (position: GeolocationPosition) => {
      if (!map || !myMarker) return;
      const location = new navermaps.LatLng(
        position.coords.latitude,
        position.coords.longitude,
      );

      setMyCoord?.(location);
      updateMyMarkerPosition(location);

      // 거래 희망 장소를 보여줄 경우 지도 중심을 현재 위치로 변경하지 않음
      if (coord && isFirstExecution.current) {
        isFirstExecution.current = false;
        return;
      }

      map.setCenter(location);
    },
    [coord, map, myMarker, setMyCoord],
  );

  /**
   * 위치 정보 획득 실패 시 처리
   */
  const onErrorGeolocation = useCallback(
    (error: LocationErrorCode) => {
      locationErrorEvent?.(error);
    },
    [locationErrorEvent],
  );

  const { getPosition } = useGeolocation({
    onSuccess: onSuccessGeolocation,
    onError: onErrorGeolocation,
  });

  /**
   * 현재 나의 위치로 이동
   */
  const moveToCurrentLocation = useCallback(() => {
    if (!map || !myMarker) return;
    getPosition(GET_MY_LOCATION_CONDITION).catch((error: Error) => {
      console.error('Error querying geolocation permissions:', error);
    });
  }, [map, myMarker, getPosition]);

  /**
   * 지도 초기화 및 좌표 설정
   */
  useEffect(() => {
    if (!map || !myMarker) return;

    // 좌표가 있는 경우 지도 중심 설정
    if (coord) {
      const position = new navermaps.LatLng(coord.lat, coord.lng);
      map.setCenter(position);

      // 거래 장소 마커만 있는 경우 (읽기 전용)
      if (!isCenterMarkerExist && transactionMarker) {
        transactionMarker.setPosition(position);
        // InfoWindow 설정
        if (infoWindow && markerInfo) {
          const contentHtml =
            '<div style="display: flex; padding: 6px 10px; justify-content: center; align-items: center; gap: 10px; border-radius:6px; background-color:#131B53; color:#FFF; font-size: 14px;">' +
            markerInfo +
            '</div>';

          infoWindow.setOptions({
            disableAnchor: true,
            borderWidth: 0,
            content: contentHtml,
          });

          infoWindow.open(map, transactionMarker);
        }
      }
    }

    // myMarker 기본 설정 (위치 권한이 없어도 동네 인증에서는 디폴트 위치로 표시)
    myMarker.setPosition(defaultCenter);
    myMarker.setVisible(!coord && !isCenterMarkerExist);

    // 위치 요청
    if (!coord || isCenterMarkerExist || markerInfo) {
      getPosition(INIT_CONDITION).catch((error: Error) => {
        console.error('Error querying geolocation permissions:', error);
      });
    }
  }, [map, myMarker, getPosition]);

  return {
    defaultCenter,
    infoWindow,
    map,
    moveToCurrentLocation,
    myMarker,
    navermaps,
    setInfoWindow,
    setMap,
    setMyMarker,
    setTransactionMarker,
    transactionMarker,
  };
};
