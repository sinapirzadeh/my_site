import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="pt-10">
      <a
        className="z-50 p-3 animate-pulse hover:animate-jump bg-blue-600 text-white fixed left-10 bottom-5 border dark:border-white rounded-full"
        href="sms:+989364733583?body=پیام از طرف سایت : "
      >
        <HiOutlineChatBubbleBottomCenterText  size={25}/>
      </a>

      <Navbar />
    </header>
  );
}
