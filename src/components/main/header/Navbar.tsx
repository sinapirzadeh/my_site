import {
  HiOutlineBolt,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlinePhone,
} from "react-icons/hi2";
import logo from "../../../../public/images/logo.webp";
import dark_logo from "../../../../public/images/logo_darkMode.webp";
import { Link, NavLink } from "react-router-dom";
import Container from "../../container/Container";
import BtnTheme from "./BtnTheme";
import BtnThemeMobile from "./BtnThemeMobile";
import { TbMessage2 } from "react-icons/tb";

export default function Navbar() {
  return (
    <Container>
      <div className="max-md:hidden mt-10">
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
      {/* ----- mobile ----- */}
      <div className="md:hidden z-50 pt-5">
        <nav className="flex flex-wrap justify-center items-center mx-5 rounded-2xl border-2  dark:border-gray-300 border-indigo-400 dark:bg-gray-200 bg-opacity-5 dark:bg-opacity-5 bg-blue-400 px-5 py-2">
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
          <div className="fixed bottom-0 right-0 z-50 left-0 p-2 px-4">
            <nav className="flex flex-wrap justify-between items-center  shadow-xl rounded-xl border-2 text-gray-50 bg-slate-50 border-gray-400 dark:border-gray-50 dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-800 py-2">
              <Link to={"/"} className="group relative px-3 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-gray-50 dark:bg-gray-500 border-gray-400 dark:border-gray-50 dark:text-white text-gray-600">
                  <HiOutlineHome size={30} />
                </div>
              </Link>
              <NavLink
                to={"/blog"}
                className="group relative px-3 cursor-pointer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-gray-50 dark:bg-gray-500  border-gray-400 dark:border-gray-50 dark:text-white text-gray-600">
                  <HiOutlineDocumentText size={30} />
                </div>
              </NavLink>
              <a
                href="sms:+989364733583?body=پیام از طرف سایت : {} "
                className="group relative px-3 cursor-pointer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-gray-50 dark:bg-gray-500 border-gray-400 dark:border-gray-50 dark:text-white text-gray-600">
                  <TbMessage2 size={30} />
                </div>
              </a>
              <div className="group relative px-3 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-gray-50 dark:bg-gray-500 border-gray-400 dark:border-gray-50 dark:text-white text-gray-600">
                  <BtnThemeMobile />
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </Container>
  );
}
