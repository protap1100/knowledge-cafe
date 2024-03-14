import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {


    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmarks = blog =>{
      const newBookmarks = [...bookmarks,blog];
      setBookmarks(newBookmarks);
    }
    
    const handleReadingTime = time =>{
        const newReadingTime = readingTime  +  time;
        setReadingTime(newReadingTime)
        // console.log(newReadingTime)
    }
    


    return (
        <div className='container mx-auto'>
          <Header></Header>
          <div className='md:flex'>
            <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime} ></Blogs>
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime}  ></Bookmarks>
          </div>
        </div>
  )
}

export default App
