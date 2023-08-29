import { useEffect, useState } from "react";
import coment from "./coments.json";
import { useForm } from "react-hook-form";
import { BsSuitHeart } from "react-icons/bs"
import axios from "axios";
import { fetchComments, fetchUserComments } from "../../redux/states/blog/blogSlice";
import { useDispatch, useSelector } from 'react-redux';

const Comments = ({ postId }) => {

    const [isChecked, setIsChecked] = useState(false)

    const dispatch = useDispatch();
  const coments = useSelector((state) => state.blogs.comments);

//   const {comments, userId} = useSelector((state) => state.blogs);
//   console.log("🚀 ~ file: Comments.jsx:14 ~ Comments ~ comments:", comments)

    const checked = () => {
        setIsChecked(true)
    }

    useEffect(() => {
        dispatch(fetchComments(postId));
      }, [dispatch, postId]);

    //   useEffect(() => {
    //     dispatch(fetchUserComments(userId));
    //   }, [dispatch, userId]);
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
    //   const res = await axios.post(
    //     "http://localhost:5077/api/comments",
    //     data
    //   );
      reset();
      data.postId = postId
      console.log(data);

    //   return res
    } catch (err) {
      console.error(err);
    }
  };



    return (
        <main>
            <section className="flex-col">
                <form onSubmit={handleSubmit(onSubmit)}  className="flex-column ">
                    <div className="flex items-center flex-col">
                         <textarea className="mx-2 my-1 border border-purple-600 rounded-md  text-black p-4 w-5/6 flex-col" type="text" name="comment" id="comment" placeholder="Comment"  rows="1"
                            {...register("text",{
                                required:  "Debe completar este campo"
                                // message: "Debe completar este campo"
                            })}
                        ></textarea>
                        {errors.text && <span className='block text-xs italic flex  self-center'>{errors.comment.message}</span>} 
                    </div>
                    <div className="flex justify-center mb-2">
                        <button
                            type="submit"
                            className="text-white bg-blue px-2 py-1 rounded-md mt-1 "
                        > 
                            Add comment
                        </button>
                   
                    </div>
                    
                </form>
                
                
                <div className="flex-column mx-8 md:mx-40 mb-4">
                    {
                        coments.map(c =>(
                            <div key={c.id} className="bg-[#dcdcdc] border border-black rounded-md flex-col justify-center px-2 py-2 my-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${c.id}`} alt="" className="w-20 h-20"/>
                                        <div className="flex-col">
                                            <h3>{c.text}</h3>
                                            <p>{c.creationDate}</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        {/* {
                                            isChecked ? <button onClick={isChecked}> <BsSuitHeart className="w-6 h-6  self-right"/></button>  : <button onClick={checked}> <BsSuitHeart className="w-6 h-6 text-red self-right"/></button>
                                        } */}
                                        <BsSuitHeart className="w-6 h-6  self-right"/>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </section>
            
        </main>
    );
}
 
export default Comments;