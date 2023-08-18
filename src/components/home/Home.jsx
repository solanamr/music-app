import confetti from "../../assets/confetti.jpg";
import Blog from "../blog/Blog";


const Home = () => {
    return (
        <section >
            <img src={confetti} alt="" className="w-full h-screen"/>
            <Blog/>
        </section>
    );
}
 
export default Home;