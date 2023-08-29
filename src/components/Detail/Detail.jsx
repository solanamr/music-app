import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";
import records from "../../assets/records.jpg";
import Comments from "../comments/Comments";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const Detail = () => {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    // dispatch(resetCoins());
    dispatch(fetchBlogs());
  }, [dispatch]);
  
  const blogId = useSelector((state) => state.blogs.blogs);
  // console.log("🚀 ~ file: Detail.jsx:15 ~ Detail ~  blogId:",  blogId)
  
  const idFilter = blogId.filter((f) => f.id == id)

  
  const idMap = idFilter.map(f  => f.id)
  
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
                      <h4 className="font-bold text-4xl pl-[33%]">{f.title}</h4>
                      <div className="flex pt-10 ml-40 items-center">
                      {f.image ? <img src={`data:image/jpg;base64,${f.image}`} alt="" className="w-5/12 h-96"/> :  <img src={records} alt="" className="w-5/12 h-96"/>}
                        <p className="w-5/12 pl-10">{f.text}</p>
                      </div>
                    </div>
                  ))
                }
            <Comments postId={idMap}/>
            <Footer/>
        </section>
    );
}
 
export default Detail;