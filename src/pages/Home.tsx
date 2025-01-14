import { Helmet } from "react-helmet-async";
import HomeArticles from "../components/main/blogs/HomeArticles.tsx";
import Contact from "../components/main/contact/Contact.tsx";
import Profile from "../components/main/profile/Profile.tsx";
import Projects from "../components/main/projects/Projects.tsx";
import Skills from "../components/main/skills/Skills.tsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="سایت شخصی سینا پیرزاده - برنامه نویس وب و هوش مصنوعی"
        />
        <meta
          name="keywords"
          content="Web Developer, sina, Sina Pirzadeh, سینا پیزاده"
        />
      </Helmet>
      <section>
        <Profile />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section>
        <HomeArticles />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
