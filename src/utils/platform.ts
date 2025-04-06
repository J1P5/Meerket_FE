import { LocationErrorCode } from 'types';

const osPatterns: Record<string, RegExp> = {
  iOS: /iPhone|iPad|iPod/i,
  Android: /Android/i,
};

/**
 * 현재 디바이스의 운영 체제 확인
 * @returns {string} 현재 운영 체제의 이름 (예: 'iOS', 'Android', 'Other')
 */
export const getCurrentOS = () => {
  for (const [os, pattern] of Object.entries(osPatterns)) {
    if (pattern.test(navigator.userAgent)) {
      return os;
    }
  }
  return 'Other';
};

/**
 * 주어진 에러 코드를 운영 체제에 맞게 매핑
 * @param errorCode - 원래의 에러 코드
 * @returns {LocationErrorCode} 운영 체제에 맞게 매핑된 에러 코드
 */
export const mapLocationErrorCode = (errorCode: LocationErrorCode) => {
  if (errorCode === 'PERMISSION_DENIED') {
    return {
      iOS: 'PERMISSION_DENIED_IOS',
      Android: 'PERMISSION_DENIED_ANDROID',
      Other: 'PERMISSION_DENIED',
    }[getCurrentOS()] as LocationErrorCode;
  }
  return errorCode;
};
