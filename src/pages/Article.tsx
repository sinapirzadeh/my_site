import { Link, useParams } from "react-router-dom";
import Container from "../components/container/Container";
import { FaCommentAlt, FaClock, FaHeart } from "react-icons/fa";
import ArticleProfile from "../components/main/article/ArticleProfile";
import ShortLink from "../components/main/article/ShortLink";
import AddCommetn from "../components/main/article/comment/AddCommetn";
import Comments from "../components/main/article/comment/Comments";
import { IArticleType } from "../components/types/types";
import { getArticle } from "../services/site/BlogApi";
import ArticleDetailLoding from "../components/layout/loadings/ArticleDetailLoding";
import ArticlessLoading from "../components/layout/loadings/ArticlessLoading";
import SetLink from "../components/main/article/SetLink";
import { HiOutlineHome } from "react-icons/hi2";
import { Helmet } from "react-helmet-async";
import { useGetDataBySlug } from "../hooks/api/useGetDataBySlug";

export default function Article() {
  const { slug } = useParams();
  const { data: article, isLoading } = useGetDataBySlug<IArticleType>(
    ["article", slug],
    () => getArticle(slug as string),
    (data) => data
  );

  let formater = Intl.DateTimeFormat("pr-ir", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <section id="article-detail" className="mx-5 md:mx-24 mb-10 mt-8 z-0">
      <Container>
        <div className="bg-white my-8 dark:text-white dark:bg-gray-600 py-2 px-3 rounded-lg shadow-md ">
          <Helmet>
            <title>{article?.title}</title>
            <meta name="description" content={article?.meta_description} />
            <meta name="keywords" content={article?.meta_keywords} />
          </Helmet>
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <HiOutlineHome size={30} />
            </Link>
            <Link to={"/blog"} className="text-blue-600 dark:text-blue-300">
              مقالات
            </Link>
            <span>-</span>
            <p className="font-light">{article?.slug}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 ">
          <div className="col-span-9 max-lg:col-span-12 bg-white dark:bg-gray-700 shadow-md rounded-lg dark:text-gray-200">
            {isLoading ? (
              <ArticleDetailLoding />
            ) : (
              <>
                <div className="m-5 pt-5 flex max-md:flex-col  justify-between items-center">
                  <h1 className="border-r-4 border-blue-500 font-bold text-2xl pr-2 max-md:mb-5">
                    {article?.title}
                  </h1>

                  <div className="flex text-white gap-4 ">
                    <span className="flex items-center bg-cyan-700 p-2 rounded-lg shadow-lg">
                      <span className="pl-2">
                        {formater.format(
                          Date.parse(article?.updatedAt || "2500-12-4")
                        )}
                      </span>
                      <FaClock size={25} />
                    </span>
                    <span className="flex items-center bg-red-500 p-2 rounded-lg shadow-lg">
                      <span className="pl-2">{article?.like_count}</span>
                      <FaHeart size={25} />
                    </span>
                    <span className="flex items-center bg-blue-500 p-2 rounded-lg shadow-lg">
                      <span className="pl-2">{article?.comments_count}</span>
                      <FaCommentAlt size={25} />
                    </span>
                  </div>
                </div>
                <div className="mx-6">
                  <img
                    className="border-2 w-1/2 rounded-2xl m-auto my-6"
                    src={article?.image}
                    alt={article?.image_alt}
                  />

                  <p className="text-justify leading-10 py-8">{article?.description}</p>
                </div>
              </>
            )}
          </div>
          <div className="col-span-3 space-y-5 max-lg:col-span-12">
            <ArticleProfile />
            {/* {isLoading ? (
              <ArticlessLoading />
            ) : (
              <ShortLink shortLink={article?.short_url as string} />
            )} */}
            {/* {isLoading ? <ArticlessLoading /> : <Tagse tags={article?.tags as string} />} */}
            <SetLink />
            <AddCommetn />
            {isLoading ? <ArticlessLoading /> : <Comments />}
          </div>
        </div>
      </Container>
    </section>
  );
}
