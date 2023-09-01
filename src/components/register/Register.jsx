import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import background from "../../assets/ecualizador.avif";
import axios from "axios";
import Navbar2 from "../Navbar2/Navbar2";


const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5077/api/users",
        data
      );
      reset();
      navigate("/");
      console.log("anduvo");
      return res;
    } catch (err) {
      console.error(err.message);
    }
    console.log(data);
  };

  return (
    <section>
    <Navbar2/>
        <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
        }}
      >
        
        <div className="bg-purple lg:bg-white lg:bg-opacity-20 lg:backdrop-blur-lg border-2 border-white lg:border lg:border-white lg:drop-shadow-lg flex-row justify-center  max-w-sm   rounded-lg text-white">
         <div className="mt-10">
         <h1 className="title text-4xl font-bold justify-center text-center uppercase">
            Registrate
          </h1>
         </div>
          
          <form
            className=" py-10 px-5 flex-row"
            onSubmit={handleSubmit(onSubmit)}
          >
            {" "}
            {/* handleSubmit valida los input antes de invocar onSubmit */}
            <div className="flex flex-col justify-center items-center ">
              <input
                className=" my-3 py-1 px-2 border-b-2 border-black rounded-md bg-lightGrey text-black placeholder-white placeholder-opacity-75 w-5/6 md:w-3/5"
                type="text"
                name="name"
                placeholder="Nombre"
                {...register("FirstName", {
                  required: {
                    value: true,
                    message: "Debe completar este campo",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "El formato es incorrecto",
                  },
                })}
              />
              {errors.FirstName && (
                <span className="text-xs italic mx-7">
                  {errors.FirstName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center items-center">
              
              <input
                className=" my-2 py-1 px-2 border-b-2 border-black rounded-md bg-lightGrey text-black placeholder-white placeholder-opacity-75 w-5/6 md:w-3/5"
                type="text"
                name="lastName"
                placeholder="Apellido"
                {...register("LastName", {
                  required: {
                    value: true,
                    message: "Debe completar este campo",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "El formato es incorrecto",
                  },
                })}
              />
              {errors.LastName && (
                <span className="text-xs italic mx-7">
                  {errors.LastName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center items-center">
              
              <input
                className="my-2 py-1 px-2 border-b-2 border-black rounded-md bg-lightGrey text-black placeholder-white placeholder-opacity-75 w-5/6 md:w-3/5"
                type="text"
                name="email"
                placeholder="Email"
                {...register("Email", {
                  required: {
                    value: true,
                    message: "Debe completar este campo",
                  },
                  pattern: {
                    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    message: "El formato es incorrecto",
                  },
                })}
              />
            
              {errors.Email && (<div> <span className="text-xs italic mx-7">
                  {errors.Email.message}
                </span></div>
               
              )}
            </div>
            <div className="flex  flex-col justify-center items-center">
              
              <input
                className="my-2 py-1 px-2 border-b-2 border-black rounded-md bg-lightGrey text-black placeholder-white placeholder-opacity-75 w-5/6 md:w-3/5"
                name="password"
                type="password"
                placeholder="Contraseña"
                {...register("Password", {
                  required: {
                    value: true,
                    message: "Debe completar este campo",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message:
                      "La contraseña debe tener al menos seis caracteres, una letra mayúscula, una minúscula, y un número.",
                  },
                })}
              />
              {errors.Password && (
                <span  style={{ display: 'block', marginTop: '5px' }}   className="text-xs italic mx-7 ">
                  {errors.Password.message}
                </span>
              )}
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
      
              // value="submit"
              className=" text-white bg-black lg:bg-purple px-6 py-1 rounded-md mt-5 mb-5"
            >
              Registrate
            </button>
            </div>
            <div className="flex justify-center">
              <p className="mx-14 text-sm text-center">
                Ya tenés cuenta?
                <Link to="/login" className="hover:underline">
                  {" "}
                  Iniciá sesión
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
 