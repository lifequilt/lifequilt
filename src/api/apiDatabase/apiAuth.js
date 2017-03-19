import * as firebase from 'firebase';
import apiDatabase from './apiDatabase';

const apiAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
    const user = result.user;

    const newAdmin = {
      email: user.email,
    };

    const databaseRef = apiDatabase.ref(`/admins/${user.uid}`);
    databaseRef.set(newAdmin);
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.warn(errorCode, errorMessage, email, credential);
  });
};

export default apiAuth;
