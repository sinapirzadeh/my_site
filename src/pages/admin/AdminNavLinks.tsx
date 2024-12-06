import { motion } from "motion/react";
import {
  HiOutlineBellAlert,
  HiOutlineChartBar,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCommandLine,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
  HiOutlineIdentification,
  HiOutlinePhoneArrowUpRight,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function AdminNavLinks() {
  return (
    <>
      <div className="flex justify-end bg-blue-500 p-2 rounded-md shadow-lg mb-4 text-white">
        <div className="flex ml-5">
          <span className="bg-red-500 px-2   font-light  text-white rounded-full">
            3
          </span>
          <motion.div
            animate={{
              scale: 1,
              x: [0, 4, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <HiOutlinePhoneArrowUpRight size={25} />
          </motion.div>
        </div>
        <div className="flex">
          <span className="bg-red-500 px-2   font-light  text-white rounded-full">
            3
          </span>
          <motion.div
            animate={{
              scale: 1,
              x: [0, 4, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <HiOutlineBellAlert size={25} />
          </motion.div>
        </div>
      </div>
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
            <HiOutlineIdentification size={30} />
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
            <HiOutlineCommandLine size={30} />
            <span className="mr-1">پروژه ها</span>
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
            <span className="mr-1">مقالات</span>
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
            <span className="mr-1">پیام ها</span>
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
            to="/admin/contact"
          >
            <HiOutlineEnvelope size={30} />
            <span className="mr-1">تماس ها</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
