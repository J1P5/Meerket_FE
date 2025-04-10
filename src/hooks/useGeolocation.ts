import { useCallback } from 'react';
import { LocationErrorCode } from 'types';
import { mapLocationErrorCode } from 'utils';

interface UseGeolocationProps {
  /** 위치 정보 요청 성공 시 호출되는 콜백 */
  onSuccess: (position: GeolocationPosition) => void;
  /** 위치 정보 요청 실패 시 호출되는 콜백 */
  onError: (error: LocationErrorCode) => void;
  /** 위치 요청 옵션 */
  options?: PositionOptions;
}

export const useGeolocation = ({
  onSuccess,
  onError,
  options,
}: UseGeolocationProps) => {
  const getPosition = useCallback(
    async (shouldShowError?: boolean) => {
      if (!navigator.permissions) {
        onError('BROWSER_NOT_SUPPORTED');
        return;
      }

      try {
        const permission = await navigator.permissions.query({
          name: 'geolocation',
        });

        if (permission.state === 'denied') {
          if (shouldShowError) {
            onError(mapLocationErrorCode('PERMISSION_DENIED'));
          }
          return;
        }

        navigator.geolocation.getCurrentPosition(
          onSuccess,
          (error) => {
            const errorCode = {
              1: 'PERMISSION_DENIED',
              2: 'POSITION_UNAVAILABLE',
              3: 'TIMEOUT',
            }[error.code] as LocationErrorCode;
            onError(mapLocationErrorCode(errorCode));
          },
          {
            timeout: 10000,
            ...options,
          },
        );
      } catch (error) {
        onError('POSITION_UNAVAILABLE');
      }
    },
    [options, onSuccess, onError],
  );

  return { getPosition };
};
