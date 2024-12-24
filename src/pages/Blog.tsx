import Container from "../components/container/Container";
import LoadingProjectArticle from "../components/layout/loadings/LoadingProjectArticle";
import ArticleItem from "../components/main/blogs/ArticleItem";
import BlogFilter from "../components/main/blogs/BlogFilter";
import Pagination from "../components/main/blogs/Pagination";
import { IArticleType } from "../components/types/types";
import { useGetData } from "../hooks/api/useGetData";
import { getBlog } from "../services/site/BlogApi";

export default function Blog() {
  const { data: articles, isLoading } = useGetData<IArticleType[]>(
    "blog",
    getBlog
  );

  return (
    <section id="weblog" className="mt-8 z-0">
      <Container>
        <BlogFilter />
        {isLoading && <LoadingProjectArticle />}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10    mt-16">
          {articles?.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
        <Pagination />
      </Container>
    </section>
  );
}
