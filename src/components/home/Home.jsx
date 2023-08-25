import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";
import confetti from "../../assets/confetti.jpg";
import Blog from "../blog/Blog";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const blogsState = useSelector((state) => state.blogs.blogs);
  console.log(blogsState, "state");

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section>
      <Navbar />
      <img src={confetti} alt="" className="w-full h-screen" />
      <div className="flex justify-center flex-wrap">
        {blogsState.map((b, i) => (
          <div key={i}>
            
            
                <Blog title={b.title} text={b.text} key={i} cat={b.category} id={b.id}/>
            
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
};

export default Home;
