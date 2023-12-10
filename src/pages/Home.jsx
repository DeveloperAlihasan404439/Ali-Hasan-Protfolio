
import About from "../companent/About";
import Contact from "../companent/Contact";
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
            <Contact/>
        </div>
    );
};

export default Home;