import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="text-center space-y-5 my-20 dark:text-white px-20">
      <h1 className="text-2xl text-red-600">صفحه مورد نظر شما پیدا نشد</h1>
      <p>
        شما را به تماشای شاهکار انیمه‌ای اتک آن تایتان دعوت می‌کنم؛ اثری مملو از
        هیجان، داستانی عمیق و لحظاتی به‌یادماندنی. تجربه‌ای که نباید از دست
        بدهید!
        <br />
        <motion.a
          href="https://aiofilm.com/anime/shingeki-no-kyojin/"
          className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0.8 }}
          whileHover={{
            scale: 1.1,
            backgroundPosition: "200% center",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundSize: "200% auto",
            transition: "background-position 0.5s ease",
          }}
        >
          تماشای انیمه
        </motion.a>
      </p>
      <img
        className="border-4 shadow-lg border-purple-600 rounded-lg m-auto h-[600px]"
        src="./../../public/images/anime_img.jpg"
        alt="اتک آن تایتان"
      />
    </div>
  );
}
