import { motion } from "motion/react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { LiaTelegramPlane } from "react-icons/lia";
import { VscGithubAlt } from "react-icons/vsc";

export default function ProfileAbout() {
  return (
    <div className="flex-1 space-y-5 md:mt-0 mt-10 md:text-start text-center">
      <h1 className="text-4xl font-semibold dark:text-white text-blue-600">
        سینا پیرزاده<span> هستم</span>
      </h1>
      <h3 className="text-2xl dark:text-white">برنامه نویس وب و هوش مصنوعی</h3>
      <p className="text-wrap dark:text-white">
        تا به حال با زبان برنامه نویسی های مختلفی کار کردم ولی انتخابم php &
        python بود. درنتیجه این با استفاده از این دو زبان به سراغ برنامه نویس
        end-back با laravel و با python به سراغ هوش مصنوعی رفتم. در حال حاضر با
        Laravel کار میکنم.
      </p>
      <div className="flex max-sm:hidden max-md:justify-center">
        <div className="flex space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="  shadow-indigo-700 bg-indigo-600 shadow-sm cursor-pointer rounded-full p-2 ml-2"
          >
            <a href="https://www.linkedin.com/in/sinapirzadeh/">
              <VscGithubAlt size={30} color="white" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className=" shadow-indigo-700 bg-indigo-600 shadow-sm cursor-pointer rounded-full p-2"
          >
            <a href="https://www.linkedin.com/in/sinapirzadeh/">
              <AiOutlineLinkedin size={30} color="white" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="  shadow-indigo-700 bg-indigo-600 shadow-sm cursor-pointer rounded-full p-2"
          >
            <a href="https://t.me/sinapirzadeh">
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
            <a className="text-sm pr-2" href="./assets/سینا_پیرزاده-fa.pdf">
              دانلود رزومه
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
