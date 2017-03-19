import api from '../api';

const getDatabase = url => {
  const result = api.database().ref(url);
  return result;
};

export default getDatabase;
