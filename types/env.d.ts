export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SERVER_URL: string // 서버 URL
      NEXT_PUBLIC_WEBSOCKET_URL: string // 클라이언트에서 사용할 웹소켓 URL
      NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: string // Naver Map 클라이언트 ID
      NEXT_PUBLIC_FIREBASE_API_KEY: string // Firebase API 키
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string // Firebase 인증 도메인
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: string // Firebase 프로젝트 ID
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string // Firebase 스토리지 버킷
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string // Firebase 메시징 발신자 ID
      NEXT_PUBLIC_FIREBASE_APP_ID: string // Firebase 앱 ID
      NEXT_PUBLIC_FIREBASE_VAPID_KEY: string // Firebase VAPID 키
      NEXT_PUBLIC_CLIENT_URL: string // 클라이언트 URL
      NEXT_PUBLIC_OAUTH_KAKAO_KEY: string // Kakao OAuth 키
      NEXT_PUBLIC_OAUTH_NAVER_KEY: string // Naver OAuth 키
    }
  }
}
