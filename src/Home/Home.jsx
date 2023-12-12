import Navbar from "../Shared/Navbar";
import '../App.css'
import {  Cursor, Typewriter } from 'react-simple-typewriter'
import Intro from "./Intro/Intro";
import Title from '../Hook/Title'
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";


const Home = () => {


    return (
        <div className="afa">
            <div>
            <Navbar></Navbar>    
            </div>  
            <div className="">
                {/* <video src={bg} autoPlay loop/> */}
                {/* <img src={bg} /> */}
                <Banner></Banner>

                <div className="my-10">
                    <Title title='Introduction' subTitle='About me'></Title>
                    <Intro></Intro>
                </div>

                <div className="my-10">
                    <Title title='My Skills' subTitle=''></Title>
                    <Skills></Skills>
                </div>

                <div className="my-10">
                    <Title title='Education' subTitle=''></Title>
                    <Education></Education>
                </div>
            </div>    
         
        </div>
    );
};

export default Home;