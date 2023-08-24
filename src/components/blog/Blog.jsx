import { Link } from "react-router-dom";
import temp from "../../assets/temp.avif";


const Blog = ({ title, text, category, key }) => {
  return (
    <main className="pt-20 pb-10">
      <section >
        <Link to="blog">
          <div key={key} className="border border-black bg-purple w-[450px] ml-10 px-5 py-7 rounded-lg">
          <img src={temp} alt="" className="w-96 h-60 ml-2"/>
            <h1 className="font-bold text-white pt-7 pl-4 text-lg">{title}</h1>
            <h2 className="text-white pl-4 w-96">{text}</h2>
            <h2>{category}</h2>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Blog;
