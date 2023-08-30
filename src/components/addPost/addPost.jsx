import { useForm } from "react-hook-form";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./addPost.css";
import instrumentos from "../../assets/instrumentos.jpg";
import axios from "axios";
import { useState } from "react";


// function validacion(input){
//     const errores = {}
//     if(!input.Title){
//         errores.Title = "Debe colocar un Título";
//     }
//      if(!input.Category){
//         errores.Category = "Debe seleccionar una categoría";
//     }
//      if(!input.Image){
//         errores.Image = "Debe incluir una imagen";
//     } 
//     if(!input.Text){
//         errores.Text = "Debe completar este campo";
//     }
//     return errores
// }
// // /*
// en submit
//  e.preventDefault()
//         if(!input.Title || !input.Category || !input.Image || !input.Text){
//             return alert("Completar los campos")
//           }

// */ 


const AddPost = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log("title", title);
  };
  const handleChangeCat = (e) => {
    setCategory(e.target.value);
    console.log("cat", category);
    // console.log([e.target.value])
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
    console.log("text", text);
  };

  const jwtToken = localStorage.getItem("token");

  const submit = async (e) => {
    e.preventDefault();

    let data = { Category: category, Text: text, Title: title };

    try {
      const res = await axios.post(
        "http://localhost:5077/api/post",
        data,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
        // alert("Blog creado!")
      );

      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="main-body items-center flex justify-center bg-lightBlue w-full h-screen">
        <form className="flex-row" onSubmit={submit}>
          <div className="card-container self-center bg-white rounded-xl py-4 px-6 md:flex md:flex-row md:space-x-6 ">
            <div className="user-image shadow-2xl p-4 flex md:w-96 md:h-96 ml:w-full">
              <img
                className="object-cover w-fit-content "
                src={instrumentos}
                alt="Instrumentos musicales"
              ></img>
            </div>
            <div className="inputs-container flex-row space-y-4 p-4">
              <div className="text-center">
                <h1 className="text-black text-3xl font-bold inline-block">
                  New Post
                </h1>
              </div>

              <div className="Title-field text-black flex justify-center flex-col">
                <input
                  type="text"
                  value={title}
                  name="Title"
                  onChange={(e) => handleChangeTitle(e)}
                  className="w-full border border-purple-600 rounded-md  text-black p-1"
                  placeholder="Title"
                />
              </div>
              <div className="cat-file-container flex">
                <select
                  value={category}
                  name="Category"
                  onChange={(e) => handleChangeCat(e)}
                  className="rounded-md px-2 py-2 border border-purple-600 my-1"
                >
                  <option value=""> Categorías</option>
                  <option value="REVIEWS">Reseñas</option>
                  <option value="ARTIST_INTERVIEWS">
                    Entrevista a Artistas
                  </option>
                  <option value="MUSIC_GENRES">Géneros Musicales</option>
                  <option value="DISCOVERING_NEW_TALENTS">
                    Descubriendo Nuevos Talentos
                  </option>
                  <option value="STORIES_OF_BANDS_AND_FAMOUS_ARTISTS5">
                    Historias de Bandas y Artistas Famosos
                  </option>
                  <option value="CONCERTS_AND_FESTIVALS">
                    Conciertos y Festivales
                  </option>
                  <option value="MUSIC_TUTORIALS">Tutoriales</option>
                  <option value="INDUSTRY_NEWS_AND_TRENDS">
                    Noticias y Tendencias de la Industria
                  </option>
                  <option value="MUSIC_HISTORY">Historia de la Musica</option>
                  <option value="MUSICAL_INSTRUMENTS0">
                    Instrumentos Musicales
                  </option>
                </select>

                {/* <div className="file-container mt-2 md:mt-0 md:ml-2 flex">
                                    <label htmlFor="file"  className="md:w-24" > Agregá una imagen:</label>
                                
                                    <input  className="" name="Image" type="file" onChange={handleImageChange} accept="image/*"
                                    
                                    />
                                    </div> */}
              </div>

              <div className="text-area-container">
                <textarea
                  value={text}
                  name="Text"
                  onChange={(e) => handleChangeText(e)}
                  className=" border border-purple-600 rounded-md  text-black w-full p-4"
                  type="text"
                  placeholder="Post"
                  rows="7"
                ></textarea>
              </div>
              <div className="button-add flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue px-4 py-1 rounded-md mt-7"
                >
                  Add Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddPost;
