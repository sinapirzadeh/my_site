import { Route, Routes } from "react-router-dom";
import Container from "../../components/container/Container";
import AdminNavLinks from "./AdminNavLinks";
import ProfilePanel from "./profile/ProfilePanel";
import SkillsPanel from "./skills/SkillsPanel";
import Dashbord from "./dashbord/Dashbord";

export default function AdminPanel() {
  return (
    <div>
      <Container>
      <div className="relative overflow-hidden z-10 p-8 rounded-lg shadow-md">
      <div className="before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl"></div>
      <div className="after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"></div>
      <h1 className="text-xl font-bold">عنوان بخش</h1>
      <p className="mt-4">
        این بخش حاوی بک‌گراند با افکت‌های زیباست که از رنگ‌های بنفش و آبی
        استفاده می‌کند.
      </p>
    </div>
        <div className="grid grid-cols-12 my-20 mx-5 gap-5">
          <div className="col-span-3 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-10 dark:text-gray-300 ">
            <AdminNavLinks />
          </div>
          <div className="col-span-9 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-10 dark:text-white">
            <Routes>
              <Route path="/" element={<Dashbord />} />
              <Route path="/profile" element={<ProfilePanel />} />
              <Route path="/skills" element={<SkillsPanel />} />
            </Routes>
          </div>
        </div>
      </Container>
    </div>
  );
}
