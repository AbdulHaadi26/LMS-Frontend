import axios from "axios";

axios.defaults.baseURL = "http://localhost";

export const publicAPI = axios.create({
  baseURL: "http://localhost",
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateAPI = axios.create({
  baseURL: "http://localhost",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
