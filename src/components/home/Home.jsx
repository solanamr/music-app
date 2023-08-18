import confetti from "../../assets/confetti.jpg";
import Blog from "../blog/Blog";

import Navbar from "../navbar/Navbar"

const Home = () => {
    return (
        <section >
            <img src={confetti} alt="" className="w-full h-screen"/>
            <Blog/>
            <Navbar/>
           <h1>Hola</h1>
        </section>
    );
}
 
export default Home;