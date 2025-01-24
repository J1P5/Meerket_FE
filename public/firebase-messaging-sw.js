importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js");

// const firebaseConfig = {
//   apiKey: "AIzaSyBiDu_GpAQ62HLx1jihJxEjKGhfPyQmT1c",
//   authDomain: "meerket-test.firebaseapp.com",
//   projectId: "meerket-test",
//   storageBucket: "meerket-test.firebasestorage.app",
//   messagingSenderId: "342062933646",
//   appId: "1:342062933646:web:776be14ae4fe4aaee40bdf",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDW5D3PgKLgB43bjav1EvAhQtBhLSc76C4",
  authDomain: "meerket-83e38.firebaseapp.com",
  projectId: "meerket-83e38",
  storageBucket: "meerket-83e38.firebasestorage.app",
  messagingSenderId: "518393754968",
  appId: "1:518393754968:web:208f662de1b23f690da12d",
  measurementId: "G-R7RM1PVXKM",
};

firebase.initializeApp(firebaseConfig);

/**
 * 백그라운드 알림 처리
 */
self.addEventListener("push", (event) => {
  if (!event.data.json()) {
    return;
  }

  const notification = event.data.json().notification;
  const title = notification.title;
  const options = {
    body: notification.body,
    icon: notification.image || notification.icon, // 웹 푸시 이미지는 icon
  };

  self.registration.showNotification(title, options);
});

/**
 * 알림 클릭 이벤트 ( 더 확인 필요 ㅠ )
 */
self.addEventListener("notificationclick", (event) => {
  console.log("알림 클릭됨:", event);

  const notification = event.notification;
  const notificationData = notification.data;

  // url ( 서버에서 보낸 url이 있다면 url 사용 / url 없는 경우 home )
  const url = notificationData?.url || "/"; //

  event.notification.close(); // 알림 클릭 시 알림 제거
  event.waitUntil(clients.openWindow(url));
});
