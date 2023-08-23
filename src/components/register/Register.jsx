import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"
import background from "../../assets/ecualizador.avif";
import "../Register/register.css"


const Register = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = evento => {
        console.log(evento);
    }
    
   

    return(

        <div className="flex flex-col items-center justify-center h-screen"  style={{  backgroundImage: `url(${background})`, backgroundSize: 'cover', }}>
            <div className= "container-blur flex-row justify-center  max-w-sm  p-4 rounded-lg text-white" >
                
                    <h1 className='title m-6 text-lg text-sm justify-center text-center'>Register</h1>

                    <form className='signUp-form  space-y-4 my-7 mx-2 flex-row' onSubmit={handleSubmit(onSubmit)}> { /* handleSubmit valida los input antes de invocar onSubmit */}
                        <div className="mx-7">
                            <input className=" mx-7 border-b-2 border-black rounded-md bg-lightGrey text-black" type='text' name='name'  placeholder='Name' 
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
                            {errors.email && <span className='text-xs italic mx-7'>{errors.email.message}</span>}  
                        </div>   
                        <div className="mx-7">
                            <input className="mx-7 border-b-2 border-black rounded-md bg-lightGrey text-black" type='text' name='lastName'  placeholder='Last Name' 
                            {...register("lastName", {                                 
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
                            {errors.email && <span className='text-xs italic mx-7'>{errors.email.message}</span>}  
                        </div>                                                                       
                        <div className="mx-7">
                            <input className=" mx-7 border-b-2 border-black rounded-md bg-lightGrey text-black" type='text' name='email'  placeholder='Email' 
                            {...register("email", {                                 
                            required:{
                                value:true,
                                message:'Debe completar este campo',
                            },
                            pattern: {
                                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ , 
                                message: "El formato es incorrecto"
                            }
                            })}
                            
                                /> 
                            {errors.email && <span className='text-xs italic mx-7'>{errors.email.message}</span>}  
                        </div>
                        
                        <div className='mx-7'>
                            <input className="mx-7 border-b-2 border-black rounded-md bg-lightGrey text-black" name='password' type='password'  placeholder='Password'  
                            {...register("password",{
                            required:{
                                value:true,
                                message:'Debe completar este campo',
                            },
                            pattern: {
                                
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                message:"La contraseña debe tener al menos ocho caracteres, una letra mayúscula, una minúscula, y un número."
                                
                            }
                            })}
                            
                                /> 
                            {errors.password && <span className='text-xs italic self-start mt-1 mx-7'>{errors.password.message}</span>}
                            
                        
                        </div>
                        
                        <button type='submit' value="submit" className=" text-white bg-blue px-7 py-1 rounded-md ">Sign Up</button> 
                        <div className='register'>
                            <p className="mx-7">Already have an account? <Link to=''> Log In!</Link></p>
                            
                        </div>

                    </form>

                
            </div>
        </div>
    )
}


export default Register;
