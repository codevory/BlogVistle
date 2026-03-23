import { useMemo } from 'react'

const Sidebar = () => {
  const posts = JSON.parse(localStorage.getItem("postData"))
  const categories = useMemo(() => {
    const counts = new Map()
    posts.forEach((post) => {
      const name = post.category || 'Uncategorized'
      counts.set(name, (counts.get(name) || 0) + 1)
    })
    return Array.from(counts.entries())
  }, [posts])

  const categoryList = (
    <div className='flex flex-col gap-1 mt-1'>
      <h1 className='font-sans text-2xl text-center'>Categories</h1>
      <span className='flex flex-col gap-1'>
        {categories.map(([name, count]) => (
          <span key={name} className='flex justify-between'>
            <span className='font-semibold '>{name}</span>
            <span className='font-serif'>{count}</span>
          </span>
        ))}
      </span>
    </div>
  )

  const postCount = <span className='text-xl font-serif font-bold flex gap-1'>Post Count : <p className='ml-1  text-emerald-700 font-serif text-xl'>{posts.length}</p></span>

  return (
    <div className='flex flex-col gap-5'>
      {categoryList}
      {postCount}
    </div>
  )
}

export default Sidebar
