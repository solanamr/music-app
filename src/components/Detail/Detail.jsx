import Comments from "../comments/Comments";

const Detail = () => {
    return (
        <section>
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
           <div className="flex">
                <div className="w-80 h-60 border border-purple bg-purple mr-10 rounded-lg"></div>
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum necessitatibus ratione porro. Nulla quaerat iste molestiae recusandae at. Nihil ipsum, dicta error aliquam fugit similique provident quos beatae enim.
                </p>
            </div>
            <Comments/>
        </section>
    );
}
 
export default Detail;