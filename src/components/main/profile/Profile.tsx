import python from "../../../assets/programmin_logo/python.svg";
import js from "../../../assets/programmin_logo/js.svg";
import react from "../../../assets/programmin_logo/react.svg";
import node from "../../../assets/programmin_logo/nodejs.svg";
import figma from "../../../assets/programmin_logo/figma.svg";
import flutter from "../../../assets/programmin_logo/flutter.svg";
import ai from "../../../assets/programmin_logo/ai.svg";
import profile from "../../../../public/images/avatar.jpg";
import liaLinkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import telegram from "../../../assets/telegram.svg";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

export default function Profile() {
  return (
    <div
      id="about"
      className="z-10 flex items-center flex-col md:flex-row my-14"
    >
      {/* <!-- profile --> */}
      <div className="flex-1">
        <div className="relative transform h-full w-full flex items-center justify-center">
          <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={python} alt="python" />
              </span>
            </button>

            <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={js} alt="js" />
              </span>
            </button>

            <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={node} alt="node js" />
              </span>
            </button>

            <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={react} alt="react-js" />
              </span>
            </button>

            <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={figma} alt="figma" />
              </span>
            </button>

            <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={flutter} alt="flutter" />
              </span>
            </button>

            <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img src={ai} alt="Ai" />
              </span>
            </button>

            <button className="border-blue-700 profile_item w-[200px] h-[200px] p-0 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <img
                  className="rounded-full"
                  src={profile}
                  alt="پروفایل سینا پیرزاده"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- discription --> */}
      <div className="flex-1 space-y-5 md:mt-0 mt-10 md:text-start text-center">
        <h1 className="text-4xl font-semibold dark:text-white text-blue-600">
          سینا پیرزاده<span> هستم</span>
        </h1>
        <h3 className="text-2xl dark:text-white">
          برنامه نویس وب و هوش مصنوعی
        </h3>
        <p className="text-wrap dark:text-white leading-6 tracking-wide">
          تا به حال با زبان برنامه نویسی های مختلفی کار کردم ولی انتخابم php &
          python بود. درنتیجه این با استفاده از این دو زبان به سراغ برنامه نویس
          end-back با laravel و با python به سراغ هوش مصنوعی رفتم. در حال حاضر
          با Laravel کار میکنم.
        </p>
        <div className="flex max-sm:hidden max-md:justify-center">
          <div className="flex ">
            <div className="ml-5  w-10  shadow-indigo-700 bg-indigo-600 hover:shadow shadow-md cursor-pointer transition  rounded-full p-2 ">
              <a href="https://www.linkedin.com/in/sinapirzadeh/">
                <img src={liaLinkedin} alt="linkedin" />
              </a>
            </div>
            <div className="ml-5  w-10  shadow-indigo-700 bg-indigo-600 hover:shadow shadow-md cursor-pointer transition  rounded-full p-2 ">
              <a href="https://www.linkedin.com/in/sinapirzadeh/">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="ml-5  w-10  shadow-indigo-700 bg-indigo-600 hover:shadow shadow-md cursor-pointer transition  rounded-full p-2 ">
              <a href="https://t.me/sinapirzadeh">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
            <div
              className="ml-0 mr-auto bg-blue-600 animate-flip-up px-4 py-2 items-center rounded-md text-white flex
                  shadow-indigo-700 hover:shadow shadow-md cursor-pointer transition "
            >
              <HiOutlineArrowUpTray size={25} />
              <a className="text-sm pr-2" href="./assets/سینا_پیرزاده-fa.pdf">
                دانلود رزومه
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
