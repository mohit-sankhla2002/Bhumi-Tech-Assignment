import {initializeApp} from 'firebase/app'
import {getAuth} from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAbh0uO0fgGsZvStqWs5AFXG7X5fu0jAVg",
  authDomain: "e-commerce-app-76442.firebaseapp.com",
  projectId: "e-commerce-app-76442",
  storageBucket: "e-commerce-app-76442.appspot.com",
  messagingSenderId: "234289226326",
  appId: "1:234289226326:web:8bc7389026f630984c51f7",
  measurementId: "G-BEH5KZNVSH",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;

