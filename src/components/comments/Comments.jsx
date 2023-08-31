import { useEffect, useState } from "react";

import { BsSuitHeart } from "react-icons/bs";
import axios from "axios";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";

import { useDispatch } from "react-redux";

const Comments = ({ postId, comments }) => {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput(
       e.target.value,
    );
    // console.log(input);
  };
  const jwtToken = localStorage.getItem("token");

  const submit = async (e) => {
  //  e.preventDefault()
   console.log(input);
    try {
      const res = await axios.post(
        "http://localhost:5077/api/comments",
        { Text: input, postId: postId },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
        alert("comentario hecho")
      );

      return res;
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = (dateString) =>{
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString();
  }

  return (
    <main className="w-5/6">
      <section className="flex-col">
        <form
          onSubmit={
            submit}
          className="flex-column w-full"
        >
          <div className="flex items-center flex-col">
            <textarea
              value={input.Text}
              name="Text"
              onChange={handleChange}
              className="mx-2 my-1 border border-purple-600 rounded-md  text-black p-4 w-5/6 flex-col"
              type="text"
              id="Text"
              placeholder="Comment"
              rows="1"
            ></textarea>
            {/* {errors.text && <span className='block text-xs italic flex  self-center'>{errors.comment.message}</span>}  */}
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

        <div className="flex-column md:mx-40 mb-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-[#dcdcdc] border border-black rounded-md flex-col justify-center px-2 py-2 my-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${c.id}`}
                    alt=""
                    className="w-20 h-20"
                    />
                  <div className="flex-col">
                    <p>{c.user.email}</p>
                    <h3>{c.text}</h3>
                    <p>{formatDate(c.creationDate)}</p>
                  </div>
                  
                </div>

                <div>
                  {/* {
                     isChecked ? <button onClick={isChecked}> <BsSuitHeart className="w-6 h-6  self-right"/></button>  : <button onClick={checked}> <BsSuitHeart className="w-6 h-6 text-red self-right"/></button>
                            } */}
                  <BsSuitHeart className="w-6 h-6  self-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Comments;
