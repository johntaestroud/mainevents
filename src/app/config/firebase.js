import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAE5oqVG7FKsDipzIq1n-Kc9acRiIsVb88",
    authDomain: "mainevents-208316.firebaseapp.com",
    databaseURL: "https://mainevents-208316.firebaseio.com",
    projectId: "mainevents-208316",
    storageBucket: "",
    messagingSenderId: "616560037577"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;