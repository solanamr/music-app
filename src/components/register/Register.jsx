import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"


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

        <div className="h-100 h-custom" style="background-color: #8fc4b7;">
            <div>
                <h1 className='title text-sm'>Register</h1>

                <form className='signUp-form' onSubmit={handleSubmit(onSubmit)}> { /* handleSubmit valida los input antes de invocar onSubmit */}
                    <div>
                        <input type='text' name='name'  placeholder='Name' 
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
                        {errors.email && <span className='text-xs italic'>{errors.email.message}</span>}  
                    </div>                                                                 
                    <div>
                        <input type='text' name='email'  placeholder='Email' 
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
                        {errors.email && <span className='text-xs italic'>{errors.email.message}</span>}  
                    </div>
                    <div>
                    <div className='pass-container mt-6'>
                        <input name='password' type='password'  placeholder='Password'  
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
                        {errors.password && <span className='text-xs italic self-start mt-1'>{errors.password.message}</span>}
                        
                    </div>
                    </div>
                    
                    <button type='submit' value="submit" className='btn rounded-full loginBtn'>Sign Up</button> 
                    <div className='register'>
                        <p>Already have an account? <Link to=''> LogIn!</Link></p>
                        
                    </div>

                </form>

         </div>
    </div>
    )
}


export default Register;
