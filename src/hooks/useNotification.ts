import { getToken } from "firebase/messaging";
import { messaging } from "services/firebase";

export const useNotification = () => {
  /**
   * 알림 권한을 확인하여 토큰을 발급하는 함수
   */
  const getFcmToken = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        });
        console.log("FCM 토큰:", token);
        localStorage.setItem("fcmToken", token);
      } else {
        console.warn("알림 권한이 거부되었습니다.");
      }
    } catch (error) {
      console.error("토큰 발급 실패:", error);
    }
  };

  return {
    getFcmToken,
  };
};
