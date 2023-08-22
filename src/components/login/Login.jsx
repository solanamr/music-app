import '../login/login.css'
import headphones from '../../assets/imgHeadphones.png'
import { useForm} from "react-hook-form"





const Login = () =>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = evento => {
        console.log(evento);
    }



    return(
        <div className="login-container">
            <div><img className='headphones' src={headphones}></img></div>
            <h1 className='title'>WELCOME</h1>

             <form className='login-form' onSubmit={handleSubmit(onSubmit)}> { /* handleSubmit valida los input antes de invocar onSubmit */}
                                                                                        
                <div>
                   <input type='text' name='email'  placeholder='Email' 
                   {...register("email", {                                  //registra el input
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
                
                <button type='submit' value="submit" className='btn rounded-full loginBtn'>Sign In</button> 
                <div className='register'>
                    <p>Don´t have an account? <a href=''> Register!</a></p>
                    
                </div>
             
            </form>
        </div>
    )
}


export default Login;


