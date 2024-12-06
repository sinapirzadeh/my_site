import {
  HiOutlineChartBar,
  HiOutlineEnvelope,
  HiOutlineNewspaper,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function AdminNavLinks() {
  return (
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
          to="/admin/profile"
        >
          <HiOutlineNewspaper size={30} />
          <span className="mr-1">پروفایل</span>
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
          <HiOutlineChartBar size={30} />
          <span className="mr-1">مهارت ها</span>
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
          <HiOutlineEnvelope size={30} />
          <span className="mr-1">پیام ها</span>
        </NavLink>
      </li>
    </ul>
  );
}
