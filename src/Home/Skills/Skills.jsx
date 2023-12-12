
const Skills = () => {
    return (
        <div className="max-w-5xl mx-auto md:grid grid-cols-2 gap-10 my-10 p-10 md:p-0">
             <p className="text-lg md:text-xl ">As a frontend developer, I use **React** for 
             engaging UIs, incorporating its component-based architecture. I adopt 
             **Tailwind CSS** for a utility-first approach to styling and may 
             integrate UI components from **DaisyUI**. Utilizing **JavaScript** 
             for frontend and backend interactivity, I deploy **Node.js** and 
             **Express.js** for scalable server-side applications. **MongoDB** 
             serves as my preferred NoSQL database. For cloud services, I employ 
             **Firebase**, providing tools for real-time database management, user 
             authentication, and hosting. This diverse tech stack enables me to 
             deliver seamless, feature-rich web experiences efficiently.</p>

             <div className="flex flex-col justify-between ">
                <div>
                <div className="flex justify-between">
                    <h1>Javascript</h1>
                    <h1>60%</h1>
                </div>
                <progress className="progress progress-error w-full" value={60} max="100"></progress>
                </div>

                <div>
                <div className="flex justify-between">
                    <h1>React</h1>
                    <h1>80%</h1>
                </div>
                <progress className="progress progress-error w-full" value={80} max="100"></progress>
                </div>

                <div>
                <div className="flex justify-between">
                    <h1>Tailwind</h1>
                    <h1>80%</h1>
                </div>
                <progress className="progress progress-error w-full" value={80} max="100"></progress>
                </div>

                <div>
                <div className="flex justify-between">
                    <h1>Node.js</h1>
                    <h1>50%</h1>
                </div>
                <progress className="progress progress-error w-full" value={50} max="100"></progress>
                </div>

                <div>
                <div className="flex justify-between">
                    <h1>Express.js</h1>
                    <h1>50%</h1>
                </div>
                <progress className="progress progress-error w-full" value={50} max="100"></progress>
                </div>

                <div>
                <div className="flex justify-between">
                    <h1>MongoDB</h1>
                    <h1>60%</h1>
                </div>
                <progress className="progress progress-error w-full" value={60} max="100"></progress>
                </div>

                <div>
                <div className="flex justify-between">
                    <h1>Firebase</h1>
                    <h1>50%</h1>
                </div>
                <progress className="progress progress-error w-full" value={50} max="100"></progress>
                </div>


             </div>




{/* <div className="max-w-5xl mx-auto">
<div className="grid grid-cols-2 text-xl justify-between items-center">
    <p className="">As a frontend developer, 
    I turn to **React** to craft engaging 
    user interfaces, employing its component-based architecture 
    for a modular and maintainable design. 
    </p>
    <img className="w-1/4 md:w-1/2 lg:w-1/6" src="https://i.ibb.co/cy9G2kS/image.png" alt="" />
</div>

<div>
    <p>
    To style and design 
    these interfaces, I embrace the utility-first approach of 
    **Tailwind CSS** and potentially incorporate UI components 
    from libraries like **DaisyUI**.
    </p>
    <img className="w-1/4 md:w-1/2 lg:w-1/6" src="https://i.ibb.co/fDRw2Wk/image.png" alt="" />
</div>


<div>
    <p>
     Additionally, I leverage 
    the capabilities of **JavaScript** across both the frontend 
    and backend to bring interactivity and functionality to my 
    applications. Although I am a front end web developer, 
     I utilize **Node.js** along with 
    the **Express.js** framework to create scalable 
    and efficient server-side applications in the backend.
    </p> 
    <img className="w-1/4 md:w-1/2 lg:w-1/6" src="https://i.ibb.co/pr5r9dB/image.png" alt="" />
</div>

<div>
    <p>
     For data 
    storage, I often employ **MongoDB**, a NoSQL database, 
    ensuring flexibility and responsiveness in managing data. 
    </p>
    <img className="w-1/4 md:w-1/2 lg:w-1/6" src="https://i.ibb.co/c1b1Hx3/image.png" alt="" />
</div>

<div>
    <p>
    For cloud services, I harness the power of 
    **Firebase**, which offers a range of tools for real-time 
    database management, user authentication, hosting, and more. 
    This comprehensive tech stack allows me to deliver seamless, 
    feature-rich web experiences to users.</p>
</div>
    
</div> */}
        </div>


    );
};

export default Skills;