import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ArticleList from "./pages/Blog";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import ProfilePanel from "./pages/admin/profile/ProfilePanel";
import SkillsPanel from "./pages/admin/skills/SkillsPanel";
import ContactPanel from "./pages/admin/contact/ContactPanel";
import MessagePanel from "./pages/admin/message/MessagePanel";
import AdminPanel from "./pages/admin/AdminPanel";
import Layout from "./components/layout/Layout";

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
      { path: "profile", element: <ProfilePanel /> },
      { path: "skills", element: <SkillsPanel /> },
      { path: "messages", element: <MessagePanel /> },
      { path: "contact", element: <ContactPanel /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
