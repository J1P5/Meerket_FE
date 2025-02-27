import { getToken } from "firebase/messaging";
import { messaging } from "services/firebase";

export const useNotification = () => {
  /**
   * 알림 권한을 확인하여 토큰을 발급하는 함수
   */
  const getFcmToken = async (): Promise<string> => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(messaging, {
          //   vapidKey: "BLS2Yc1y5SwiFSU00YiHwhBLMDcwQen-G-z9R7Q-79CpsJ7tuac_y9R3zlRz1x6u81qWrGlk9n2qyitw7ZrbrKQ",
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        });
        console.log("FCM 토큰:", token);
        return token;
      } else {
        console.warn("알림 권한이 거부되었습니다.");
        return "";
      }
    } catch (error) {
      console.error("토큰 발급 실패:", error);
      return "";
    }
  };

  return {
    getFcmToken,
  };
};
