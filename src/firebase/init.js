import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDQUDBuFKShdmEAAvmoYKmyM6uWuL1fJwU",
    authDomain: "ninja-chat-47f80.firebaseapp.com",
    projectId: "ninja-chat-47f80",
    storageBucket: "ninja-chat-47f80.appspot.com",
    messagingSenderId: "588976146527",
    appId: "1:588976146527:web:7e15e2b241d27ff04473ea"
  };

  const firebaseApp =firebase.initializeApp(config)
  firebaseApp.firestore().settings({timestampsInSnapshots: true})


  export default firebaseApp.firestore()

