import coment from "./coments.json";
import { useForm } from "react-hook-form";


const Comments = () => {

    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
    //   const res = await axios.post(
    //     "http://localhost:5077/api/",
    //     data
    //   );
      //reset();
      //navigate("/");
      console.log("anduvo");
      //return res;
    } catch (err) {
      console.error(err);
    }
  };


    return (
        <main>
            <section className="w-full flex-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)}  className="flex-center">
                    <div className="flex-col">
                         <textarea className="mx-2 border border-purple-600 rounded-md  text-black p-4" type="text" name="comment" id="comment" placeholder="Comment"  rows="1"
                            {...register("comment",{
                                required:  "Debe completar este campo"
                                // message: "Debe completar este campo"
                            })}
                        ></textarea>
                        {errors.comment && <span className='text-xs italic'>{errors.comment.message}</span>} 
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="text-white bg-blue px-2 py-1 rounded-md mt-1 "
                        > 
                            Add comment
                        </button>
                   
                    </div>
                    
                </form>
                
                
                <div className="mb-4">
                    {
                        coment.map(c =>(
                            <div key={c.id} className="border border-black rounded-md ">
                                <div className="flex">
                                    <img src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${c.id}`} alt="" className="w-20 h-20"/>
                                    <div className="flex-col">
                                        <h3>{c.name}</h3>
                                        <p>{c.creationDate}</p>
                                    </div>
                                </div>
                                <p className="">{c.text}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}
 
export default Comments;