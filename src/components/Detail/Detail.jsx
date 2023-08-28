import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";
import temp from "../../assets/temp.avif";
import Comments from "../comments/Comments";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { BsSuitHeart } from "react-icons/bs"

const Detail = () => {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    // dispatch(resetCoins());
    dispatch(fetchBlogs());
  }, [dispatch]);
  
  const blogId = useSelector((state) => state.blogs.blogs);
  console.log("🚀 ~ file: Detail.jsx:15 ~ Detail ~  blogId:",  blogId)
  
  const idFilter = blogId.filter((f) => f.id == id)
  console.log("🚀 ~ file: Detail.jsx:17 ~ Detail ~ idFilter:", idFilter)
  
  
  const formatDate = (dateString) =>{
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString();
  }


    return (
        <section className="bg-lightGrey flex-col">
          <Navbar/>
                {
                  idFilter.map((f, i) =>(
                    <div key={i} className=" flex flex-col items-center">
                      <p className="pl-[70%] pt-10">{formatDate(f.creationDate)}</p>
                      <div className="w-5/6 flex justify-center align-center mt-6">
                        <h4 className="font-bold text-4xl md:py-6">{f.title}</h4>
                      </div>
                      
                      <div className="flex flex-col items-center w-5/6 md: my-6 ">
                        <img src={temp} alt="" className=" mb-2 h-auto md:w-2/3 rounded-md"/>
                        <p className="mt-4">{f.text}</p>
                      </div>
              
                    </div>
                  ))
                }
            <Comments/>
            <Footer/>
        </section>
    );
}
 
export default Detail;