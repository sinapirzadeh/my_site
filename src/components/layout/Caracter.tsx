import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AnimeNotification() {
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    setTimeout(() => {
      setShowNotification(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative z-50">
      {showNotification && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-1/4 right-0 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg shadow-xl flex items-center space-x-4"
        >
          <Link to={"/anime1331"}>
            <img
              src="./../../../public/images/path-to-anime-image.webp"
              alt="Anime Character"
              className="w-16 h-16 rounded-full ring-2  ring-white"
            />
          </Link>
          <div className="pr-3 flex flex-col">
            <h2 className="text-lg font-semibold">چه خبر، خوبی؟</h2>
            <Link to={"/blog"}>
              <p className="text-sm">به مقاله‌ها هم یه نگاه بنداز!</p>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
