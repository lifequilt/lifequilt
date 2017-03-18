import apiStorage from './apiStorage';

const postStorage = ({ refName, file }) => {
  const storageRef = apiStorage.child(refName);

  const onFulfilled = response => response;

  const promise = storageRef.put(file).then(onFulfilled);

  return promise;
};

export default postStorage;
