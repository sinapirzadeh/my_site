import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { toast } from "react-toastify";
import { getLike } from "../../../services/site/BlogApi";
import { useQuery } from "@tanstack/react-query";

export default function SetLink({ slug }: { slug: string }) {
  const [isVisible, setIsVisible] = useState(true);

  const { data: likeMessage, refetch } = useQuery({
    queryKey: ["like", slug],
    queryFn: () => getLike(slug),
    enabled: false, // جلوگیری از اجرای پیش‌فرض
  });

  const handleLikeClick = async () => {
    try {
      const { data } = await refetch(); // داده‌ها را دوباره از سرور دریافت کنید
      toast.success(data || "نظر شما ثبت شد!");
      setIsVisible(false);
    } catch (error) {
      toast.error("مشکلی پیش آمد، دوباره تلاش کنید.");
    }
  };

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
            onClick={handleLikeClick}
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
