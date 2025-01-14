import {
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import Container from "../../container/Container";
import { TbSend2 } from "react-icons/tb";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container>
      <motion.div
        animate={isInView ? { opacity: [0, 1] } : { opacity: 1 }}
        transition={{ delay: 0.2 }}
        ref={ref}
        className="mx-5 md:mx-24 my-20 flex-row md:flex"
      >
        <div className="flex-1">
          <div className="px-4 mx-auto animate-border">
            <div className="flex-row space-y-4 max-w-md mx-auto px-8 py-4 bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
              <div className="">
                <h4 className="font-bold">اطلاعات تماس</h4>
                <p></p>
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

              <div className=" grid grid-cols-6 gap-2  text-sm">
                <h5 className="text-xl  col-span-6">
                  ارسال نظر برای پروژه ها، مقالات، ...
                </h5>
                <input
                  className="bg-slate-100 text-slate-600 placeholder:text-slate-800 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                  type="text"
                  placeholder="موضوع"
                />
                <textarea
                  className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-800 placeholder:opacity-50 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                  placeholder="نظرتان را بنویسد"
                ></textarea>

                <button className="bg-slate-100 py-1 stroke-slate-600 border dark:text-black border-slate-300  rounded-lg flex justify-center items-center duration-300 hover:text-white hover:stroke-white hover:bg-blue-400">
                  <TbSend2 size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className=" px-4 mx-auto">
            <div className="mx-auto">
              <div
                id="contact-form"
                className="max-w-md mx-auto px-8 py-6 bg-white dark:bg-gray-700  rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold dark:text-white mb-4">
                  با من تماس بگیرید
                </h2>
                <form>
                  <div className="mb-4">
                    <input
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
                      placeholder="نام تان را وارد کنید"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
                      placeholder="ایمیل تان را وارد کنید"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
                      rows={4}
                      placeholder="پیام تان را وارد کنید"
                      required
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-blue-400 text-white dark:bg-blue-500 py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
                    type="submit"
                  >
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
