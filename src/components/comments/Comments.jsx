import { useEffect, useState } from "react";
import axios from "axios";
import { fetchBlogs } from "../../redux/states/blog/blogSlice";
import { login } from "../../redux/states/auth/authSlice";
import { useDispatch } from "react-redux";

const Comments = ({ postId, comments }) => {
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
    const jwt = localStorage.getItem("token");
    if (jwt) {
      setIsLoggedIn(true);
      dispatch(login());
    }
  }, [dispatch]);

  const handleChange = (e) => {
    setInput(e.target.value);
    setError(e.target.value.trim() === "" ? "Campo es requerido" : "");
  };

  const jwtToken = localStorage.getItem("token");
  const submit = async () => {
    try {
      if (input.trim() === "") {
        setError("Campo requerido");
      } else {
        const res = await axios.post(
          "http://localhost:5077/api/comments",
          { Text: input, postId: postId },
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          },
          alert("Comentario realizado!")
        );
        return res;
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString();
  };

  return (
    <main className="w-5/6">
      <section className="flex-col">
        {isLoggedIn ? (
          <form onSubmit={submit} className="flex-column w-full">
            <div className="flex items-center flex-col">
              <textarea
                value={input.Text}
                name="Text"
                onChange={handleChange}
                className="mx-2 my-1 border border-purple-600 rounded-md  text-black p-4 w-5/6 flex-col"
                type="text"
                id="Text"
                placeholder="Comment"
                rows="1"
              ></textarea>
              {error && (
                <p className="text-lg font-bold pb-4 text-purple">{error}</p>
              )}
            </div>
            <div className="flex justify-center mb-2">
              <button
                type="submit"
                className="text-white bg-blue px-2 py-1 rounded-md mt-1 "
              >
                Agregar
              </button>
            </div>
          </form>
        ) : (
          <p className="text-xl font-bold text-center text-purple pb-5">
            Para realizar un comentario, debes iniciar sesión.
          </p>
        )}

        <div className="flex-column md:mx-40 mb-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-[#dcdcdc] border border-black rounded-md flex-col justify-center px-2 py-2 my-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${c.id}`}
                    alt=""
                    className="w-20 h-20"
                  />
                  <div className="flex-col pl-5">
                    <p>{c.user.email}</p>
                    <h3>{c.text}</h3>
                    <p>{formatDate(c.creationDate)}</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Comments;
