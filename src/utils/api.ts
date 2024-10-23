import axios from "axios";

const baseURL = "http://localhost/api";

export const publicAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
