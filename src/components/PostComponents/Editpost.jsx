import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


function EditPost() {
  const navigate = useNavigate()
  const [newTitle, setNewtitle] = useState('')
  const [newCont, setNewcont] = useState('')
  const [isRedirecting, setIsRedirecting] = useState(false)
  const { slug } = useParams()
  const post = JSON.parse(localStorage.getItem("postData")) || []
  const data = post.find(a => a.slug === slug)

  //post update function starts here
  function handleUpdate(e) {
    e.preventDefault()
    const updatedPost = post.map((p) => {
      if (p.slug === data.slug) {
        if (newTitle != p.title || newCont != p.content) {
          alert("post data updated successfully ")
          setIsRedirecting(true)
          return {
            ...p,
            'title': newTitle,
            'content': newCont
          }
        }
        else if (newTitle == p.title || newCont == p.content) {
          alert("Nothing was updated")
        }
      }
      return p;
    })
    localStorage.setItem("postData", JSON.stringify(updatedPost))
  }


  //handle post update function ends here
  if (!data) return <h1>404 | Not article found</h1>
  useEffect(() => {
    if (data) {
      setNewtitle(data.title)
      setNewcont(data.content)
    }
  }, [])


  if (isRedirecting) {
    setTimeout(() => {
      navigate('/')
    }, 500);
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      }}>
        <p className='bg-green-600 font-serif text-xl  flex justify-center items-center px-3'>Post updated Successfully</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleUpdate} className='p-1 h-full m-4 flex flex-col justify-between'>
      <div className='flex items-center w-full mb-2'>
        <span className='flex flex-col w-3/4 '>
          <label htmlFor='title' className='font-serif text-[19px] md:text-xl '>Set New Title</label>
          <input id='title' className='max-w-[70%] min-w-[40%] outline-amber-100 h-10 font-sans rounded-[10px] p-1 flex justify-center items-center border-white outline-0' type='text' value={newTitle} onChange={(e) => { setNewtitle(e.target.value) }} />
        </span>
        <span className='flex flex-col gap-1 items-start w-1/4'>
          <p className='text-[15px] px-1 font-serif md:px-2'>Category</p>
          <span className='font-sans px-2 py-1 cursor-not-allowed bg-blue-100 text-blue-800 rounded-[5px]'>{data.category}</span>
        </span>
      </div>
      <span className='flex flex-col gap-2 mt-2'>
        <label htmlFor='content-description' className='text-xl font-serif'>Edit content</label>
        <textarea id='content-description' className=' px-2 py-1' rows={12} cols={16} value={newCont} onChange={(e) => { setNewcont(e.target.value) }}>

        </textarea>
      </span>
      <span className='flex justify-center items-center'>
        <button className='bg-emerald-800 text-white font-semibold w-30 h-10 rounded p-3 m-2 flex justify-center items-center active:scale-95 cursor-pointer'>Update post</button>
      </span>
    </form>
  )

}


export default EditPost