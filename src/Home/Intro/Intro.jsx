import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="max-w-5xl mx-auto lg:grid grid-cols-2 items-center">
            
            <div>
                <img src="https://i.ibb.co/sVZ5Jfw/1702298147202-fotor-20231211183931-removebg-preview.png" alt="" />
            </div>
            <div className="text-2xl p-10">
                <p>I am <b className="text-[#f71735]">S.K. Riyaz Ahmed</b> </p>
                <p>I am a  from Bangladesh.</p>
                <p className=" text-xl mt-4">I am proficient in <b className="text-[#f71735]">React</b>  for dynamic front-end development, 
                    I leverage Firebase for cloud services. My expertise 
                    extends to <b className="text-[#f71735]">Tailwind</b> CSS for styling and <b className="text-[#f71735]">DaisyUI</b>  for 
                    UI components. Additionally, I am well-versed in backend 
                    development, employing <b className="text-[#f71735]"> Node.js</b> with the <b className="text-[#f71735]">Express.js</b>  framework 
                    for server-side applications. <b className="text-[#f71735]">MongoDB</b>  serves as my preferred 
                    database.</p>
                    <div className="flex gap-4">
                    <Link to='https://www.facebook.com/profile.php?id=100070946546162'><img className='w-[40px]' src="https://i.ibb.co/cvQ7SPp/icons8-linkedin.gif" alt="" /></Link>
                    <Link to='https://www.linkedin.com/in/riyaz-ahmed-1ab2b4186/' ><img className='w-[40px]' src="https://i.ibb.co/kKN7Dy6/icons8-facebook.gif" alt="" /></Link>
                    </div>
            </div>
                    
        </div>
    );
};

export default Intro;