import Container from "../../container/Container";
import LoadingProjectArticle from "../../layout/loadings/LoadingProjectArticle";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <Container>
      <div className="space-y-5 z-10">
        <h2 className="text-4xl dark:text-white text-center">پروژه ها</h2>
        <p className="text-center dark:text-gray-300 text-lg">
          پروژه های برنامه نویسی شده و نمونه کار ها
        </p>
      </div>
        <LoadingProjectArticle />
      <div className="mx-5 md:mx-24 my-20 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 ">
        <ProjectItem />

      </div>
    </Container>
  );
}
