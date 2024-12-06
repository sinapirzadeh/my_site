import { Route, Routes } from "react-router-dom";
import Container from "../../components/container/Container";
import AdminNavLinks from "./AdminNavLinks";
import ProfilePanel from "./profile/ProfilePanel";
import SkillsPanel from "./skills/SkillsPanel";
import Dashbord from "./dashbord/Dashbord";
import MessagePanel from "./message/MessagePanel";
import ContactPanel from "./contact/ContactPanel";

export default function AdminPanel() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 my-20 mx-5 gap-5">
          <div className="col-span-3 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-10 dark:text-gray-300 ">
            <AdminNavLinks />
          </div>
          <div className="col-span-9 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-5 dark:text-white  h-[550px] overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Dashbord />} />
              <Route path="/profile" element={<ProfilePanel />} />
              <Route path="/skills" element={<SkillsPanel />} />
              <Route path="/messages" element={<MessagePanel />} />
              <Route path="/contact" element={<ContactPanel />} />
            </Routes>
          </div>
        </div>
      </Container>
    </div>
  );
}
