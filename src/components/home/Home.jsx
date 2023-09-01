import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";
import Blog from "../blog/Blog";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AddBoton from "../addBoton/AddBoton";


const Home = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((state) => state.blogs.blogs);


  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  

  return (
    <section className="h-full">
      <Navbar />
      <div className="flex justify-center items-center pt-20 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold px-1 text-lightBlue">Accento musical</h1>
          <p className="text-2xl italic text-semibold pt-5 px-2 text-purple">Explora el mundo a través del ritmo, donde la música encuentra su voz</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap w-5/6 ">
          {blogsState.length > 0 ? 
          blogsState.map((b, i) => (
            <div key={i} className="w-fit">
              <Blog
                title={b.title}
                img={b.image}
                key={i}
                cat={b.category}
                id={b.id}
              />
            </div>
          ))
        :
        <p className="text-4xl animate-pulse text-purple pt-20 h-screen font-bold">Cargando...</p>
        }
        </div>
      </div>
      
      <AddBoton/>

      <Footer />
    </section>
  );
};

export default Home;
