import {
  HiOutlineBolt,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlinePhone,
} from "react-icons/hi2";
import logo from "../../../../public/images/logo.webp";
import dark_logo from "../../../../public/images/logo_darkMode.webp";
import { Link, NavLink } from "react-router-dom";
import Container from "../../container/Container";
import BtnTheme from "./BtnTheme";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      {/* <!-- Nav --> */}
      <Container>
        <div className="max-md:hidden sticky top-0 z-50">
          <nav
            className="flex flex-wrap justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 dark:bg-opacity-5
        rounded-2xl border-2 dark:border-gray-300 border-indigo-400 dark:bg-gray-200 bg-blue-400 px-5 py-2 "
          >
            {/* <!-- Logo --> */}
            <div className="animate-fade">
              <Link to={"/"}>
                <img
                  className="w-auto h-12 dark:hidden"
                  src={logo}
                  alt="logo for site"
                />
                <img
                  className="w-auto h-12 hidden dark:block"
                  src={dark_logo}
                  alt="dark-logo for site Logo"
                />
              </Link>
            </div>

            {/* <!-- Menu List --> */}
            <ul className="flex justify-around text-lg font-semibold animate-fade">
              <li className="dark:text-white flex  items-center transition-colors hover:text-blue-400 ml-6">
                <HiOutlineBolt size={25} />
                <a className="pr-1 font-light" href="/#skills">
                  مهارت ها
                </a>
              </li>
              <li className="dark:text-white flex  items-center transition-colors hover:text-blue-400 ml-6">
                <HiOutlineCube size={25} />

                <a className="pr-1 font-light" href="/#projects">
                  پروژه ها
                </a>
              </li>
              <li className="dark:text-white flex  items-center transition-colors hover:text-blue-400 ml-6">
                <HiOutlineDocumentText size={25} />
                <NavLink className="pr-1 font-light" to={"/blog"}>
                  مقاله ها
                </NavLink>
              </li>
              <li className="dark:text-white flex  items-center transition-colors hover:text-blue-400 ml-6">
                <HiOutlinePhone size={25} />
                <a className="pr-1 font-light" href="/#contact">
                  تماس با ما
                </a>
              </li>
            </ul>

            {/* <!-- Dark Lighe Model Buttom --> */}
            <div className="flex items-center">
              {/* <div className=" ml-2 ">
              <BtnLan />
              </div> */}

              <BtnTheme />
            </div>
          </nav>
        </div>
      </Container>
      {/* <!-- Mobile Nav --> */}
      <div className="md:hidden z-50">
        <Container>
          <nav className="flex flex-wrap justify-between items-center mx-5 rounded-2xl border-2 dark:border-gray-300 border-indigo-400 dark:bg-gray-200 bg-opacity-5 dark:bg-opacity-5 bg-blue-400 px-5 py-2">
            <button
              onClick={() => {
                setMenu((prov) => !prov);
              }}
              className="dark:bg-gray-800 dark:text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-200 rounded-sm"
            >
              <HiOutlineMenuAlt3 size={40} />
            </button>

            {/* <!-- Logo --> */}
            <div className="animate-fade">
              <Link to={"/"}>
                <img
                  className="w-auto h-[60px] dark:hidden"
                  src={logo}
                  alt="logo for site"
                />
                <img
                  className="w-auto h-[60px] hidden dark:block"
                  src={dark_logo}
                  alt="dark-logo for site Logo"
                />
              </Link>
            </div>

            <BtnTheme />
          </nav>

          <AnimatePresence>
            {menu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-3 mx-5 rounded-2xl border-2 dark:border-gray-300 border-indigo-400 dark:bg-gray-200 bg-opacity-5 dark:bg-opacity-5 bg-blue-400 px-5 py-2"
              >
                <ul className="space-y-4 text-lg font-semibold">
                  <li className="text-white flex items-center transition-colors bg-blue-500 p-2 rounded-md active:bg-blue-600">
                    <HiOutlineBolt size={25} />
                    <a className="pr-1 font-light" href="/#skills">
                      مهارت ها
                    </a>
                  </li>
                  <li className="text-white flex items-center transition-colors bg-blue-500 p-2 rounded-md active:bg-blue-600">
                    <HiOutlineCube size={25} />
                    <a className="pr-1 font-light" href="/#projects">
                      پروژه ها
                    </a>
                  </li>
                  <li className="text-white flex items-center transition-colors bg-blue-500 p-2 rounded-md active:bg-blue-600">
                    <HiOutlineDocumentText size={25} />
                    <NavLink className="pr-1 font-light" to={"/blog"}>
                      مقاله ها
                    </NavLink>
                  </li>
                  <li className="text-white flex items-center transition-colors bg-blue-500 p-2 rounded-md active:bg-blue-600">
                    <HiOutlinePhone size={25} />
                    <a className="pr-1 font-light" href="/#contact">
                      تماس با ما
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </div>
    </>
  );
}
