import headphonesLogo from "../../assets/headphones.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="border-b border-blue-300 py-2 bg-white">
      <div className="flex items-center justify-between  max-w-full px-[6%]">
        <div>
          <Link to="/" className="flex">
            <img src={headphonesLogo} width={50} height={55}></img>
            <p className="self-center px-2 font-semibold">MUSIC BLOG</p>
          </Link>
        </div>

       <div>
         <select className="rounded-md px-2 py-2 border border-black mr-6 w-2/3">
           <option value=""> Categorías</option>
           <option className="" value="2">
             Entrevistas a Artistas
           </option>
           <option value="3">Generos Musicales</option>
           <option value="4">Nuevos Talentos</option>
           <option value="5">Historia de Grandes artistas</option>
           <option value="6">Tutoriales</option>
           <option value="7">Historia de la Musica</option>
           <option value="8">Instrumentos Musicales</option>
         </select>
           
           <Link
             to="/login"
             className="px-5 py-2 font-semibold bg-blue rounded-xl w-1/3"
           >
             Login
           </Link>
       </div>
        
      </div>
    </section>
  );
};

export default Navbar;
