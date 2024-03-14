import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
  // console.log(handleBookmarks)
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl text-center font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <h1 className="text-center p-4 bg-green-400 rounded-xl text-2xl font-bold mt-5">Total Reading Time: {readingTime}</h1>
      {bookmarks.map((bookmark,index) => (
        <Bookmark key={index} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
