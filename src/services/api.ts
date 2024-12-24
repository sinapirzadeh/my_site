import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      toast.error(`خطای سرور: ${error.response.status}`);
    } else if (error.request) {
      toast.error("ارتباط با سرور برقرار نشد");
    } else {
      toast.error("یک خطای ناشناخته رخ داد");
    }
    return Promise.reject(error);
  }
);

export default api;
