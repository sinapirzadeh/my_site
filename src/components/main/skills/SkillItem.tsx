import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ISkillType } from "../../types/types";

export default function SkillItem({ title, process }: ISkillType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.2 }}
      dir="ltr"
      className=" rounded-lg p-5 shadow-md bg-gradient-to-r from-transparent via-rose-500 to-transparent"
    >
      {/* bg-white dark:bg-gray-600 */}
      <div className="flex justify-between mb-2">
        <span className="text-blue-700 dark:text-white">{title}</span>
        <span className="text-blue-700 dark:text-white">{`${process}%`}</span>
      </div>
      <div
        ref={ref}
        className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-white"
      >
        <motion.div
          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${process}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
