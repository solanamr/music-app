import React from "react";
import "../navbar/navbar.css"
import headphonesLogo from '../../assets/headphones.png'




const Navbar = () =>{

    return(
        <header className="border-b border-blue-300 py-2 ">
            <div className=" navbar flex items-center justify-between xl:max-w-7xl max-w-full px-[8%]">
            
                
                <img src={headphonesLogo} width={50} height={55}></img>
                
                    
                <div  className="flex items-center w-auto">
                    <ul className="flex justify-betwen nav-ul">
                    <li><a className="px-5 py-2 font-semibold nav-li" href="">Home</a></li> 
                    <li><a className="px-5 py-2 font-semibold nav-li" href="">Categorias</a></li>
                    <li><a className="px-5 py-2 font-semibold bg-blue rounded-xl" href="">Login</a></li> 
                    </ul>
                    <div className="nav-menu"></div>
                </div>
            

            </div>
            
        </header>


    )





}



export default Navbar;