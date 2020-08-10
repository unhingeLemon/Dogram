import * as firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyAMeDSqThFjov05YLgda1PSEtzS6Ks-Jmg',
  authDomain: 'gallery-22227.firebaseapp.com',
  databaseURL: 'https://gallery-22227.firebaseio.com',
  projectId: 'gallery-22227',
  storageBucket: 'gallery-22227.appspot.com',
  messagingSenderId: '151063539673',
  appId: '1:151063539673:web:02045b812844b2d3ba73c8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
