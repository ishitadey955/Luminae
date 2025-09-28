import axios from "axios";

const API_BASE_URL = https://luminae-c85h.onrender.com
  import.meta.env.VITE_API_URL || "http://localhost:5000"; // fallback for local dev

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // if you use cookies / auth
});

export default axiosInstance;
