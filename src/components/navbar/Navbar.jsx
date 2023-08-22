//import React, { useContext } from "react";
import "../navbar/navbar.css"
import headphonesLogo from '../../assets/headphones.png'
import { Link } from "react-router-dom";




const Navbar = () =>{
//const loginStatus = useContext(LoginContext);
    return(
        <header className="border-b border-blue-300 py-2 ">
            <div className=" navbar flex items-center justify-between  max-w-full px-[6%]">
            

                <div>
                    <Link to="/" className="Logo flex">
                        <img src={headphonesLogo} width={50} height={55}></img>
                        <p className="self-center px-2 font-semibold">MUSIC BLOG</p>
                    </Link>
                </div>
                
                    
                <div  className="flex items-center w-auto">
                    <ul className="dropdown flex justify-betwen nav-ul">
                    <li className="px-5 py-2 font-semibold nav-li"><Link to=""  >Home</Link></li> 
                    <li className="px-5 py-2 font-semibold nav-li ">Categorias
                        <ul className="submenu">
                            <li><Link className="py-2 font-semibold nav-li">opcion1</Link></li>
                            <li><Link className="py-2 font-semibold nav-li">opcion2</Link></li>
                            <li><Link className="py-2 font-semibold nav-li">opcion3</Link></li>
                        </ul>
                    </li>
                    
                   
                    </ul>    
                </div>
                <div> 
                {/* // LoginContext ?
                //     <Link to="/"  className="px-5 py-2 font-semibold bg-blue rounded-xl" >Logout</Link> : */}
                  <Link to="/login"  className="px-5 py-2 font-semibold bg-blue rounded-xl" >Login</Link>
                
                </div>
            

            </div>
            
        </header>


    )





}



export default Navbar;