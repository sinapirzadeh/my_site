import { motion, useInView } from "framer-motion";
import image from "../../../../public/images/projects/3.jpg";
import { useRef } from "react";

export default function ProjectItem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      transition={{ delay: 0.2 }}
      animate={isInView ? { opacity: [0, 1] } : { opacity: 0 }}
      className="m-auto border-2 shadow-lg group cursor-pointer group mr-auto overflow-hidden relative text-gray-50 h-52 w-64 rounded-lg hover:duration-700 duration-700"
    >
      <a href="https://github.com/sinapirzadeh/">
        <img src={image} alt="" />
      </a>
      <div className="bg-white dark:bg-gray-600 -bottom-24 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-blue-600 dark:text-yellow-300 font-bold text-xs">
          Express js - React js
        </span>
        <h4 className="text-gray-800 dark:text-white font-bold text-2xl">
          سایت فروشگاهی
        </h4>
      </div>
    </motion.div>
  );
}
