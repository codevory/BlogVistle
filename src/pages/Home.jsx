import { useMemo, useState, useEffect } from 'react'
import Footer from "../components/BodyComponents/Footer"
import Posts from "../components/PostComponents/Posts"
import Sortpost from '../components/FilterComponents/Sortpost'
import Categorysorting from "../components/FilterComponents/Categorysorting"
import SearchButton from '../components/FilterComponents/Search'
import Sidebar from '../components/BodyComponents/Sidebar'
import LeftMenu from '../components/BodyComponents/LeftMenu'
import Logo from '/logoVistle.png'
import { useTheme } from '../components/Theme/ThemeContext'
import CreatePost from '../components/PostComponents/CreatePost'
import { X } from 'lucide-react';
import { dumy } from '../../public/dumy-data/dumy-posts'

const Home = () => {
  const [boxOpen, setboxOpen] = useState(false);
  const [searchQuery, setsearchQuery] = useState("")
  const [sortedOrder, setSortedOrder] = useState("newest")
  const [categoryFilter, setCategoryFilter] = useState("")
  const { isDark } = useTheme()

  //Toggle function to open dialogbox for posting article.
  function DialogToggle() {
    setboxOpen(!boxOpen)
  }
  
  //fetch posts from localStorage
  let postData = JSON.parse(localStorage.getItem("postData")) 
  
  //save dumy posts to localstorage if not exists already in localstorage.
  useEffect(() => {
    if(!postData){
      localStorage.setItem("postData", JSON.stringify(dumy))
    }
    if (window.innerWidth < 350) {
      alert("Kindly turn on the desktop mode for better view")
     }
  }, [])

  

  //if no post found this div appears.
  if (!postData) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center text-center w-full min-h-20 bg-red-400 text-white">
        <p className="font-semibold mr-4 ">No Post Found, Kindly post something from  <a className="text-blue-700 text-xl font-bold" href='/post'>Here</a></p>
        <div>
          <span className='text-green-700 text-[16px] font-bold rounded-[9px] p-2 bg-black'>
            <a href='/' >fetch posts</a>
          </span>
        </div>
      </div>
    )
  }

  //sort posts for search queries & filters.
  const FinalPosts = useMemo(() => {
    return postData
      .filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        post.category.toLowerCase().includes(categoryFilter.toLowerCase()))
      .sort((a, b) =>
        sortedOrder == "newest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt
      )
  }, [postData, searchQuery, categoryFilter, sortedOrder])


  //If post not matched on search will return paragraph
  if (FinalPosts.length == 0)
    return (
      <div className='flex flex-col px-3 md:px-6 py-2 min-h-screen '>
        <div className=' flex justify-between items-center py-1 w-full'>

          <span className='block ml-2 w-[40%]'>
            <Sortpost onSort={setSortedOrder} />
          </span>

          <span className='block mr-1 w-[40%] '>
            <SearchButton onSearch={setsearchQuery} />
          </span>

        </div>
        <div className='flex justify-center items-center font-semibold gap-3.5 mt-3'>
          <p>{`No match found for "${searchQuery}"`}</p>
        </div>
        <span className="flex justify-center items-center mt-5">
          <a className="w-40 h-14 rounded-2xl flex justify-center items-center bg-blue-500 text-white px-2 font-semibold" href="/">Return to home </a>
        </span>
      </div>
    )

  //Final return 
  return (
    <div className={`w-full flex flex-col px-2 md:px-6 py-2 `}>
      <div className={`relative ${boxOpen ? 'block' : 'hidden'}`} >
        {boxOpen && (<div className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40" />)}

        <div className={`fixed inset-0 z-50 flex items-center justify-center `}>
          <div className={`lg:w-[52%] h-[60%] sm:w-2/3 rounded-xl relative border-2  border-red-300 ${isDark ? 'bg-zinc-950' : 'bg-gray-100'}`}>
            <button onClick={DialogToggle} className="cursor-pointer absolute top-1 right-2  active:scale-95">
              <X strokeWidth={3} size={30} />
            </button>
            <CreatePost />
          </div>
        </div>

        <div className={boxOpen ? 'pointer-events-none blur-sm' : ''}>
          {/* the rest of page content */}
        </div>
      </div>

      {/* filter buttons */}
      <div className='flex flex-col md:flex-row w-full gap-4 md:h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <div className='lg:w-1/4 flex-col  lg:px-2 lg:rounded hidden lg:flex '>
          <img width={40} height={40} src={Logo} alt='logo' className='rounded-full ml-14 '></img>
          <LeftMenu openBox={DialogToggle} />
        </div>

        <div className={`flex w-full md:w-[70%] lg:w-1/2 flex-col border-x  md:justify-between overflow-y-scroll
         [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 rounded 
             ${isDark ? 'border-zinc-200' : 'border-zinc-900'}`} >

          <div className=' flex md:justify-between justify-center gap-[20%] items-center py-1 w-full px-2 md:px-20 '>

            {/* Get sorted order selected by user to filter posts */}
            <span className=' hidden md:block ml-1 w-15'>
              <Sortpost onSort={setSortedOrder} />
            </span>

            {/* Get selected category by user  */}
            <span className='block ml-2 w-15'>
              <Categorysorting onSort={setCategoryFilter} />
            </span>

            {/* Get Search query typed by user */}
            <span className=' block md:hidden  w-full '>
              <SearchButton onSearch={setsearchQuery} />
            </span>

          </div>

          <div className='border-t mb-4   w-full h-full   '>
            {/* Onfocus the DialogBox popups */}
            <input type='search' placeholder='What do You think of today ?' onFocus={DialogToggle}
              className='hidden sm:block w-full h-20 animate-pulse outline-0 px-4 py-2 ' />
          </div>

          {/* posts & sidebar from here */}
          <main className='flex justify-center flex-col gap-3.5 mt-2 '>
            <Posts posts={FinalPosts} />
          </main>

        </div>
        {/* Sidebar starts */}
        <div className='w-full md:w-[33%]  px-2 rounded h-screen'>
          <span className='hidden md:block mr-1 w-full '>
            <SearchButton onSearch={setsearchQuery} />
          </span>

          <div className='border rounded-[5px] p-2 mt-2 '>
            <Sidebar />
          </div>
        </div>

      </div>

      {/* Footer */}
      <div >
        <Footer />
      </div>

    </div>
  )
}

export default Home
