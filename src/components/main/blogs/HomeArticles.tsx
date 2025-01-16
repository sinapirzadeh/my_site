import {
  HiOutlineArrowSmallLeft,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import Container from "../../container/Container";
import ArticleItem from "./ArticleItem";
import { motion } from "framer-motion";
import LoadingProjectArticle from "../../layout/loadings/LoadingProjectArticle";
import { useGetData } from "../../../hooks/api/useGetData";
import { getArticlesHome } from "../../../services/site/HomeApi";
import { IArticleType } from "../../types/types";

export default function HomeArticles() {
  const { data: articles, isLoading } = useGetData<IArticleType[]>(
    "article_home",
    getArticlesHome
  );
  return (
    <div className="my-10 z-0">
      <Container>
        <div className=" mb-16 flex justify-between">
          <div className="text-indigo-500 dark:text-white flex items-center border-b-2 border-indigo-500 dark:border-white uppercase">
            <HiOutlineDocumentText size={30} />
            <h2 className="pr-1 text-xl inline-block">مقاله ها</h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border-2 p-2 bg-blue-500 rounded-md text-white flex"
          >
            <Link to={"/blog"} className="pl-3">
              مشاهده همه
            </Link>
            <HiOutlineArrowSmallLeft size={25} />
          </motion.div>
        </div>
        {isLoading && <LoadingProjectArticle />}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-20">
          {articles && articles.map((article) => <ArticleItem {...article} />)}
        </div>
      </Container>
    </div>
  );
}
