import apiDatabase from './apiDatabase';

const postDatabase = ({ refName, jsonObject }) => {
  const databaseRef = apiDatabase.ref(refName);

  const promise = databaseRef.push(jsonObject);

  return promise;
};

export default postDatabase;
