import { getToken } from 'firebase/messaging';
import { messaging } from 'services/firebase';

export const useNotification = () => {
  /**
   * 알림 권한을 확인하여 토큰을 발급하는 함수
   */
  const getFcmToken = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        });
        return token || '';
      } else {
        return '';
      }
    } catch (error) {
      return '';
    }
  };

  return {
    getFcmToken,
  };
};
