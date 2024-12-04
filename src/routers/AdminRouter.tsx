import { Route, Routes } from "react-router-dom";
import Doshbord from "../pages/admin/Dashbord";
import { useState } from "react";
import SkillsPanel from "../pages/admin/SkillsPanel";

export default function AdminRouter() {
  const [baseUrl] = useState("admin/");

  return (
    <Routes>
      <Route path={`${baseUrl}`} element={<Doshbord />} />
      <Route path={`${baseUrl}profile`} element={<Doshbord />} />
      <Route path={`${baseUrl}skills`} element={<SkillsPanel />} />
      <Route path={`${baseUrl}projects`} element={<Doshbord />} />
      <Route path={`${baseUrl}blog`} element={<Doshbord />} />
      <Route path={`${baseUrl}article/:id`} element={<Doshbord />} />
      <Route path={`${baseUrl}contact`} element={<Doshbord />} />
    </Routes>
  );
}
