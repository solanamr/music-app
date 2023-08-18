import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <main className="pt-20 pb-10">
      <section className="flex justify-center">
        <Link to="blog">
            <div>
                <div className="w-80 h-60 border border-purple bg-purple mr-10 rounded-lg"></div>
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
        </Link>
        <div>
            <div className="w-80 h-60 border border-purple bg-purple mr-10 rounded-md"></div>
            <p className="w-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>
        <div>
            <div className="w-80 h-60 border border-purple bg-purple mr-10 rounded-md"></div>
            <p className="w-64">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
