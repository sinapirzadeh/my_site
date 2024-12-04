import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRouter from "./routers/MainRouter";

export default function App() {
  return (
    <Layout>
      <MainRouter />
      <ToastContainer />
    </Layout>
  );
}
