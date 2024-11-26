import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import Navbar from "./Navbar";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="pt-10">
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className="z-50 p-3 bg-blue-600 text-white fixed left-10 bottom-5 border dark:border-white rounded-full"
        href="sms:+989364733583?body=پیام از طرف سایت : "
      >
        <HiOutlineChatBubbleBottomCenterText size={30} />
      </motion.a>
      <Navbar />
    </header>
  );
}
