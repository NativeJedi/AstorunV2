const namespace = 'astorun__';

const setItem = ({ key, item }) => {
  localStorage.setItem(`${namespace}${key}`, item);
};

const getItem = (key) => {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
};

export default {
  setItem,
  getItem,
};
