import { Cursor, Typewriter } from "react-simple-typewriter";
import cv from '../../assets/CV.pdf'
import '../../App.css'
import { motion } from "framer-motion"



const Banner = () => {
    const btnCV = "btn bg-white text-[#f71735] hover:bg-[#f71735] text-lg hover:text-white hover:border-2 hover:border-white"

    return (
        <div  className="backGround  bg-cover py-20 lg::min-h-screen flex flex-col  md:grid grid-cols-2  items-center">
            <div className="text-center flex gap-10  flex-col justify-center items-start mx-auto text-white">
                    <h1 className="text-3xl lg:text-6xl  font-medium">Hi, I am Riyaz Ahmed</h1>
                    <div className="flex gap-2 text-sm md:text-xl lg:text-3xl ">
                        <h1>I am a</h1>
                        <Typewriter  loop   words={['Front End Web Developer', 'Lightweight Backend Developer']}
/>
                        <Cursor/>
                    </div>
                    <div>
                    <a className={btnCV} href={cv} download="resume">Download Resume</a>
                    </div>
            </div>

            <div className=" hidden  md:grid grid-cols-2 justify-center items-center gap-14 md:gap-32">
                <div className="flex md:flex-col justify-between items-end gap-10 md:gap-20">
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/FbhVCNZ/image.png" alt="" />
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/HF36kWm/image.png" alt="" />
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/pr5r9dB/image.png" alt="" />
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/R7LKSLP/image-removebg-preview-43.png" alt="" />
                </div>
                <div className="flex md:flex-col justify-between gap-10 md:gap-24">
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/cy9G2kS/image.png" alt="" />
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/fDRw2Wk/image.png" alt="" />
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/c1b1Hx3/image.png" alt="" />
                    <motion.img initial={{scale: 1}} animate={{ scale: 1.2 }} transition={{  repeat: Infinity,repeatType: "reverse", duration: 1 }} className="w-1/4 md:w-1/2 lg:w-1/6 opacity-30" src="https://i.ibb.co/M1WwDzT/image.png" alt="" />
                </div>
                
            </div>


                    
        </div>
    );
};

export default Banner;