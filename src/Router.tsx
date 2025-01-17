import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ArticleList from "./pages/Blog";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import ProfilePanel from "./pages/admin/profile/ProfilePanel";
import SkillsPanel from "./pages/admin/skills/SkillsPanel";
import MessagePanel from "./pages/admin/message/MessagePanel";
import AdminPanel from "./pages/admin/AdminPanel";
import Layout from "./components/layout/Layout";
import Dashbord from "./pages/admin/dashbord/Dashbord";
import ProjectsPanel from "./pages/admin/projects/ProjectsPanel";
import ArticlesPanel from "./pages/admin/articles/ArticlesPanel";
import AddArticle from "./pages/admin/articles/AddArticle";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "blog",
        element: <ArticleList />,
      },
      {
        path: "blog/:slug",
        element: <Article />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminPanel />,
    children: [
      { path: "", element: <Dashbord /> },
      { path: "profile", element: <ProfilePanel /> },
      { path: "skills", element: <SkillsPanel /> },
      { path: "projects", element: <ProjectsPanel /> },
      { path: "articles", element: <ArticlesPanel /> },
      { path: "articles/add", element: <AddArticle /> },
      { path: "messages", element: <MessagePanel /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
