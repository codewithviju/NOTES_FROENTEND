import axios from "axios";
import { API_BASE_URL } from "../config/appconfig";
import { toast } from "react-toastify";

const axiosAuth = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request Interceptors
axiosAuth.interceptors.request.use(
  (request) => {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Reponse Interceptors

axiosAuth.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    if (error.response.status === 404) {
      toast.error("Page Not Found");
    } else if (error.response.status === 500) {
      toast.error("Internal Server Error");
    } else if (error.response.status === 201) {
      toast.success("User Created");
    } else {
      toast.error("Internal Server Error");
    }
    // toast.error(error);
    return Promise.reject(error);
  }
);

export default axiosAuth;
