import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavermaps } from 'react-naver-maps';
import { IMapProps } from 'types';

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
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [myMarker, setMyMarker] = useState<naver.maps.Marker | null>(null);
  const [transactionMarker, setTransactionMarker] =
    useState<naver.maps.Marker | null>(null);
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow | null>(
    null,
  );
  const isFirstExecution = useRef(true);

  const onSuccessGeolocation = useCallback(
    (position: GeolocationPosition) => {
      if (!map || !myMarker) return;
      const location = new navermaps.LatLng(
        position.coords.latitude,
        position.coords.longitude,
      );

      setMyCoord?.(location);

      myMarker.setVisible(true);
      myMarker.setPosition(location);
      map.setZoom(DEFAULT_ZOOM_LEVEL);

      if (coord && isFirstExecution.current) {
        isFirstExecution.current = false;
        return;
      }

      map.setCenter(location);
    },
    [coord, map, myMarker, setMyCoord],
  );

  const onErrorGeolocation = useCallback(
    (error: GeolocationPositionError) => {
      switch (error.code) {
        case 1:
          locationErrorEvent?.('PERMISSION_DENIED');
          break;
        case 2:
          locationErrorEvent?.('POSITION_UNAVAILABLE');
          break;
        case 3:
          locationErrorEvent?.('TIMEOUT');
          break;
      }
    },
    [locationErrorEvent],
  );

  const handlePermission = useCallback(
    (result: PermissionStatus, type: string) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(
          onSuccessGeolocation,
          onErrorGeolocation,
          { timeout: 10000 },
        );
      } else if (result.state === 'denied') {
        if (
          type === 'getMyLocation' ||
          (type === 'init' && !coord && !isCenterMarkerExist)
        ) {
          locationErrorEvent?.('PERMISSION_DENIED');
        }
      }
    },
    [locationErrorEvent, onErrorGeolocation, onSuccessGeolocation],
  );

  const requestGeolocation = useCallback(
    (type: string) => {
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then((result) => handlePermission(result, type))
          .catch((error) => {
            console.error('Error querying geolocation permissions:', error);
          });
      } else {
        locationErrorEvent?.('BROWSER_NOT_SUPPORTED');
        myMarker?.setPosition(defaultCenter);
        myMarker?.setVisible(!coord && !isCenterMarkerExist);
      }
    },
    [locationErrorEvent, handlePermission],
  );

  const moveToCurrentLocation = useCallback(() => {
    if (!map || !myMarker) return;
    requestGeolocation('getMyLocation');
  }, [map, myMarker, requestGeolocation]);

  useEffect(() => {
    if (!map || !myMarker) return;

    if (coord) {
      const position = new navermaps.LatLng(coord.lat, coord.lng);
      map.setCenter(position);

      if (!isCenterMarkerExist && transactionMarker) {
        transactionMarker.setPosition(position);
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

    /**
     * 위치 요청 보내기 전 전처리
     * 동네 인증 시 내 위치를 못 불러와도 내 마커를 보여줘야 함
     * 나머지 경우에는 마커를 숨김
     */
    myMarker.setPosition(defaultCenter);
    myMarker.setVisible(!coord && !isCenterMarkerExist);

    if (!coord || isCenterMarkerExist || markerInfo) {
      requestGeolocation('init');
    }
  }, [map, myMarker, requestGeolocation]);

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
