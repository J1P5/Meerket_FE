import { useCallback } from 'react';
import { useNavermaps } from 'react-naver-maps';

export const useReverseGeocode = () => {
  const navermaps = useNavermaps();

  const searchCoordinateToAddress = useCallback(
    (latLng: naver.maps.Coord): Promise<string> => {
      return new Promise((resolve, reject) => {
        navermaps.Service.reverseGeocode(
          {
            coords: latLng,
            orders: [navermaps.Service.OrderType.LEGAL_CODE].join(','),
          },
          (status, response) => {
            if (status === navermaps.Service.Status.ERROR) {
              reject(new Error('ADDRESS_FETCH_ERROR'));
              return;
            }
            const items = response.v2.results;
            if (!items || items.length === 0) {
              reject(new Error('ADDRESS_NOT_FOUND'));
              return;
            }

            const address =
              items[0].region.area1.name +
              ' ' +
              items[0].region.area2.name +
              ' ' +
              items[0].region.area3.name;

            resolve(address);
          },
        );
      });
    },
    [navermaps],
  );

  return { searchCoordinateToAddress };
};
