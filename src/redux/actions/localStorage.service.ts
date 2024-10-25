import { LocalStorageItemNames } from "../../utils/enum";

export const setLocalStorageValue = (
  key: LocalStorageItemNames,
  value: string
) => localStorage.setItem(key, value);

export const getLocalStorageValue = (key: LocalStorageItemNames) =>
  localStorage.getItem(key);

export const removeLocalStorageValue = (key: LocalStorageItemNames) =>
  localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();
