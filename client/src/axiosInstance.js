import axios from "axios";

const API_BASE_URL = "https://luminae-c85h.onrender.com"; // use your Render backend

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

console.log("Axios baseURL:", API_BASE_URL);

export default axiosInstance;
