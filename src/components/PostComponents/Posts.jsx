import { Link } from 'react-router-dom'
import { useTheme } from '../Theme/ThemeContext'

const Posts = ({ posts }) => {
  const { isDark } = useTheme()

  const getPreview = (text, limit) => {
    if (!text) return " No post found!"
    const words = text.trim().slice(/\s+/)
    return words.length > 30 ? words.split(" ").slice(text, limit).join(" ") : text;
  }

  if (posts.length > 0) {

    return (
      posts.map((post) => {
        return (
          <div key={post.id} >
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
              </div>
            </Link>
          </div>
        )
      })
    )
  }
  else if (posts.length === 0) {
    return (
      <div className='flex justify-center items-center text-center bg-red-400 text-white'>
        <p className='font-semibold'>No Post Found </p>
      </div>
    )
  }

}

export default Posts
