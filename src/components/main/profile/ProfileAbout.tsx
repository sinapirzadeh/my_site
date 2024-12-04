import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { LiaTelegramPlane } from "react-icons/lia";
import { VscGithubAlt } from "react-icons/vsc";
import { IProfileType } from "../../types/types";
import python from "../../../assets/programmin_logo/python.svg";
import js from "../../../assets/programmin_logo/js.svg";
import react from "../../../assets/programmin_logo/react.svg";
import node from "../../../assets/programmin_logo/nodejs.svg";
import figma from "../../../assets/programmin_logo/figma.svg";
import flutter from "../../../assets/programmin_logo/flutter.svg";
import ai from "../../../assets/programmin_logo/ai.svg";
import { motion } from "motion/react";

export default function ProfileAbout(profile: IProfileType) {
  return (
    <>
      <div className="flex-1">
        <div className="relative transform h-full w-full flex items-center justify-center">
          <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px]l "
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={python} alt="python" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] "
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={js} alt="js" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px]"
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={node} alt="node js" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] "
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={react} alt="react-js" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] "
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={figma} alt="figma" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] "
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={flutter} alt="flutter" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] "
            >
              <span className="block w-[40px] h-[40px]  rounded-full z-[2] bg-white p-1">
                <img src={ai} alt="Ai" />
              </span>
            </motion.button>

            <motion.button
              drag
              whileHover={{ scale: 1.1 }}
              className="border-blue-600 profile_item w-[200px] h-[200px] p-0 border-2 rounded-full hover:border-gray-400/50 cursor-pointer z-0"
            >
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full object-cover ">
                <img
                  className="rounded-full profile"
                  src={profile.image_url}
                  alt={profile.image_alt}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-5 md:mt-0 mt-10 md:text-start text-center">
        <h1 className="text-4xl font-semibold dark:text-white text-blue-600">
          {profile.name}
          <span> هستم</span>
        </h1>
        <h3 className="text-2xl dark:text-white">{profile.short_des}</h3>
        <p className="text-wrap dark:text-white break-all  ">
          {profile.descirption}
        </p>
        <div className="flex max-sm:hidden max-md:justify-center">
          <div className="flex space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="  shadow-indigo-700 bg-indigo-600 shadow-sm cursor-pointer rounded-full p-2 ml-2"
            >
              <a href={profile.github_url}>
                <VscGithubAlt size={30} color="white" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className=" shadow-indigo-700 bg-indigo-600 shadow-sm cursor-pointer rounded-full p-2"
            >
              <a href={profile.linkedin_url}>
                <AiOutlineLinkedin size={30} color="white" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="  shadow-indigo-700 bg-indigo-600 shadow-sm cursor-pointer rounded-full p-2"
            >
              <a href={profile.telegram_url}>
                <LiaTelegramPlane size={30} color="white" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-0 mr-auto bg-blue-600 animate-flip-up px-4 py-2 items-center rounded-md text-white flex
                  shadow-indigo-700 shadow-sm cursor-pointer"
            >
              <HiOutlineArrowUpTray size={25} />
              <a className="text-sm pr-2" href={profile.rezome_url}>
                دانلود رزومه
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
