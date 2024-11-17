import {
  HiMiniMoon,
  HiOutlineBolt,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlinePhone,
  HiOutlineSun,
} from "react-icons/hi2";
import logo from "../../../../public/images/logo.webp";
import dark_logo from "../../../../public/images/logo_darkMode.webp";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [cookies, setCookie] = useCookies(["Theme_Mode"]);
  const [themeMode, setThemeMode] = useState<boolean>(
    cookies.Theme_Mode ? true : false
  );

  useEffect(() => {
    setThemeMode(cookies.Theme_Mode ? true : false);
  }, []);

  const handleTheme = () => {
    setThemeMode(!themeMode);
    document.body.classList.toggle("dark");
    setCookie("Theme_Mode", themeMode);
  };

  return (
    <>
      {/* <!-- Nav --> */}
      <div className="sticky top-0 z-50">
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
            <li className="dark:text-white flex  items-center hover:text-blue-500 ml-6">
              <HiOutlineBolt size={25} />
              <a className="pr-1 font-light" href="#skills">
                مهارت ها
              </a>
            </li>
            <li className="dark:text-white flex  items-center hover:text-blue-500 ml-6">
              <HiOutlineCube size={25} />

              <a className="pr-1 font-light" href="#projects">
                پروژه ها
              </a>
            </li>
            <li className="dark:text-white flex  items-center hover:text-blue-500 ml-6">
              <HiOutlineDocumentText size={25} />
              <a className="pr-1 font-light" href="#blogs">
                مقاله ها
              </a>
            </li>
            <li className="dark:text-white flex  items-center hover:text-blue-500 ml-6">
              <HiOutlinePhone size={25} />
              <a className="pr-1 font-light" href="#contact">
                تماس با ما
              </a>
            </li>
          </ul>

          {/* <!-- Dark Lighe Model Buttom --> */}
          <div>
            <button
              onClick={handleTheme}
              className="animate-jump-in p-2 bg-blue-600 text-white ease-in rounded-full"
            >
              {!themeMode ? (
                <HiMiniMoon size={25} />
              ) : (
                <HiOutlineSun size={25} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* <!-- Mobile Nav --> */}
    </>
  );
}
