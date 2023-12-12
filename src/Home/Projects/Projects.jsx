import { motion } from "framer-motion"
import { RiLiveLine } from "react-icons/ri";



const Projects = () => {
    const pill = "bg-[#f71735] w-fit p-2 text-white rounded-lg"
    const links = "bg-white text-sm lg:text-base  text-[#f71735] border-2 border-[#f71735] p-2 rounded-lg hover:bg-[#f71735] hover:text-white lg:w-1/4 flex justify-center items-center lg:gap-2"
    return (
        <div className="max-w-5xl mx-auto p-10 lg:p-0">
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
                        <button className={links}><RiLiveLine /><p>Live Link</p></button>
                        <button className={links}><RiLiveLine /><p>Client Code</p></button>
                        <button className={links}><RiLiveLine /><p>Server Code</p></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;