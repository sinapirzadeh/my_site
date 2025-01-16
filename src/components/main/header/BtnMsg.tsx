import { motion } from "framer-motion";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export default function Home() {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="max-md:hidden z-50 p-2 bg-blue-600 text-white fixed left-10 bottom-7 border-2 dark:border-white rounded-full"
      href="sms:+989364733583?body=پیام از طرف سایت : {
  } "
    >
      <span className="flex items-center px-1">
        <span className="ml-2">ارتباط سریع</span>
        <HiOutlineChatBubbleOvalLeftEllipsis size={30} />
      </span>
    </motion.a>
  );
}
