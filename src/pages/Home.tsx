import HomeArticles from "../components/main/blogs/HomeArticles.tsx";
import Contact from "../components/main/contact/Contact.tsx";
import Profile from "../components/main/profile/Profile.tsx";
import Projects from "../components/main/projects/Projects.tsx";
import Skills from "../components/main/skills/Skills.tsx";

export default function Home() {
  return (
    <>
      <section>
        {/* <!-- about-us --> */}
        <Profile />
      </section>
      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="blogs">
        <HomeArticles />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
