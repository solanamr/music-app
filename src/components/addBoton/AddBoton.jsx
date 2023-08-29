import { MdOutlinePostAdd } from "react-icons/md"
import { Link } from "react-router-dom";


const AddBoton = () => {
    return (
        <section>
            <div className="absolute right-[4%] top-[40%] w-14 h-14 bg-purple 
            flex items-center justify-center rounded-full animate-bounce">
                    <Link to="add"> <MdOutlinePostAdd className="text-3xl text-white "/> </Link>
                </div>
        </section>
    );
}
 
export default AddBoton;