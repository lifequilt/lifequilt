import apiStorage from './apiStorage';

const postStorage = ({ refName, file }) => {
  const storageRef = apiStorage.child(refName);

  const promise = storageRef.put(file);

  return promise;
};

export default postStorage;
