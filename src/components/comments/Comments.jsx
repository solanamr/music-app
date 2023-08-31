import { useEffect, useState } from "react";

import { BsSuitHeart } from "react-icons/bs";
import axios from "axios";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";

import { useDispatch } from "react-redux";


function validacion(input){ 
  const errores = {}
  if(!input.Text){
      errores.Text = "Debe completar este campo";
  }
 
  return errores
}




const Comments = ({ postId, comments }) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const [errores, setErrores] = useState({}) 

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput(
       e.target.value,
    );
    setErrores(validacion({
      ...input,
      [e.target.name]: e.target.value
  }))
    
    // console.log(input);
  };
  const jwtToken = localStorage.getItem("token");

  const submit = async (e) => {
   e.preventDefault()
   console.log(input);

   if(!input.name){
    return alert("Debe completar los campos")
    }; ///

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

  return (
    <main className="w-5/6">
      <section className="flex-col ">
        <form
          onSubmit={
            submit}
          className="flex-column"
        >
          <div className="flex items-center flex-col ">
            <textarea
              value={input.Text}
              name="Text"
              onChange={handleChange}
              className="mx-2 my-1 border border-purple-600 rounded-md  text-black p-4 w-full flex-col"
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
              disabled={Object.keys(errores).length}//
            >
              Add comment
            </button>
          </div>
        </form>

        <div className="flex-column mx-8 md:mx-40 mb-4">
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
                    className="w-10 h-10 md:w-20 h-20"
                  />
                  <div className="flex-col">
                    <h3>{c.text}</h3>
                    <p>{c.creationDate}</p>
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
