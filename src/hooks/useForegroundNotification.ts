import { onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from 'services/firebase';

/**
 * 앱 활성화 상태일 때 알림 처리를 위한 훅
 */
export const useForegroundNotification = () => {
  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Received foreground message: ', payload);

      // eslint-disable-next-line no-new
      const notification = new Notification(
        payload.data?.title || '포그라운드 알림',
        {
          body: payload.data?.content || '포그라운드 바디',
          icon: '/icons/logo-128x128.png',
          badge: '/icons/logo-128x128.png',
        },
      );

      notification.onclick = () => {
        window.location.href = payload.data?.uri || '/';
      };
    });

    return () => {
      unsubscribe();
    };
  }, []);
};
