
import headphonesLogo from "../../assets/headphones.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/states/auth/authSlice';
import { filterCategory } from "../../redux/states/blog/blogSlice";


const Navbar = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5077/api/Auth/logout');

      if (response.status === 200) {
        dispatch(logout());
      }
    } catch (error) {
      console.error('Error en el cierre de sesión', error);
    }
  };

  const handleCategoryChange = (e) => {
    dispatch(filterCategory(e.target.value));
  };

  return (
    <nav className="border-b border-blue-300 py-2 bg-white w-full">
      <div className="flex items-center justify-between  max-w-full px-[3%]">
        <div className="mr-6">
          <Link to="/" className="flex">
            <img src={headphonesLogo} width={50} height={55}></img>
            <p className="self-center px-2 font-semibold">ACCENTO MUSICAL</p>
          </Link>
        </div>

       <div className="flex">
         <select onChange={e => {handleCategoryChange(e)}} className="rounded-md px-2 py-2 border border-black ml-1 mr-2 w-2/3 md:mr-4">
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

         {isLoggedIn ? (
        <button onClick={handleLogout} className="px-5 py-2 text-center font-semibold bg-blue rounded-xl w-1/3">Logout</button>
      ) : (
        <Link
             to="/login"
             className="px-3 py-2 text-center font-semibold bg-blue rounded-xl w-1/3"
           >
             Login
           </Link>
      )}   
       </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
