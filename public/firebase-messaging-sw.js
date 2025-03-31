importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDW5D3PgKLgB43bjav1EvAhQtBhLSc76C4",
  projectId: "meerket-83e38",
  messagingSenderId: "518393754968",
  appId: "1:518393754968:web:208f662de1b23f690da12d",
};

firebase.initializeApp(firebaseConfig);

/**
 * 백그라운드 알림 처리
 */
self.addEventListener("push", (event) => {
  if (!event.data.json()) {
    return;
  }
  console.log("push_event.data.json()",event.data.json());
  console.log("push_event", event);

  // const notification = event.data.json().notification;
  const data = event.data.json().data;
  const title = data.title;
  const options = {
    body: data.body,
    icon: data.icon || "/icons/logo-128x128.png",
    data: {
      link: data.uri,
    },
  };

  self.registration.showNotification(title, options);
});

/**
 * 알림 클릭 이벤트
 */
self.addEventListener("notificationclick", (event) => {
  console.log("notificationclick_event", event);
  const data = event.notification.data;
  const url = data?.link || "/"; 

  event.notification.close(); // 알림 클릭 시 알림 제거
  event.waitUntil(clients.openWindow(url));
});
