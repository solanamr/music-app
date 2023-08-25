import { useForm} from "react-hook-form"
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import "./addPost.css"
import instrumentos from "../../assets/instrumentos.jpg";

const AddPost = () => {

    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }


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
        
            <div className="h-screen flex justify-center bg-lightBlue">

                

                <form className="flex-row" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className=" bg-white flex card-container rounded-xl py-4 ">
                        
                        <div className="user-image shadow-2xl p-4 flex mx-7 w-96 h-96" >
                            <img className="object-cover w-fit-content " src={instrumentos}></img>
                            
                        </div>
                        <div className="flex-row space-y-4 inputs">
                        <div className="text-center">
                        
                            <h1 className="text-black text-3xl font-bold inline-block">New Post</h1>
                        </div> 
                       
                        <div className="text-right">
                            <input
                                name="date"
                                type="datetime-local"
                                defaultValue={getCurrentDateTime()}
                                {...register("date", {                                 
                                    required:{
                                        value:true 
                                    },
                                   
                                 })}

                            />    
                        </div>      
                     
                       
                        <div className="text-black">
                                <input type="text" className="mx-2 border border-purple-600 rounded-md  text-black p-1 w-full"  name="title" placeholder="Title"
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
                            <div className="flex">
                                <select name="categoria" className="rounded-md px-4 py-2 mx-2 border border-purple-600 " 
                                {...register("categoria",
                                { required: {
                                    value:true,
                                    message:"Seleccione una categoria"
                                
                                }
                                })}>
                                            
                                    <option value="Categorías" defaultValue={"Categoría"}> Categorías</option>
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
                                

                                <label htmlFor="file"  className="ml-6 w-24" > Agregá una imagen:</label>

                                <input  className="mr-8" type="file"  name="file" accept="image/png, image/jpeg"
                                 {...register("file", {                                 
                                    required:{
                                        value:false,
                                    },
                                 
                                    })}
                                />
                            </div>
                           
                            <div>
                                <textarea className="mx-2 border border-purple-600 rounded-md  text-black w-full p-4" type="text" name="post" placeholder="Post"  rows="7"
                                {...register("post",{
                                    required: true,
                                    message: "Debe completar este campo"
                                })}
                                ></textarea>
                                {errors.post && <span className='text-xs italic mx-7'>{errors.post.message}</span>}
                            </div>
                            
                            <button type="submit" className="text-white bg-blue px-4 py-1 rounded-md mt-7 ml-[46%]">Add Post</button>
                        </div>

                    </div>
                    
                </form>
                
            </div>
            <Footer/>
        </div>
    )

}

export default AddPost;
