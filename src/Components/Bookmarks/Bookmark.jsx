const Bookmark = ({bookmark}) => {
   const {title} = bookmark;
   console.log(title)
    return (
       <div>
            <div className="text-center p-4 bg-slate-400 rounded-xl text-2xl font-bold mt-5">
                <h1>{title}</h1>
            </div>
       </div>
    );
};

export default Bookmark;