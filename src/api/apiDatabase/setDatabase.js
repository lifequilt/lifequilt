import apiDatabase from './apiDatabase';

const setDatabase = ({ refName, jsonObject }) => {
  const databaseRef = apiDatabase.ref(refName);

  const promise = databaseRef.set(jsonObject);

  return promise;
};

export default setDatabase;
