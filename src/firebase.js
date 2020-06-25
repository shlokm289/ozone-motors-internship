import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDhHzlkA7-e-lUng6r5bRTs6e_eZniP3dU",
    authDomain: "ozone-motors-internship.firebaseapp.com",
    databaseURL: "https://ozone-motors-internship.firebaseio.com",
    projectId: "ozone-motors-internship",
    storageBucket: "ozone-motors-internship.appspot.com",
    messagingSenderId: "702669821872",
    appId: "1:702669821872:web:e029e54e9c32e24c3d2875"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();