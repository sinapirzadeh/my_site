import {
  HiOutlineChartBar,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCommandLine,
  HiOutlineDocumentText,
  HiOutlineIdentification,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { IoAlert } from "react-icons/io5";
import { TbError404 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function AdminNavLinks() {
  return (
    <ul className="space-y-5 ">
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
          <span className="mr-2">داشبورد</span>
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
          <HiOutlineIdentification size={30} />
          <span className="mr-2">پروفایل</span>
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
          <span className="mr-2">مهارت ها</span>
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
          <HiOutlineCommandLine size={30} />
          <span className="mr-2">پروژه ها</span>
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
          <HiOutlineDocumentText size={30} />
          <span className="mr-2">مقالات</span>
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
          to="/admin/messages"
        >
          <HiOutlineChatBubbleBottomCenterText size={30} />
          <span className="mr-2">پیام ها</span>
          <span className="bg-red-500 rounded-full  p-1 mr-5 text-white">
            <IoAlert size={15} />
          </span>
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
          to="/admin/404"
        >
          <TbError404 size={30} />
          <span className="mr-2">404</span>
        </NavLink>
      </li>
    </ul>
  );
}
