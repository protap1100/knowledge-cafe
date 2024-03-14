import { CiBookmark } from "react-icons/ci";
const Blog = ({blog ,handleBookmarks,handleReadingTime}) => {
    // console.log(blog)
    const {title,cover_image,author_image,author,posted_date,reading_time,tags} = blog;
    return (
        <div className=" bg-gray-300 rounded-xl">
            <img className="rounded-xl" src={cover_image} alt=""/>
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center justify-center">   
                    <img className="h-20 w-20" src={author_image} alt="" />
                    <div>
                        <h1 className="text-2xl font-bold" >{author}</h1>
                        <h2 className="" >{posted_date}</h2>
                    </div>
                </div>
                <div className="flex gap-10">
                    <h1>{reading_time} Mins Read</h1>
                    <button onClick={()=>{handleBookmarks(blog)}} ><CiBookmark /></button>
                </div>
            </div>
            <h1 className="mt-10 text-4xl">Title:{title} </h1>
             <div className="flex gap-5">
                {
                    tags.map((tag,index)=> <h1 key={index} className="text-red-500"> {tag} </h1>)
                }
             </div>
            <h1 className="text-blue-950 font-bold text-2xl cursor-pointer" onClick={() => handleReadingTime(reading_time)}>Mark As Read</h1>
        </div>
    );
};

export default Blog;