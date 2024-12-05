import { Route, Routes } from "react-router-dom";
import SkillsPanel from "../pages/admin/skills/SkillsPanel";
import Dashbord from "../pages/admin/dashbord/Dashbord";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path={"/admin"} element={<Dashbord />} />
      <Route path={"/admin/skills"} element={<SkillsPanel />} />
    </Routes>
  );
}
