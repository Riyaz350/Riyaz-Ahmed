import Navbar from "../Shared/Navbar";
import '../App.css'
import Intro from "./Intro/Intro";
import Title from '../Hook/Title'
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";


const Home = () => {
    


    return (
        <div className="afa">
            <div>
            <Navbar></Navbar>    
            </div>  
            <div className="">
                {/* <video src={bg} autoPlay loop/> */}
                {/* <img src={bg} /> */}
                <div id="banner">
                <Banner></Banner>
                </div>

                <div id="intro" className="my-10">
                    <Title title='Introduction' subTitle='About me'></Title>
                    <Intro></Intro>
                </div>

                <div id="skills" className="my-10">
                    <Title title='My Skills' subTitle=''></Title>
                    <Skills></Skills>
                </div>

                <div id="education" className="my-10">
                    <Title title='Education' subTitle=''></Title>
                    <Education></Education>
                </div>

                <div id="projects" className="my-10">
                    <Title title='My Projects' subTitle=''></Title>
                    <Projects></Projects>
                </div>

                <div id="contact" className="my-10">
                    <Title title='Contact Me' subTitle=''></Title>
                    <Contact></Contact>
                </div>
            </div>    
         
        </div>
    );
};

export default Home;