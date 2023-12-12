import { Link } from 'react-router-dom';
import '../App.css'
const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 backGround text-white flex flex-col md:flex-row items-center justify-around">
                <aside>
                    <p className='text-xl md:text-3xl'><span >Riyaz Ahmed</span><br/>Front End Web Developer</p>
                    <div className='text-xl'>
                        <p>Location: Brahmanbaria, Bangladesh</p>
                        <p>Email: riyaz3582@gmail.com</p>
                        <p>Phone: +8801724439967</p>
                        <p>Alternative Phone: +8801610630016</p>
                    </div>
                </aside> 
                <nav>
                    <header className="footer-title">Social</header> 
                    <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.facebook.com/profile.php?id=100070946546162'><img className='w-[40px]' src="https://i.ibb.co/cvQ7SPp/icons8-linkedin.gif" alt="" /></Link>
                    <Link to='https://www.linkedin.com/in/riyaz-ahmed-1ab2b4186/' ><img className='w-[40px]' src="https://i.ibb.co/kKN7Dy6/icons8-facebook.gif" alt="" /></Link>
                    <Link to='https://github.com/Riyaz350'><img className='w-[40px]' src="https://i.ibb.co/ZXyc9Yc/icons8-github.gif" alt="" /></Link>

                    {/* <a target="_blank" href="https://icons8.com/icon/Uj9DyJeLazL6/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    {/* <a target="_blank" href="https://icons8.com/icon/aS8YGGoGTPR6/facebook-circled">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    {/* <a target="_blank" href="https://icons8.com/icon/v551nqGeHhGn/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;