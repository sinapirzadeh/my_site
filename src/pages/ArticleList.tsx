import Container from "../components/container/Container";
import LoadingProjectArticle from "../components/layout/loadings/LoadingProjectArticle";
import ArticleItem from "../components/main/blogs/ArticleItem";
import BlogFilter from "../components/main/blogs/BlogFilter";
import Pagination from "../components/main/blogs/Pagination";

export default function ArticleList() {
  return (
    <section id="weblog" className="mx-5 md:mx-24 mb-10 mt-8 z-0">
      <Container>
        <BlogFilter />
        <LoadingProjectArticle />
        <LoadingProjectArticle />
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-16 mt-16">
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
        <Pagination />
      </Container>
    </section>
  );
}
