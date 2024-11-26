import python from "../../../assets/programmin_logo/python.svg";
import js from "../../../assets/programmin_logo/js.svg";
import react from "../../../assets/programmin_logo/react.svg";
import node from "../../../assets/programmin_logo/nodejs.svg";
import figma from "../../../assets/programmin_logo/figma.svg";
import flutter from "../../../assets/programmin_logo/flutter.svg";
import ai from "../../../assets/programmin_logo/ai.svg";
import profile from "../../../../public/images/avatar.jpg";
import { motion } from "motion/react";

export default function ProfileImg() {
  return (
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
                src={profile}
                alt="پروفایل سینا پیرزاده"
              />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
