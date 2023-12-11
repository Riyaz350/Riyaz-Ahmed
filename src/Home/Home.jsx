import Navbar from "../Shared/Navbar";
import '../App.css'
import {  Cursor, Typewriter } from 'react-simple-typewriter'
import cv from '../assets/CV.pdf'


const Home = () => {
    const btnCV = "btn bg-white text-[#f71735] hover:bg-[#f71735] hover:text-white hover:border-2 hover:border-white"


    return (
        <div>
            <div>
            <Navbar></Navbar>    
            </div>  
            <div className="">
                {/* <video src={bg} autoPlay loop/> */}
                {/* <img src={bg} /> */}
                <div  className="backGround bg-cover pt-20 h-fit grid grid-cols-2  items-center">
                    <div className=" flex gap-10  flex-col justify-center items-start mx-auto text-white font-bold">
                    <h1 className="text-6xl">Hi, I am Riyaz Ahmed</h1>
                    <h1 className="flex gap-2 text-3xl">
                        <h1>I am a</h1>
                        <Typewriter    words={['Front End Web Developer']}
/>
                        <Cursor/>
                    </h1>
                    <div>
                    <a className={btnCV} href={cv} download="resume">Download Resume</a>
                    </div>
                    </div>

                    <div className="flex justify-center">
                    <img src="https://i.ibb.co/8zPqgMX/1702298147202-fotor-20231211183931-removebg-preview.png" className="" alt="" />
                    </div>
                </div>

                <div>
                    <h1>hello</h1>
                </div>
            </div>    
         
        </div>
    );
};

export default Home;