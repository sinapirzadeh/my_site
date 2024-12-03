import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<ArticleList />} />
        <Route path="/blog/article" element={<Article />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}
