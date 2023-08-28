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

                        <div className="title-field text-black flex justify-center flex-col">
                                <input type="text" className="w-full border border-purple-600 rounded-md  text-black p-1"  name="Title" placeholder="Title"
                                {...register("Title", {                                 
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
                                {errors.Title && <span className='text-xs italic mx-1 mt-1'>{errors.Title.message}</span>}
                            </div>
                            <div className="cat-file-container flex">
                                    <select name="Category" className="rounded-md px-2 py-2 border border-purple-600 my-1" 
                                    {...register("Category",
                                    { required: {
                                        value:true,
                                        message:"Seleccione una categoria"
                                    
                                    }
                                    })}>
                                                
                                        <option value=""> Categorías</option>
                                        <option value="REVIEWS">Reseñas</option>                                  
                                        <option value="ARTIST_INTERVIEWS">Entrevista a Artistas</option>
                                        <option value="MUSIC_GENRES">Géneros Musicales</option>
                                        <option value="DISCOVERING_NEW_TALENTS">Descubriendo Nuevos Talentos</option>
                                        <option value="STORIES_OF_BANDS_AND_FAMOUS_ARTISTS5">Historias de Bandas y Artistas Famosos</option>
                                        <option value="CONCERTS_AND_FESTIVALS">Conciertos y Festivales</option>
                                        <option value="MUSIC_TUTORIALS">Tutoriales</option>
                                        <option value="INDUSTRY_NEWS_AND_TRENDS">Noticias y Tendencias de la Industria</option>
                                        <option value="MUSIC_HISTORY">Historia de la Musica</option>
                                        <option value="MUSICAL_INSTRUMENTS0">Instrumentos Musicales</option>
                                            
                                                
                                    </select>
                                    {errors.Category && <span className='text-xs italic mx-1 self-center'>{errors.Category.message}</span>}
                                <div className="file-container mt-2 md:mt-0 md:ml-2 flex">
                                    <label htmlFor="file"  className="md:w-24" > Agregá una imagen:</label>
                                
                                    <input  className="" type="file"  name="Image" accept="image/png, image/jpeg"
                                    {...register("Image", {                                 
                                        required:{
                                            value:false,
                                        },
                                    
                                        })}
                                    />
                                </div>
                            </div>
                           
                            <div className="text-area-container">
                                <textarea className=" border border-purple-600 rounded-md  text-black w-full p-4" type="text" name="Text" placeholder="Post"  rows="7"
                                {...register("Text",{
                                    required:"Debe completar este campo"
                                })}
                                ></textarea>
                                {errors.Text && <span className='text-xs italic mx-1'>{errors.Text.message}</span>}
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
