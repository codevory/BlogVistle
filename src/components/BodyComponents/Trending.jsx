import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Theme/ThemeContext'
import { FaHeart } from 'react-icons/fa'

const Trending = () => {
  const posts = JSON.parse(localStorage.getItem("postData"))
  const [liked, setLiked] = useState(false)
  const { isDark } = useTheme()
  const mostLiked = posts.filter((post) => post.engagementData.likes > 7)

  const getPreview = (text, limit) => {
    const words = text.trim().slice(/\s+/);
    return words.length > 30 ? words.split(" ").slice(text, limit).join(" ") : text;
  }

  return (
    <>
      {mostLiked.map((post, idx) => {
        return (
          <div className='flex flex-col gap-3 justify-between items-center' key={post.id}>
            <Link to={`/article/${post.slug}`}>
              <div className={` flex flex-col gap-1 h-65 lg:h-70 overflow-hidden min-h-40 border-y hover:scale-101 rounded-[5px] px-2 py-1  shadow-md transition
                  ${isDark ? 'hover:shadow-gray-700' : 'hover:shadow-zinc-600'} `}>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-[18px] font-semibold md:text-[19px] '> {post.title}</h1>
                  <div className='flex items-center gap-1'>
                    <span className='text-xs font-semibold md:text-[16px] rounded-[5px] px-2 py-1 text-blue-700 bg-blue-100'>{post.category || 'unCategorized'}</span>
                    <div className='flex justify-start items-center gap-2 font-mono text-[14px] md:text-[14px]'>
                      <span>{post.date} {"•"}</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='text-[15px] font-sans md:text-[17px] max-w-3xl '>
                    <p>{getPreview(post.content, 40)} {post.content.split(/\s+/).length > 40 && (
                      <button className='text-blue-800 font-bold flex cursor-pointer flex-nowrap body dark:text-blue-400'>Show more</button>)}  </p>
                  </div>
                </div>

                <div className='flex gap-5'>
                  <span className='flex gap-1 items-center'> {liked ? (<FaHeart size={26} color="red" />) : (<FaHeart size={24} color="pink" className=" active:scale-95" />)}
                    {post.engagementData.likes}</span>
                  <span className='text-gray-500 font-medium font-serif'>#Trending {idx + 1}</span>
                </div>

              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Trending
