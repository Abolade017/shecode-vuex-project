import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/css/tailwind.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJSdq58FXMKMdjowhQMbyVt9TvPCg6BkY",
  authDomain: "messagechat-63373.firebaseapp.com",
  projectId: "messagechat-63373",
  storageBucket: "messagechat-63373.appspot.com",
  messagingSenderId: "867435579183",
  appId: "1:867435579183:web:678ad350cd49531fd543da",
  measurementId: "G-LXLHMBMMML"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const app = createApp(App);
app.use(store);
app.use(router);
// app.use(firebase);
app.mount('#app');

