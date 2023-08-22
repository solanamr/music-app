import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/states/users/usersSlice";
import confetti from "../../assets/confetti.jpg";
import Blog from "../blog/Blog";
import Navbar from "../navbar/Navbar";

const Home = () => {

    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.users.users);
    // console.log(usersState, 'state')

    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
    
    return (
        <section >
            <Navbar/>
            <img src={confetti} alt="" className="w-full h-screen"/>
            <Blog/>
            {
                usersState.map((u,i) =>(
                    <div key={i}>
                        <h1>nombre: {u.firstName}</h1>
                        <h2>apellido: {u.lastName}</h2>
                    </div>
                ))
            }
        </section>
    );
}
 
export default Home;