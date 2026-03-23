import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useState, useEffect, useMemo } from 'react'
import { useParams } from "react-router-dom";


const Likebtn = ({ posts }) => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const { slug } = useParams()
  const data = posts.find(p => p.slug == slug)

  useEffect(() => {
    let updated = posts.map((post) => {
      if (post.slug == data.slug)
        return {
          ...post,
          engagementData: {
            ...post.engagementData,
            'likes': post.engagementData.likes + likeCount
          }
        }
      return post
    })
    localStorage.setItem("postData", JSON.stringify(updated))
  }, [liked])


  return (
    <div className="flex gap-1 justify-center items-center h-13">
      <button onClick={() => {
        setLiked(!liked)
        { likeCount == 0 ? (setLikeCount(likeCount + 1)) : (setLikeCount(likeCount - 1)) }
        console.log(likeCount)
      }}>
        {liked ? (<FaHeart size={26} color="red" />) : (<FaHeart size={24} color="pink" className=" active:scale-95" />)}
      </button>
      <p>{likeCount}</p>
    </div>
  )
}

export default Likebtn
