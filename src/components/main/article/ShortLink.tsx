import { motion } from "motion/react";
import { FaLink } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

type shortLinkType = {
  shortLink: string;
};

export default function ShortLink({ shortLink }: shortLinkType) {
  const handelCopy = () => {
    copy(shortLink)
      ? toast.success("!لینک کپی شد")
      : toast.warning("دوباره امتحان کنید");
  };

  return (
    <div className="flex flex-col gap-1  items-start text-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200 p-3 shadow-xl rounded-lg">
      <p className="font-semibold text-xl mb-2">لینک کوتاه</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handelCopy}
        className="bg-gray-400 text-white rounded-xl cursor-pointer flex items-center gap-2 p-3 mx-auto"
      >
        <p>{shortLink}</p>
        <FaLink size={20} />
      </motion.div>
    </div>
  );
}
