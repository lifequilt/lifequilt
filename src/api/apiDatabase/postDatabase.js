import apiDatabase from './apiDatabase';

const postDatabase = ({ refName, jsonObject }) => {
  const databaseRef = apiDatabase.ref(refName);

  const onFulfilled = response => response;

  const promise = databaseRef.set(jsonObject).then(onFulfilled);

  return promise;
};

export default postDatabase;
