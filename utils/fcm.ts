import { getToken } from 'firebase/messaging'
import { messaging } from './firebase'

/**
 * FCM 토큰 발급
 * 실패 시 빈 문자열 반환
 */
export const getFcmToken = async (): Promise<string> => {
  const hasPermission = (await Notification.requestPermission()) === 'granted'
  if (!hasPermission || !messaging) {
    return ''
  }

  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  })

  return token || ''
}
