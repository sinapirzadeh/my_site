import { NavLink } from "react-router-dom";
import Container from "../../components/container/Container";
import { HiOutlineSquares2X2, HiOutlineTrash } from "react-icons/hi2";
import { motion } from "motion/react";
import Btn from "../../components/layout/Btns/Btn";
import Modal from "../../components/layout/module/AddModule";

export default function SkillsPanel() {
  return (
    <div>
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

            <div className="col-span-9 max-md:col-span-12 bg-slate-300 dark:bg-slate-500 rounded-lg p-5 dark:text-white">
              <Modal>
                <form>
                  <div className="mb-4">
                    <input
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
                      placeholder="نام تان را وارد کنید"
                      type="text"
                      required
                    />
                  </div>
                  <button
                    className="w-full bg-blue-400 text-white dark:bg-yellow-300 dark:text-gray-800 py-2 px-4 rounded-lg hover:bg-indigo-400 transition duration-300"
                    type="submit"
                  >
                    ارسال پیام
                  </button>
                </form>
              </Modal>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="w-auto bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2"
                  dir="ltr"
                >
                  <div className="flex justify-between">
                    <h3>Python</h3>
                    <span>40%</span>
                  </div>
                  <div className="grid grid-cols-12 gap-1 items-center">
                    <Btn
                      bg_color="bg-red-500"
                      padding="p-2"
                      customClasses="col-span-1"
                    >
                      <HiOutlineTrash size={18} />
                    </Btn>
                    <div className="w-auto  bg-gray-300 col-span-11 rounded-full h-2.5 dark:bg-white">
                      <motion.div
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${20}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-auto bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2"
                  dir="ltr"
                >
                  <div className="flex justify-between">
                    <h3>Python</h3>
                    <span>40%</span>
                  </div>
                  <div className="grid grid-cols-12 gap-1 items-center">
                    <Btn
                      bg_color="bg-red-500"
                      padding="p-2"
                      customClasses="col-span-1"
                    >
                      <HiOutlineTrash size={18} />
                    </Btn>
                    <div className="w-auto  bg-gray-300 col-span-11 rounded-full h-2.5 dark:bg-white">
                      <motion.div
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${20}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
