import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB3gVeRZwKt_DXJej_V1HBe3MzCNq9Nvg4",
    authDomain: "todo-c1c1c.firebaseapp.com",
    databaseURL: "https://todo-c1c1c.firebaseio.com",
    projectId: "todo-c1c1c",
    storageBucket: "todo-c1c1c.appspot.com",
    messagingSenderId: "652730197561",
    appId: "1:652730197561:web:99da64ae1a7dc708994fe8",
    measurementId: "G-6GB37CHL79"
  };

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()

export default firestore