import * as firebase from 'firebase';

const apiAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
    const token = result.credential.accessToken;
    const user = result.user;
    console.log(token, user);
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.warn(errorCode, errorMessage, email, credential);
  });
};

export default apiAuth;
