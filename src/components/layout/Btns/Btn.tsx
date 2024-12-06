import { motion } from "framer-motion";
import React from "react";

interface IBtnType {
  children: React.ReactNode;
  bg_color?: string;
  padding?: string;
  scaleSize?: number;
  customClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Btn({
  children,
  bg_color = "bg-blue-500",
  padding = "py-2 px-3",
  scaleSize = 0.9,
  customClasses = "",
  onClick,
}: IBtnType) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: scaleSize, transition: { duration: 0.1 } }}
      className={`${bg_color} rounded-lg shadow text-white  ${padding} ${customClasses}`}
    >
      {children}
    </motion.button>
  );
}
