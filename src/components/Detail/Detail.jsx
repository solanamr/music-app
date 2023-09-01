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
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogId = useSelector((state) => state.blogs.blogs);

  const idFilter = blogId.filter((f) => f.id == id);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString();
  };

  return (
    <section className="bg-lightGrey flex-col">
      <Navbar />
      {idFilter.map((f, i) => (
        <div key={i} className=" flex flex-col items-center">
          <p className="pl-[70%] pt-10 mb-4">{formatDate(f.creationDate)}</p>
          <div className="flex justify-center w-3/4 mt-8">
            <h4 className="font-bold text-2xl  text-center md:text-4xl ">
              {f.title}
            </h4>
          </div>

          <div className=" flex flex-col pt-4 items-center">
            <div className="flex-col my-6">
              <div className="flex justify-center mb-4">
                {f.image ? (
                  <img
                    src={`data:image/jpg;base64,${f.image}`}
                    alt=""
                    className="w-2/3 h-auto inline self-center rounded-md md:w-1/2"
                  />
                ) : (
                  <img
                    src={records}
                    alt=""
                    className="w-2/3 h-auto  inline self-center rounded-md md:w-1/2"
                  />
                )}
              </div>
              <div className="flex justify-center mt-2">
                <p className="mx-4 w-7/12 text-lg pt-5 pb-5 text-justify">
                  {f.text}
                </p>
              </div>
            </div>
            <Comments postId={f.id} comments={f.comments.$values} />
          </div>
        </div>
      ))}

      <Footer />
    </section>
  );
};

export default Detail;
