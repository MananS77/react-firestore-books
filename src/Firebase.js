import * as firebase from 'firebase';
// eslint-disable-next-line
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDgY-zMf1_bdZ65wqJmfYWy2zp4nxbAVKA",
    authDomain: "board-firebase-manshah.firebaseapp.com",
    databaseURL: "https://board-firebase-manshah.firebaseio.com",
    projectId: "board-firebase-manshah",
    storageBucket: "board-firebase-manshah.appspot.com",
    messagingSenderId: "536441366614"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;