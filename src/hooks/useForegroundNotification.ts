import { onMessage } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "services/firebase";

/**
 * 앱 활성화 상태일 때 알림 처리를 위한 훅
 */
export const useForegroundNotification = () => {
  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("포그라운드 메시지 수신:", payload);

      const title = payload.notification?.title || "알림";
      const body =
        payload.notification?.body || "새로운 메시지가 도착했습니다.";

      // const url = data?.url || "/"; 
    
      console.log("data?.url", payload.data?.url);

      // TODO 앱 사용중 알림 처리
      console.log(title, body);
    });

    return () => {
      unsubscribe();
    };
  }, []);
};
