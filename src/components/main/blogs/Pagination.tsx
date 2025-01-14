import { motion } from "motion/react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

export default function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-20">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-3 py-2 bg-white dark:bg-blue-600 text-white rounded-md shadow-lg"
      >
        <HiArrowSmallRight size={20} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-white dark:bg-blue-600 text-white  rounded-md shadow-lg "
      >
        1
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-3 py-2 bg-white dark:bg-blue-600 text-white rounded-md shadow-lg"
      >
        <HiArrowSmallLeft size={20} />
      </motion.button>
    </div>
  );
}
