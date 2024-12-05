import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRouter from "./routers/MainRouter";
import AdminRouter from "./routers/AdminRouter";

export default function App() {
  return (
    <Layout>
      <AdminRouter />
      <MainRouter />
      <ToastContainer />
    </Layout>
  );
}
