// import { motion } from "framer-motion"
import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";




const Projects = () => {
    const pill = "bg-[#f71735] w-fit p-2 text-white rounded-lg"
    const links = "bg-white text-sm lg:text-base  text-[#f71735] border-2 border-[#f71735] p-2 rounded-lg hover:bg-[#f71735] hover:text-white lg:w-1/4 flex justify-center items-center lg:gap-2"
    return (
        <div className="max-w-5xl mx-auto p-10 lg:p-0 my-10 space-y-10 lg:space-y-0">
            
            <div className="md:grid grid-cols-5">
                <div className="col-span-2"></div>
                <div className="col-span-3">

                    <div>
                        <h1 className="text-xl font-bold text-[#f71735] md:text-3xl">#1 Harmony Haven</h1>
                        <p className="text-lg md:text-xl">  Harmony Havens is a web app facilitating apartment management. Visitors can create accounts, view available apartments, and request bookings. The map provides directions for self-visits. Admin-approved bookings grant users membership access. The User Home section displays rented apartment details, including name, image, and email. An announcement area shares updates. Members pay rent, choosing months and applying coupons for discounts. Transaction history is visible, with filtering options. Admins manage agreements, marking apartments as rented. The Manage Members section handles promotions and demotions. Admins announce updates, manage coupons, and follow rules to add new ones. The app streamlines the apartment rental process for users and administrators.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2 mt-2 lg:mt-5">
                        <div className=" flex gap-2">
                        <p className={pill}>React</p>
                        <p className={pill}>Tailwind</p>
                        <p className={pill}>DaisyUI</p>
                        <p className={pill}>Firebase</p>
                        </div>
                        <div className="flex gap-2">
                        <p className={pill}>MongoDB</p>
                        <p className={pill}>Node.js</p>
                        <p className={pill}>Express.js</p>
                        </div>
                    </div>

                    <div className="my-2 lg:my-5 flex gap-3">
                        <Link to='https://6568263afe8d95692e5ee16a--cute-vacherin-eb6d20.netlify.app' className={links}><RiLiveLine /><p>Live Link</p></Link>
                        <Link to='https://github.com/Riyaz350/harmony-haven-client' className={links}><FaGithub /><p>Client Code</p></Link>
                        <Link to='https://github.com/Riyaz350/harmony-haven-server' className={links}><FaGithub /><p>Server Code</p></Link>
                    </div>

                </div>
            </div>

            <div className="md:grid grid-cols-5">
                <div className="col-span-2"></div>
                <div className="col-span-3">

                    <div>
                        <h1 className="text-xl font-bold text-[#f71735] md:text-3xl">#2 Study Hive</h1>
                        <p className="text-lg md:text-xl">This educational website facilitates students in creating, submitting, and enhancing assignments across various subjects. The homepage highlights three popular assignments, open for updates by any logged-in user. Only the assignment creator retains the authority to delete it. Users can access assignment details, submit their work, and view submissions with timestamps. The {"My Assignment"} page displays personal submissions, including marked assignments with obtained marks. During the grading process, users can preview PDF assignments. The platform ensures collaborative learning and efficient assignment management for an enriched educational experience.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-2 mt-2 lg:mt-5">
                        <div className=" flex gap-2">
                        <p className={pill}>React</p>
                        <p className={pill}>Tailwind</p>
                        <p className={pill}>DaisyUI</p>
                        <p className={pill}>Firebase</p>
                        </div>
                        <div className="flex gap-2">
                        <p className={pill}>MongoDB</p>
                        <p className={pill}>Node.js</p>
                        <p className={pill}>Express.js</p>
                        </div>
                    </div>

                    <div className="my-2 lg:my-5 flex gap-3">
                        <Link to='https://654cd5cfb5dcf737fa94267f--superlative-lokum-c289a2.netlify.app' className={links}><RiLiveLine /><p>Live Link</p></Link>
                        <Link to='https://github.com/Riyaz350/study-hive-client' className={links}><FaGithub /><p>Client Code</p></Link>
                        <Link to='https://github.com/Riyaz350/study-hive-server' className={links}><FaGithub /><p>Server Code</p></Link>
                    </div>

                </div>
            </div>

            <div className="md:grid grid-cols-5">
                <div className="col-span-2"></div>
                <div className="col-span-3">

                    <div>
                        <h1 className="text-xl font-bold text-[#f71735] md:text-3xl">#3 Cell Central</h1>
                        <p className="text-lg md:text-xl">Cell Central is a straightforward e-commerce platform specializing in a diverse range of smartphones. The homepage showcases six distinct brands, each leading to a dedicated section featuring the brands available phones. Clicking on a specific phones {"Show Details"} button navigates users to a product-specific page, requiring login for access. The login page offers both email/password and Google account options. New users can register with a name, picture URL, and a secure password. Post-login, users are redirected to the previous page. The site allows adding products to the cart from individual phone details pages and provides a user-friendly cart page for review and removal of selected items.</p></div>

                    <div className="flex flex-col lg:flex-row gap-2 mt-2 lg:mt-5">
                        <div className=" flex gap-2">
                        <p className={pill}>React</p>
                        <p className={pill}>Tailwind</p>
                        <p className={pill}>DaisyUI</p>
                        <p className={pill}>Firebase</p>
                        </div>
                        <div className="flex gap-2">
                        <p className={pill}>MongoDB</p>
                        <p className={pill}>Node.js</p>
                        <p className={pill}>Express.js</p>
                        </div>
                    </div>

                    <div className="my-2 lg:my-5 flex gap-3">
                        <Link to='https://65325b60d2a147049e15b060--beautiful-gaufre-1a1ee6.netlify.app' className={links}><RiLiveLine /><p>Live Link</p></Link>
                        <Link to='https://github.com/Riyaz350/cell-central-client' className={links}><FaGithub /><p>Client Code</p></Link>
                        <Link to='https://github.com/Riyaz350/cell-central-server' className={links}><FaGithub /><p>Server Code</p></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;