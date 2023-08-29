
import { Link } from "react-router-dom";


import records from "../../assets/records.jpg";


const Blog = ({ title, text, category, key, id, img }) => {



  return (
    <main className="pt-20 pb-10">
      <section className="">
        <Link to ={`/blog/${id}`}>
          <div key={key} className="border border-black bg-purple lg:w-[450px] lg:ml-10 px-5 py-7 rounded-lg">
          {img ? <img src={`data:image/jpg;base64,${img}`} alt="" className="w-96 h-60 ml-2"/> : <img src={records} alt="" className="w-96 h-60 ml-2"/>}
            <h1 className="font-bold text-white text-center pt-7 pl-4 text-lg">{title}</h1>
            <p className="text-white pl-4 w-96 text-center">{text}</p>
            <h2>{category}</h2>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Blog;
