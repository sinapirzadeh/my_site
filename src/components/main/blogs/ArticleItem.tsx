import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { IArticleType } from "../../types/types";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

export default function ArticleItem(article: IArticleType) {
  return (
    <Link to={`/blog/${article?.slug}`} className="m-auto">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white w-80 dark:bg-slate-700 dark:text-white text-gray-800 rounded-2xl shadow-xl hover:shadow transition-all"
      >
        <div className="p-2">
          <img
            className="rounded-2xl shadow-xl w-80 h-48"
            src={article?.image}
            alt={article?.image_alt}
          />
          <div className="-mt-4 flex justify-end ml-3 gap-2 z-50">
            <span className="flex gap-1 p-2 rounded-2xl bg-slate-50 dark:bg-slate-600  shadow-lg">
              <FaCommentAlt size={20} className="text-blue-500 " /> 
            </span>
            <span className="flex gap-1 p-2 rounded-2xl bg-slate-50 dark:bg-slate-600  shadow-lg">
              {article?.like_count}
              <FaHeart size={20} className="text-red-500" />
            </span>
          </div>
          <h2 className="text-xl text-center my-2">{article?.title}</h2>
        </div>
      </motion.div>
    </Link>
  );
}
