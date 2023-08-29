import headphonesLogo from "../../assets/headphones.png";
import { Link } from "react-router-dom";


const Navbar2 = () => {
    return (
        
        <nav className="border-b border-blue-300 py-2 bg-white">
        <div className="flex items-center justify-between  max-w-full px-[6%]">
          <div className="mr-6">
            <Link to="/" className="flex">
              <img src={headphonesLogo} width={50} height={55}></img>
              <p className="self-center px-2 font-semibold">ACCENTO MUSICAL</p>
            </Link>
          </div>
        </div>
            </nav>
       
    );
}
 
export default Navbar2;