import { createBrowserRouter } from "react-router-dom";

export function useStorage() {
  Storage;
}
export const router = createBrowserRouter([
  { path: "/", element: <Home>/>/ },
  {
    path: "blog",
    element: <ArticleList>/>,/,
    children: [
      {
        path: "article",
        element: <Artcle>/>,/,
      },
    ],
  },
  { path: "*", element: <NotFound>/>/ },
  {
    path: "admin",
    element: <AdminPanel>/>,/,
    children: [
      { path: "profile", element: <ProfilePanel>/>/ },
      { path: "skills", element: <SkillsPanel>/>/ },
      { path: "messages", element: <MessagePanel>/>/ },
      { path: "contact", element: <ContactPanel>/>/ },
    ],
  },
]);
