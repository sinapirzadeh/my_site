import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { toast } from "react-toastify";

export default function SetLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-2 items-center bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 text-white p-4 shadow-2xl rounded-lg"
        >
          <span className="text-lg font-medium">محتوا برایتان مفید بود؟</span>
          <motion.div
            onClick={() => {
              toast.success("خوشحالیم که محتوا برایتان مفید بود");
              setIsVisible(false);
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#f97316",
            }}
            whileTap={{ scale: 0.9 }}
            className="border-2 border-white bg-orange-400 text-white p-2 rounded-full cursor-pointer shadow-md transition-all duration-300"
          >
            <AiOutlineLike size={25} />
          </motion.div>
          <motion.div
            onClick={() => {
              setIsVisible(false);
              toast.info("ممنون میشیم که نظرتان را کامنت کنید");
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#f97316",
            }}
            whileTap={{ scale: 0.9 }}
            className="border-2 border-white bg-orange-400 text-white p-2 rounded-full cursor-pointer shadow-md transition-all duration-300"
          >
            <AiOutlineDislike size={25} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
