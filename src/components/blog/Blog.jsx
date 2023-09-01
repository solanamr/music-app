import { Link } from "react-router-dom";
import records from "../../assets/records.jpg";

const Blog = ({ title, text, category, key, id, img }) => {
  return (
    <main className="pb-10" key={key}>
      <section className="">
        <Link to={`/blog/${id}`}>
          <div
            key={key}
            className="border border-black bg-purple lg:w-[450px] lg:ml-10 px-5 py-7 rounded-lg"
          >
            <div className="flex justify-center">
              {img ? (
                <img
                  src={`data:image/jpg;base64,${img}`}
                  alt=""
                  className="w-5/6 h-auto inline self-center"
                />
              ) : (
                <img
                  src={records}
                  alt=""
                  className="w-5/6 h-auto inline self-center"
                />
              )}
            </div>
            <div>
              <h1 className="font-bold text-white text-center pt-7 text-lg">
                {title}
              </h1>
            </div>
            <div>
              <p className="text-white pl-4 w-5/6 text-center">{text}</p>
            </div>

            <h2>{category}</h2>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Blog;
