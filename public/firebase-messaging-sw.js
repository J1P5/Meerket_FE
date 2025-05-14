importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDW5D3PgKLgB43bjav1EvAhQtBhLSc76C4",
  projectId: "meerket-83e38",
  messagingSenderId: "518393754968",
  appId: "1:518393754968:web:208f662de1b23f690da12d",
};

firebase.initializeApp(firebaseConfig);

// 이미 백그라운드에 있으면 보고 잇는 페이지로 포커스만 되고, 페이지가 없으면 클릭하면 거기로 감
// 내가 원하는 곳으로 링크가 되지 않아서 차라리 커스텀을 하는 게 나을 것 같음
// 그러면 notification을 쓸 필요가 없고, 그냥 내가 data로 커스텀을 하는게 나을 것 같다
// 모바일 테스트만 해보고 팝업 형식으로 어차피 뜨지 않는다면 그냥 data로 돌아가는 게 나을 듯
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    'Received background message: ',
    payload
  );

  // const {title, body} =  payload.notification;
  // const options = {
  //   body,
  //   icon: "/icons/logo-128x128.png",
  //   badge: "/icons/logo-128x128.png",
  // };

  // self.registration.showNotification(title, options);

  // const {title, content, uri} =  payload.data;
  // const options = {
  //   body: content,
  //   icon: "/icons/logo-128x128.png",
  //   data: {
  //     link: uri || "/",
  //   },
  //   badge: "/icons/logo-128x128.png",
  // };

  // self.registration.showNotification(title, options);
});

// self.addEventListener("notificationclick", (event) => {
//   console.log("notificationclick", event);
//   const { link } = event.notification.data;
//   event.notification.close();
//   event.waitUntil(clients.openWindow(link || "/"));
// });

/**
 * 백그라운드 알림 처리
 */
// self.addEventListener("push", (event) => {
//   if (!event.data.json()) {
//     return;
//   }
//   console.log("push_event.data.json()",event.data.json());
//   console.log("push_event", event);

//   const {title, content, uri} = event.data.json().data;
//   const options = {
//     body: content,
//     icon: "/icons/logo-128x128.png",
//     data: {
//       link: uri || "/",
//     },
//   };

//   self.registration.showNotification(title, options);
// });