import { useState, useEffect } from 'react'
import { useTheme } from '../Theme/ThemeContext';
const date = new Date();
const currentDate = date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

const time = date.toLocaleString('en-us', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
})


const CreatePost = ({ }) => {
  const { isDark } = useTheme()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [copy, setCopy] = useState(() => {
    const savedPost = localStorage.getItem("postData")
    return savedPost ? JSON.parse(savedPost) : []
  })


  function handlepost() {
    const slugify = (title) => title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    const postData = {
      'id': `art-${crypto.randomUUID()}`,
      'title': title,
      'slug': slugify(title),
      'category': category,
      'content': content,
      'date': currentDate,
      'time': time,
      'createdAt': Date.now(),
      engagementData: {
        'likes': 0,
        'likedBy': []
      }

    }
    const updatedData = [...copy, postData]
    setCopy(updatedData)
  }
  useEffect(() => {
    localStorage.setItem('postData', JSON.stringify(copy))
  }, [copy])

  return (
    <form onSubmit={(e) => {
      handlepost()
      e.preventDefault()
      setTitle('')
      setCategory('')
      setContent('')
      alert("Posted successfully")

    }}
      className='w-98vw h-full m-4 overflow-hidden rounded-xl relative '>
      <div className='px-2 py-1'>
        <div className='flex justify-between px-2'>
          <div className='flex w-[50%]  '>
            <input name='title' id='title' className='text-[15px] md:text-[18px] lg:text-xl h-10 w-2/3 rounded-sm outline-0 ' type='text' placeholder='Enter title for post' onChange={(e) => { setTitle(e.target.value) }} value={title} required />
          </div>
          <div className='flex flex-col gap-1 w-[45%] '>
            <select value={category} onChange={(e) => { setCategory(e.target.value) }} name='category' id='category' required className=' outline-0 text-xs md:text-[18px] lg:text-xl font-medium h-10'>
              <option name='select-option' aria-disabled>Select</option>
              <option name='education' aria-selected >Education</option>
              <option name='technology' aria-selected>Technology</option>
              <option name='language' aria-selected>Language</option>
              <option name='Guidance' aria-selected>Guidance</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between items-center px-2'>
          <span className='my-1   rounded-[7px] p-1'> Date :  {currentDate} </span>
          <span className='my-1  rounded-[7px] p-1'> Time :  {time} </span>
        </div>
        <div className={` w-full h-50 md:h-60 relative `}>
          <textarea value={content} onChange={(e) => { setContent(e.target.value) }} className='w-full md:w-[96%] h-[70%] outline-0 rounded-[10px] px-2 py-1' placeholder='Write your content here' name='content-area' rows={13} required>

          </textarea>
        </div>
        <div className='flex justify-center items-center relative '>
          <button className={`w-40 h-10 font-bold rounded-[10px] active:bg-emerald-800 active:scale-95 cursor-pointer
  ${isDark ? 'bg-gray-200 text-black' : 'bg-zinc-800 text-white'} ${title != '' ? 'block' : ' hidden'}`}>Post</button>
        </div>
      </div>
    </form>

  )
}

export default CreatePost
