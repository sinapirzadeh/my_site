import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

api.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response) {
      toast.error(`خطای سرور: ${err.response.status}`);
    } else if (err.request) {
      toast.error("ارتباط با سرور برقرار نشد");
    } else {
      toast.error("یک خطای ناشناخته رخ داد");
    }
    return Promise.reject(err);
  }
);

export default api;
