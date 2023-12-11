import Navbar from "../Shared/Navbar";
import '../App.css'

const Home = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>    
            </div>  
            <div className="">
                {/* <video src={bg} autoPlay loop/> */}
                {/* <img src={bg} /> */}
                <div  className="backGround bg-cover min-h-screen h-fit grid grid-cols-2  items-center">
                    <div>
                    <h1 className="text-6xl font-bold text-white text-center">Riyaz Ahmed</h1>
                    </div>
                    <div>
                    <img src="https://i.ibb.co/sydntNx/IMG-20221119-163215-02-removebg-preview.png" className="bottom-0 w-full" alt="" />
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