import axios from "axios";

// 👇 change this to your Render backend
const API_BASE_URL = "https://luminae-c85h.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // keep if you use cookies / sessions
});

console.log("Axios Base URL →", API_BASE_URL);

export default axiosInstance;
