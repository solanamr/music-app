import { useEffect, useState } from "react";
import coment from "./coments.json";
import { useForm } from "react-hook-form";
import { BsSuitHeart } from "react-icons/bs"
import axios from "axios";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";

import { useDispatch, useSelector } from 'react-redux';

function validacion(input){
    const errores = {}
    if(!input.Text){
        errores.Text = "Debe agregar un comentario";
    }
   
    return errores
}

const Comments = ({ postId }) => {

    const [input, setInput] = useState({Text:""})
    console.log(input)
    const dispatch = useDispatch();
    const coments = useSelector((state) => state.blogs.blogs);
    



    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => { 
    
    
    setInput({
    ...input,
    [e.target.name] : e.target.value, 
    
    })
    setErrores(validacion({
        ...input,
        [e.target.name]: e.target.value
    }))
    
    console.log(input)
}

const submit = async(data,e) =>{
    e.preventDefault()
    if(!input.Text ){
        return alert("Completar los campos")
      }

    try {
        const res = await axios.post(
          "http://localhost:5077/api/comments",
          {   data:data,
              postId: postId
          },
          {
              headers: {
                  Authorization: `Bearer ${jwtToken}`
            }
          },
          alert("comentario hecho")
        );
        // reset();
        //data.postId = postId
        console.log(data);
  
      //   return res
      } catch (err) {

        console.error(err);
      }
      
 } 

  const jwtToken = localStorage.getItem('token');


  const onSubmit = async (data) => {
    console.log(data)

    
  };



    return (
        <main>
            <section className="flex-col">
                <form onSubmit={(e) => {submit(e)}}  className="flex-column ">
                    <div className="flex items-center flex-col">
                        <textarea value={input.Text} name="Text" onChange={handleChange} className="mx-2 my-1 border border-purple-600 rounded-md  text-black p-4 w-5/6 flex-col" type="text"  id="Text" placeholder="Comment"  rows="1"
                           
                        ></textarea>
                        {errores.Text && <span className='block text-xs italic flex  self-center'>{errores.Text}</span>} 
                    </div>
                    <div className="flex justify-center mb-2">
                        <button
                            type="submit"
                            className="text-white bg-blue px-2 py-1 rounded-md mt-1 "
                            disabled={Object.keys(errores).length}
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