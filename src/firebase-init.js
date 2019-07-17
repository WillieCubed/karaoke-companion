import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDkH80CaKzB154T0PYsyOCJhlyywEcKx9w',
  authDomain: 'karaoke-companion.firebaseapp.com',
  databaseURL: 'https://karaoke-companion.firebaseio.com',
  projectId: 'karaoke-companion',
  storageBucket: '',
  messagingSenderId: '953185019848',
  appId: '1:953185019848:web:47f8c04529d14e84',
};

let firebaseInitialized = false;

function initFirebase() {
  if (!firebaseInitialized) {
    firebase.initializeApp(config);
    firebaseInitialized = true;
  }
}

export default initFirebase;
