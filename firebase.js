import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_N6e4WiGt4DPjiDZyGFwjypNq_HUXz3o",
    authDomain: "signal-clone-789c8.firebaseapp.com",
    projectId: "signal-clone-789c8",
    storageBucket: "signal-clone-789c8.appspot.com",
    messagingSenderId: "73594445799",
    appId: "1:73594445799:web:7937f1d72ad85e84606742"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
  