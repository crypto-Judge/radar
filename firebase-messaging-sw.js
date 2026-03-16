importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBftV7XOVJ29c4JVHBp2qy-FcUjeTISztA",
  authDomain: "stock-flow-app.firebaseapp.com",
  projectId: "stock-flow-app",
  storageBucket: "stock-flow-app.firebasestorage.app",
  messagingSenderId: "974039905428",
  appId: "1:974039905428:web:f28ee829a35e31450b3081",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: "/icons/Icon-192.png",
  });
});
