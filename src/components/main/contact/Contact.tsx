import { HiOutlineDevicePhoneMobile, HiOutlineEnvelope } from "react-icons/hi2";
import Container from "../../container/Container";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container>
      <motion.div
        animate={isInView ? { opacity: [0, 1] } : { opacity: 1 }}
        transition={{ delay: 0.2 }}
        ref={ref}
      >
        <div className="flex-row space-y-4 max-w-md mx-auto px-5 py-4 bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
          <div className="flex">
            <h2 className="font-bold">اطلاعات تماس</h2>
          </div>
          <div className="flex items-center">
            <HiOutlineDevicePhoneMobile size={25} />
            <span dir="ltr" className="pr-2">
              +98 936 - 473 - 3583
            </span>
          </div>
          <div className="flex items-center">
            <HiOutlineEnvelope size={25} />
            <span className="pr-2">sinapirzadeh1@gmail.com</span>
          </div>

          <div className=" grid grid-cols-6 gap-2">
            <h5 className="text-xl  col-span-6">
              ارسال نظر برای پروژه ها، مقالات، ...
            </h5>
            <input
              className="bg-slate-100 text-slate-600 placeholder:dark:text-white dark:bg-gray-600 dark:text-white placeholder:text-slate-800 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
              type="text"
              placeholder="موضوع"
            />
            <textarea
              className="bg-slate-100 text-slate-600 placeholder:dark:text-white dark:bg-gray-600 dark:text-white h-28 placeholder:text-slate-800 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
              placeholder="نظرتان را بنویسد"
            ></textarea>

            <button className="border px-4 py-2 rounded-lg bg-blue-500 text-white">ارسال</button>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
