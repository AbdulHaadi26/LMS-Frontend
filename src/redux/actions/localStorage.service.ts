export const setLocalStorageValue = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageValue = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageValue = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
