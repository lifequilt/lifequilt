import apiDatabase from './apiDatabase';

const postDatabase = ({ refName, jsonObject }) => {
  const databaseRef = apiDatabase.ref(refName);

  const promise = databaseRef.push(jsonObject);

  return promise;
};

const setDatabase = ({ refName, jsonObject }) => {
  const databaseRef = apiDatabase.ref(refName);

  const promise = databaseRef.set(jsonObject);

  return promise;
};

export {
  postDatabase,
  setDatabase,
};
