import coment from "./coments.json";


const Comments = () => {
    return (
        <main>
            <section className="w-full">
                <div className="border border-black w-96 h-20"></div>
                <div>
                    {
                        coment.map(c =>(
                            <div key={c.id} className="border border-black rounded-md w-fit">
                                <div className="flex">
                                    <img src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${c.id}`} alt="" className="w-20 h-20"/>
                                    <div className="flex-col">
                                        <h3>{c.name}</h3>
                                        <p>{c.creationDate}</p>
                                    </div>
                                </div>
                                <p className="w-80">{c.text}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}
 
export default Comments;