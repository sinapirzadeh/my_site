import { NavLink, Route, Routes } from "react-router-dom";
import Container from "../../components/container/Container";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Dashbord from "./Dashbord";
import SkillsPanel from "./SkillsPanel";
import { useState } from "react";

export default function AdminPanel() {
  const [baseUrl] = useState("/admin/");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 my-20 mx-5 gap-5">
          <div className="col-span-3 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-10 dark:text-gray-300 ">
            <ul className="space-y-5">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-blue-600 hover:dark:text-blue-400 transition-colors flex items-center ${
                      isActive
                        ? "dark:text-white text-gray-900"
                        : "dark:text-slate-300 text-gray-600"
                    }`
                  }
                  to="/admin"
                >
                  <HiOutlineSquares2X2 size={30} />
                  <span className="mr-1">داشبورد</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-blue-600 hover:dark:text-blue-400 transition-colors flex items-center ${
                      isActive
                        ? "dark:text-white text-gray-900"
                        : "dark:text-slate-300 text-gray-600"
                    }`
                  }
                  to="/admin/skills"
                >
                  <HiOutlineSquares2X2 size={30} />
                  <span className="mr-1">مهارت ها</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-9 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-10 dark:text-white">
            <Routes>
              <Route path={`${baseUrl}`} element={<Dashbord />} />
              <Route path={`${baseUrl}profile`} element={<Dashbord />} />
              <Route path={`${baseUrl}skills`} element={<SkillsPanel />} />
              <Route path={`${baseUrl}projects`} element={<Dashbord />} />
              <Route path={`${baseUrl}blog`} element={<Dashbord />} />
              <Route path={`${baseUrl}article/:id`} element={<Dashbord />} />
              <Route path={`${baseUrl}contact`} element={<Dashbord />} />
            </Routes>
          </div>
        </div>
      </Container>
    </div>
  );
}
