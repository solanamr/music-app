import { useForm} from "react-hook-form"
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import "./addPost.css"

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
        
            <div className="top-container ">
            
                <form className="flex-row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex card-container rounded-xl py-4">
                        <div className="user-image shadow-2xl p-4 flex mx-7">
                            <img className="object-cover" src="https://media.istockphoto.com/id/894058148/es/foto/instrumentos-musical.jpg?s=612x612&w=0&k=20&c=qlmIOvD9H9AlzF2lTNCPxh9FV5PRuQ7KiM6jilEj4ig="></img>
                        </div>
                        <div className="flex-row space-y-4 inputs">
                            <select name="categoria" className="rounded-md px-4 py-2 mx-7 border border-purple-600 " 
                            {...register("categoria",
                            { required: {
                                value:true,
                                message:"Seleccione una categoria"
                            
                            }
                            })}>
                                        
                                <option value="" > Categorías</option>
                                <option value="2">Entrevistas a Artistas</option>
                                <option value="3">Generos Musicales</option>
                                <option value="4">Nuevos Talentos</option>
                                <option value="5">Historia de Grandes artistas</option>
                                <option value="6">Tutoriales</option>
                                <option value="7">Historia de la Musica</option>
                                <option value="8">Instrumentos Musicales</option>
                                    
                                        
                            </select>

                            <div className="text-black">
                                <input type="text" className="mx-7 border border-purple-600 rounded-md  text-black p-1" id="title" name="title" placeholder="Title"
                                {...register("name", {                                 
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
                            </div>
                        
                            <div className="">
                                <textarea className="mx-7 border border-purple-600 rounded-md  text-black w-full p-4" type="textarea"  placeholder="Post"  rows="7"></textarea>
                            </div>
                            {/* <button type="button" className="text-white bg-lightGrey px-2 py-1 rounded-md mt-7 ml-[46%]">Change Image</button> */}
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
