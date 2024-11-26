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
import { Link, NavLink } from "react-router-dom";
import Container from "../../container/Container";

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
      <Container>
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
                <NavLink className="pr-1 font-light" to={"/blog"}>
                  مقاله ها
                </NavLink>
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
      </Container>
      {/* <!-- Mobile Nav --> */}
      <div className="md:hidden animate-fade z-50">
            <nav className="flex flex-wrap justify-between mx-5 mt-3 items-center">
                <button id="meno_icon" 
                    className="dark:bg-gray-800 dark:text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-200 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div>
                    <img className="w-auto h-12  dark:hidden" src="./assets/images/logo.webp" alt="Logo Mobile" />
                    <img className="w-auto h-12 hidden  dark:block" src="./assets/images/logo_darkMode.webp"
                        alt="darkMode Mobile Logo" />
                </div>

                <button className="dark:hidden p-2 bg-blue-800 text-white  ease-in rounded-full"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
                <button className="hidden dark:block p-2 bg-blue-800 text-white transition  rounded-full"
                   >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </button>


                <div id="meno_list" className="w-full mt-3 hidden animate-fade-down ">
                    <ul className="flex-row h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
                    rounded-md border border-gray-300 bg-gray-200 p-4 text-lg font-semibold text-center">
                        <li
                            className="dark:text-white flex items-center px-3 py-2 rounded-lg transition-all hover:text-white hover:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                            <a className="pr-3 font-light" href="#skills">مهارت ها</a>
                        </li>
                        <li
                            className="dark:text-white flex items-center px-3 py-2 rounded-lg transition-all hover:text-white hover:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <a className="pr-3 font-light" href="#projects">پروژه ها</a>
                        </li>
                        <li
                            className="dark:text-white flex items-center px-3 py-2 rounded-lg transition-all hover:text-white hover:bg-blue-500 active:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <a className="pr-3 font-light" href="#blogs">مقاله ها</a>
                        </li>
                        <li
                            className="dark:text-white flex items-center px-3 py-2 rounded-lg transition-all hover:text-white hover:bg-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <a className="pr-3 font-light" href="#contact">تماس با ما</a>
                        </li>
                        <div>
                            <ul className="flex mt-3">
                                <li
                                    className="ml-5  w-10  shadow-indigo-700 bg-indigo-600 hover:shadow shadow-md cursor-pointer transition  rounded-full p-2 ">
                                    <a href="https://www.linkedin.com/in/sinapirzadeh/"><img
                                            src="./assets/icons/linkedin.svg" alt="linkedin" /></a>
                                </li>
                                <li
                                    className="ml-5  w-10  shadow-indigo-700 bg-indigo-600 hover:shadow shadow-md cursor-pointer transition  rounded-full p-2 ">
                                    <a href="https://www.linkedin.com/in/sinapirzadeh/"><img
                                            src="./assets/icons/github.svg" alt="github" /></a>
                                </li>
                                <li
                                    className="ml-5  w-10  shadow-indigo-700 bg-indigo-600 hover:shadow shadow-md cursor-pointer transition  rounded-full p-2 ">
                                    <a href="https://t.me/sinapirzadeh"><img src="./assets/icons/telegram.svg"
                                            alt="telegram" /></a>
                                </li>
                                <li className="ml-0 mr-auto bg-blue-500 px-3 py-2 items-center rounded-md text-white flex
                                    shadow-indigo-700 hover:shadow shadow-md cursor-pointer transition ">
                                    <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                    </svg>
                                    <a className="text-sm pr-2" href="./assets/سینا_پیرزاده-fa.pdf">دانلود
                                        PDF</a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  );
}
