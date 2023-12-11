
import About from "../companent/About";
import Contact from "../companent/Contact";
import Project from "../companent/Project";
import Services from "../companent/Services";
import Skill from "../companent/Skill";
import Banner from "../companent/banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Skill/>
            <Project/>
            <Contact/>
        </div>
    );
};

export default Home;