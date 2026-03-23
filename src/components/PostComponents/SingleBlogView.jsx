import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Likebtn from '../Buttons/Likebtn'


const Singleblog = () => {
  const [isRedirecting, setIsRedirecting] = useState(false)
  const navigate = useNavigate()
  const { slug } = useParams()
  let post = JSON.parse(localStorage.getItem("postData")) || []


  let data = post.find(a => a.slug == slug)
  //delete post functions
  function deletePost() {
    const newItems = post.filter(item => item.slug !== data.slug)
    localStorage.setItem("postData", JSON.stringify(newItems))
    alert("Post deleted successfully")
    setIsRedirecting(true)
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }


  post = JSON.parse(localStorage.getItem("postData")) || []
  data = post.find(a => a.slug == slug)


  if (isRedirecting) {
    return <div className='flex justify-center mt-10 '>
      <h1 className='bg-red-300 text-2xl font-semibold '>Post deleted successfully..</h1>
    </div>
  }


  if (!data) return <div className='flex flex-col gap-2 justify-center items-center absolute top-1/2 left-1/2 '>
    <h1 className='bg-red-700 text-white font-semibold w-full min-h-10 flex justify-center items-center p-2'> 404 | Article not Found </h1>
    <a className='bg-purple-700 text-white p-1 rounded-xl cursor-pointer active:scale-95 active:bg-amber-400 w-30 h-10 flex justify-center items-center font-semibold' href='/'>Return Home </a>
  </div>


  return (
    <div className=' flex flex-col gap-1 min-h-40  border-2 rounded-[7px] px-5 py-1 m-4 '>
      <div className='flex flex-col justify-between gap-1'>
        <span className='text-[18px] font-serif md:text-2xl' > {data.title}</span>
        <div className='flex items-center gap-2 font-mono text-[14px]'>
          <span className='text-[15px] font-medium md:text-[16px] md:font-bold rounded-[5px] px-2 bg-blue-100 text-blue-700'>{data.category}</span>
          <span>{data.date} {"•"}</span>
          <span>{data.time}</span>
        </div>
      </div>

      <div className=''>
        <span className='text-[14px] font-sans md:text-xl'> {data.content}</span>
      </div>
      <span className='flex justify-between'>
        <span>
          <Likebtn posts={post} />
        </span>
        <Link to={`/edit/article/${data.slug}`}> <button className='w-30 h-10 bg-green-500  font-semibold rounded cursor-pointer active:scale-95 p-3 m-2 flex justify-center items-center'>Edit</button></Link>
        <button onClick={() => {
          let resp = confirm("Do you want to delete this Post");
          if (resp) {
            return deletePost();
          }
          else {
            return 0;
          }
        }} className='bg-red-500 active:bg-red-500 cursor-pointer active:scale-95  font-semibold w-30 h-10 rounded p-3 m-2 flex justify-center items-center'>Delete post</button>
      </span>

    </div>

  )
}
export default Singleblog