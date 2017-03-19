import * as firebase from 'firebase';

const getDatabase = url => {
  const result = firebase.database().ref(url);
  result.on('value', snapshot => {
    console.log(snapshot.val());
  });
};

export default getDatabase;
