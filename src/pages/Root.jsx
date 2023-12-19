import Navber from "../Navber/Navber";
import backgrond from "../assets/background.png";
import Footer from "../Footer/Footer";
import Banner from "../companent/banner";
import About from "../companent/About";
import Services from "../companent/Services";
import Skill from "../companent/Skill";
import Project from "../companent/Project";
import Contact from "../companent/Contact";
import EdicationSkills from "../companent/EdicationSkills";
const Root = () => {
  return (
    <div
      className="w-full text-white bg-scroll "
      style={{ backgroundImage: `url(${backgrond})`, backgroundSize: "cover" }}
    >
      <Navber />
      <section id="banner">
      <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="education">
        <EdicationSkills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Root;
