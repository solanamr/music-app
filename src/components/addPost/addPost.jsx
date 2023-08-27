import { useForm} from "react-hook-form"
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import "./addPost.css"
import instrumentos from "../../assets/instrumentos.jpg";

const AddPost = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = evento => {
        console.log(evento);
    }

    return(
        <div>
            <Navbar/>
        
            <div className="main-body items-center flex justify-center bg-lightBlue w-full h-screen">

                

                <form className="flex-row" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="card-container self-center bg-white rounded-xl py-4 px-6 md:flex md:flex-row md:space-x-6 ">
                        
                        <div className="user-image shadow-2xl p-4 flex md:w-96 md:h-96 ml:w-full" >
                            <img className="object-cover w-fit-content " src={instrumentos} alt="Instrumentos musicales"></img>    
                        </div>
                        <div className="inputs-container flex-row space-y-4 p-4">
                        <div className="text-center">
                        
                            <h1 className="text-black text-3xl font-bold inline-block">New Post</h1>
                        </div> 

                        <div className="title-field text-black flex justify-center">
                                <input type="text" className="w-full border border-purple-600 rounded-md  text-black p-1"  name="title" placeholder="Title"
                                {...register("title", {                                 
                                required:{
                                    value:true,
                                    message:'Debe completar este campo',
                                },
                                pattern: {
                                    value: /^[a-zA-Z ]+$/ , 
                                    message: "El formato es incorrecto"
                                }
                                })}
                                />
                                {errors.title && <span className='text-xs italic mx-7'>{errors.title.message}</span>}
                            </div>
                            <div className="cat-file-container flex">
                                    <select name="categoria" className="rounded-md px-2 py-2 border border-purple-600 my-1" 
                                    {...register("categoria",
                                    { required: {
                                        value:true,
                                        message:"Seleccione una categoria"
                                    
                                    }
                                    })}>
                                                
                                        <option value=""> Categorías</option>
                                        <option value="1">Reseñas</option>                                  
                                        <option value="2">Entrevista a Artistas</option>
                                        <option value="3">Géneros Musicales</option>
                                        <option value="4">Descubriendo Nuevos Talentos</option>
                                        <option value="5">Historias de Bandas y Artistas Famosos</option>
                                        <option value="6">Conciertos y Festivales</option>
                                        <option value="7">Tutoriales</option>
                                        <option value="8">Noticias y Tendencias de la Industria</option>
                                        <option value="9">Historia de la Musica</option>
                                        <option value="10">Instrumentos Musicales</option>
                                            
                                                
                                    </select>
                                    {errors.categoria && <span className='text-xs italic mx-7'>{errors.categoria.message}</span>}
                                <div className="file-container mt-2 md:mt-0 md:ml-2 flex">
                                    <label htmlFor="file"  className="md:w-24" > Agregá una imagen:</label>
                                
                                    <input  className="" type="file"  name="file" accept="image/png, image/jpeg"
                                    {...register("file", {                                 
                                        required:{
                                            value:false,
                                        },
                                    
                                        })}
                                    />
                                </div>
                            </div>
                           
                            <div className="text-area-container">
                                <textarea className=" border border-purple-600 rounded-md  text-black w-full p-4" type="text" name="post" placeholder="Post"  rows="7"
                                {...register("post",{
                                    required: true,
                                    message: "Debe completar este campo"
                                })}
                                ></textarea>
                                {errors.post && <span className='text-xs italic mx-7'>{errors.post.message}</span>}
                            </div>
                            <div className="button-add flex justify-center">
                                <button type="submit" className="text-white bg-blue px-4 py-1 rounded-md mt-7">Add Post</button>
                            </div>
                        </div>

                    </div>
                    
                </form>
                
            </div>
            <Footer/>
        </div>
    )

}

export default AddPost;
