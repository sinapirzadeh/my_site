import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function SkillItem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.2 }}
      dir="ltr"
      className="bg-white dark:bg-gray-600 rounded-lg p-5 shadow-md"
    >
      <div className="flex justify-between mb-2">
        <span className="text-blue-700 dark:text-white">Vue-js</span>
        <span className="text-blue-700 dark:text-white">50%</span>
      </div>
      <div
        ref={ref}
        className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-white"
      >
        <motion.div
          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "90%" } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
