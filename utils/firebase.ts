import {
  initializeApp,
  type FirebaseApp,
  type FirebaseOptions,
} from 'firebase/app'
import { getMessaging, type Messaging } from 'firebase/messaging'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

let app: FirebaseApp | null = null
let messaging: Messaging | null = null

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig)
  messaging = getMessaging(app)
}

export { messaging }
