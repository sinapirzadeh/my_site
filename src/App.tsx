import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRouter from "./routers/MainRouter";
import AdminRouter from "./routers/AdminRouter";
import AdminPanel from "./pages/admin/AdminPanel";
import AnimationCaracter from "./components/layout/AnimationCaracter";

export default function App() {
  return (
    <Layout>
      <AnimationCaracter />
      <MainRouter />
      <ToastContainer />
    </Layout>
  );
}
