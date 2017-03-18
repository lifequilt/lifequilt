import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAwR9hMoqukhR9oEiNdBsLyEwef5Zc0vUc',
  authDomain: 'lifequilt-46fd7.firebaseapp.com',
  databaseURL: 'https://lifequilt-46fd7.firebaseio.com',
  storageBucket: 'lifequilt-46fd7.appspot.com',
  messagingSenderId: '151611394438',
};

const api = firebase.initiliazeApp(config);

export default api;
