
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import { FiMail } from "react-icons/fi";

const fontStyles = { margin: "5px", fontSize: '25px'};
const Footer =()=> {
  return (
    <footer className="bg-purple text-white py-3 flex justify-center items-center lg:px-2">
      <div className="pr-40">
        <p>© {new Date().getFullYear()} Music Blog</p>
      </div>
      <div>
        {/* <p className='self-center'>Seguinos</p> */}
        <div className='flex'>
          <FiMail style={fontStyles}/><FaFacebookSquare style={fontStyles}/>
          <FaInstagram style={fontStyles}/></div>
      </div>
    </footer>
  );
}

export default Footer;

