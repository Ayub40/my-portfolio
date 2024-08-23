import About from "../Pages/About";
import Banner from "../Pages/Banner";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import Skill from "../Pages/Skill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;