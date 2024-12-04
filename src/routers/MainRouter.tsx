import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ArticleList from "../pages/ArticleList";
import Article from "../pages/Article";
import AdminPanel from "../pages/admin/AdminPanel.tsx";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<ArticleList />} />
      <Route path="/blog/article" element={<Article />} />
    </Routes>
  );
}
