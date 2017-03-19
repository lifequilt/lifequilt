import api from '../api';

const getDatabase = url => {
  const result = api.database().ref(url);
  // const promise = result.on('value', snapshot => { console.log(snapshot.val()); return snapshot.val(); });
  return result;
};

export default getDatabase;
