import headphonesLogo from "../../assets/headphones.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="border-b border-blue-300 py-2 bg-white">
      <div className="flex items-center justify-between  max-w-full px-[6%]">
        <div className="mr-6">
          <Link to="/" className="flex">
            <img src={headphonesLogo} width={50} height={55}></img>
            <p className="self-center px-2 font-semibold">ACCENTO MUSICAL</p>
          </Link>
        </div>

       <div className="flex">
         <select className="rounded-md px-2 py-2 border border-black mr-6 w-2/3">
            <option value=""> Categorías</option>
            <option value="REVIEWS">Reseñas</option>                                  
            <option value="ARTIST_INTERVIEWS">Entrevista a Artistas</option>
            <option value="MUSIC_GENRES">Géneros Musicales</option>
            <option value="DISCOVERING_NEW_TALENTS">Descubriendo Nuevos Talentos</option>
            <option value="STORIES_OF_BANDS_AND_FAMOUS_ARTISTS5">Historias de Bandas y Artistas Famosos</option>
            <option value="CONCERTS_AND_FESTIVALS">Conciertos y Festivales</option>
            <option value="MUSIC_TUTORIALS">Tutoriales</option>
            <option value="INDUSTRY_NEWS_AND_TRENDS">Noticias y Tendencias de la Industria</option>
            <option value="MUSIC_HISTORY">Historia de la Musica</option>
            <option value="MUSICAL_INSTRUMENTS0">Instrumentos Musicales</option>
         </select>
           
           <Link
             to="/login"
             className="px-5 py-2 text-center font-semibold bg-blue rounded-xl w-1/3"
           >
             Login
           </Link>
       </div>
        
      </div>
    </section>
  );
};

export default Navbar;
