import { NavLink } from 'react-router-dom';
import '../App.css'
import { Link } from 'react-scroll';


const Navbar = () => {

    const navLinks = 
    < div className=" z-10 flex flex-col lg:flex-row items-center gap-6 space-y-1">
      <Link className={ "inActive" } to="banner" spy={true} smooth={true} duration={250}>Home</Link>
      <Link className={ "inActive" } to="intro" spy={true} smooth={true} duration={250}>Introduction</Link>
      <Link className={ "inActive" } to="skills" spy={true} smooth={true} duration={250}>Skills</Link>
      <Link className={ "inActive" } to="education" spy={true} smooth={true} duration={250}>Education</Link>
      <Link className={ "inActive" } to="projects" spy={true} smooth={true} duration={250}>Projects</Link>
      <Link className={ "inActive" } to="contact" spy={true} smooth={true} duration={250}>Contact</Link>
    </div>
    return (
        <div className=" navbar justify-between bg-black bg-opacity-30 fixed">
            <div className="flex justify-between ">
                <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content w-fit text-center border-0 bg-black  bg-opacity-80 mt-3 z-[1] px-10 shadow  rounded-box">
                    {navLinks}
                </ul>
                </div>
                <a className="p-5 text-white text-xl lg:ml-20">Riyaz Ahmed</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mr-36">
                {navLinks}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;