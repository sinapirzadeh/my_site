import { motion } from "framer-motion";
import { HiMiniLanguage } from "react-icons/hi2";

export default function BtnLan() {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      drag
      className="bg-green-500 flex items-center text-white  p-2 rounded-lg shadow-md "
    >
      <HiMiniLanguage className="ml-2" size={25} />
      فارسی
    </motion.button>
  );
}
