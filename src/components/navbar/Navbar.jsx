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
                    <ul className="dropdown flex justify-betwen">
                        <li className="px-5 py-2 font-semibold self-center "><Link to=""  >Home</Link></li> 
                        
                            {/* <ul className="submenu w-64 rounded-md px-4  py-4 space-y-4"> */}
                            
                        <li className="px-5 py-2 font-semibold ">
                            <select  class=" appearance-none rounded-md px-4  px-4  py-4 " >
                                
                                <option  value='' disabled > Categorías</option>
                                <option className="space-y-4" value="2">Entrevistas a Artistas</option>
                                <option value="3">Generos Musicales</option>
                                <option value="4">Nuevos Talentos</option>
                                <option value="5">Historia de Grandes artistas</option>
                                <option value="6">Tutoriales</option>
                                <option value="7">Historia de la Musica</option>
                                <option value="8">Instrumentos Musicales</option>
                            
                                
                            </select>
                            
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