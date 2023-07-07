import firebase from 'firebase/app';
import "firebase/auth"
const app = firebase.initializeApp({
  apiKey: "AIzaSyBst6AgCCuJSRb-UtKWeN6eM5RXZhwhIgQ",
  authDomain: "bhumi-tech-assingm.firebaseapp.com",
  projectId: "bhumi-tech-assingm",
  storageBucket: "bhumi-tech-assingm.appspot.com",
  messagingSenderId: "656985707171",
  appId: "1:656985707171:web:288211a85113d50fea6516",
  measurementId: "G-P41DYXFLYG",
});

export const auth = app.auth();
export default app;