import { Link, useNavigate } from "react-router-dom";
import headphones from "../../assets/imgHeadphones.png";
import login from "../../assets/login.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5077/api/auth/login",
        data
      );
      reset();
      navigate("/");
      console.log("anduvo");
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex justify-center ">
      
        <div className="w-full">
          <img src={login} alt="" className="h-screen w-full" />
        </div>

        <div className="bg-purple h-screen w-full pt-20 ">
          <div className="ml-[33%]">
            <img className="mb-14 " src={headphones}/>
          </div>
          <h1 className="text-white text-5xl text-center">WELCOME</h1>

          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {" "}
            {/* handleSubmit valida los input antes de invocar onSubmit */}
            <div className="ml-[38%]">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b-2 border-black bg-purple mt-10 mb-5"
                  {...register("email", {
                    //registra el input
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                    pattern: {
                      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                      message: "El formato es incorrecto",
                    },
                  })}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-2 border-black bg-purple mt-5"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                    pattern: {
                      minLenght: {
                        value: 8,
                        message:
                          "La contraseña debe tener al menos ocho caracteres.",
                      },
                    },
                  })}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-blue px-4 py-1 rounded-md mt-7 ml-[46%]"
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-white pt-10">
                Don´t have an account? <Link to="/register" > Register</Link>
              </p>
            </div>
          </form>
        </div>

    </main>
  );
};


export default Login;
