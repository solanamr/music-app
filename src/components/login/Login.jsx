import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import headphones from "../../assets/imgHeadphones.png";
import loginn from "../../assets/login.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { login, logout } from '../../redux/states/auth/authSlice';
import { useDispatch } from 'react-redux';
import Navbar2 from "../Navbar2/Navbar2";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      dispatch(login());
      const jwtToken = res.data.token
      localStorage.setItem('token', jwtToken);
      if (res.status === 200) {
        setIsLoggedIn(true)
      }
      reset();
      navigate("/");
      console.log("anduvo");
      return res;
    } catch (err) {
      console.error(err);
    }
  
  };


  return (
    <main className="flex-row justify-center ">
      <Navbar2/>
      {/* La imagen desaparece para display de mobile. */}
      <div className="flex">
        <div className="hidden md:block w-full">
          <img src={loginn} alt="" className="h-screen w-full"/>
        </div>

        <div className="form-section flex flex-col justify-center bg-purple h-screen w-full">
          <div className="headset-image flex justify-center items-center">
            <img className="mb-14 inline" src={headphones}/>
          </div>
          <h1 className="text-white text-5xl text-center">WELCOME</h1>

          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {" "}
            {/* handleSubmit valida los input antes de invocar onSubmit */}
            <div className="fields-container mx-auto">
              <div className="email-field flex flex-col">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="border-b-2 border-lightGrey bg-purple text-white mt-10 mb-1  mx-auto"
                  {...register("Email", {
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
                  {errors.Email && <span className='text-xs text-white italic self-center'>{errors.Email.message}</span>}
              </div>

              <div className="pass-field flex flex-col">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="border-b-2 border-lightGrey bg-purple mt-5 mx-auto text-white"
                  {...register("Password", {
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
                {errors.Password && <span className='text-xs text-white italic self-center mt-1'>{errors.Password.message}</span>}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue px-4 py-1 rounded-md mt-7 "
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-white pt-10">
                Don't have an account? <Link to="/register" > Register</Link>
              </p>
            </div>
          </form>
         
        </div>
      </div>
    </main>
  );
};


export default Login;
