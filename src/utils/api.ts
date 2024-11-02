import axios from "axios";
import { getLocalStorageValue } from "../redux/actions/localStorage.service";
import { LocalStorageItemNames } from "./enum";

const baseURL = "http://localhost/api";
// const baseURL = "https://lms-backend-hu7e.onrender.com/api";

const publicAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const privateAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

privateAPI.interceptors.request.use(
  (config) => {
    const token = getLocalStorageValue(LocalStorageItemNames.TOKEN);
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { privateAPI, publicAPI };
