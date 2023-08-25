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
        <section className="bg-lightGrey">
          <Navbar/>
                {
                  idFilter.map((f, i) =>(
                    <div key={i} className="">
                      <p className="pl-[70%] pt-10">{formatDate(f.creationDate)}</p>
                      <h4 className="font-bold text-4xl pl-[33%]">{f.title}</h4>
                      <div className="flex pt-10 ml-40 items-center">
                        <img src={temp} alt="" className="w-5/12 h-96"/>
                        <p className="w-5/12 pl-10">{f.text}</p>
                      </div>
                          <BsSuitHeart className="w-40 h-40"/>
                    </div>
                  ))
                }
            <Comments/>
            <Footer/>
        </section>
    );
}
 
export default Detail;