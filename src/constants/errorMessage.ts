import { LocationErrorCode } from 'types';

export const LocationError: Record<
  LocationErrorCode,
  { title: string; message: string }
> = {
  PERMISSION_DENIED: {
    title: '지금은 위치를 불러올 수 없어요.',
    message: '위치 권한 허용 후 다시 시도해 주세요!',
  },
  PERMISSION_DENIED_IOS: {
    title: '지금은 위치를 불러올 수 없어요.',
    message: '설정 → Safari → 웹사이트 설정 → 위치 → 허용으로 변경해주세요!',
  },
  PERMISSION_DENIED_ANDROID: {
    title: '지금은 위치를 불러올 수 없어요.',
    message: '주소창 왼쪽 자물쇠 아이콘 → 위치 → 허용으로 변경해주세요!',
  },
  ADDRESS_FETCH_ERROR: {
    title: '주소를 가져오는 데 문제가 발생했어요.',
    message: '잠시 후에 다시 시도해 주세요!',
  },
  ADDRESS_NOT_FOUND: {
    title: '해당 위치는 주소를 찾을 수 없어요.',
    message: '정확한 주소를 위해 유효한 위치를 선택해 주세요!',
  },
  POSITION_UNAVAILABLE: {
    title: '위치 정보를 가져오는 데 문제가 발생했어요.',
    message: '잠시 후에 다시 시도해 주세요!',
  },
  TIMEOUT: {
    title: '위치 정보를 가져오는 데 문제가 발생했어요.',
    message: '잠시 후에 다시 시도해 주세요!',
  },
  BROWSER_NOT_SUPPORTED: {
    title: '현재 사용 중인 브라우저는 위치 정보를 지원하지 않아요.',
    message: 'Chrome, Firefox, Safari와 같은 최신 브라우저를 사용해 주세요!',
  },
};
