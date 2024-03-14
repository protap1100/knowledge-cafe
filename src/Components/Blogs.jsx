import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({handleBookmarks,handleReadingTime}) => {


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 flex flex-col gap-10 p-4">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime} >  </Blog>
      ))}
    </div>
  );
};

export default Blogs;
