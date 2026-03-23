import Tooltip from '../Resuables/Tooltip'
import { House, Telescope, TrendingUp, Ellipsis, SquarePen, Bell, UserPlus, CircleEllipsis } from 'lucide-react';
import { useTheme } from '../Theme/ThemeContext';
import userLogo from '/Userlogo.webp'
import { NavLink } from 'react-router-dom';

const LeftMenu = ({ openBox }) => {
  const { isDark } = useTheme()


  const items = <div className='flex-col  flex gap-1.5 h-full mt-2 z-140'>
    <Tooltip content='Home'>
      <NavLink to={`/`} end aria-label='Home' className={` cursor-pointer inline-flex  gap-2 font-medium active:font-bold active:scale-102 text-xl rounded-full  px-6 py-3  
      ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<House size={28} />} <span>Home</span></NavLink>
    </Tooltip>

    <Tooltip content={`Explore`}>
      <NavLink aria-label='Explore' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3 
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<Telescope size={28} />} <span>Explore</span></NavLink>
    </Tooltip>

    <Tooltip content={`Notfications`}>
      <NavLink aria-label='Notifications' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3  
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<Bell size={28} />} <span>Notifications</span></NavLink>
    </Tooltip>

    <Tooltip content={`Trending`}>
      <NavLink to={`/trending`} aria-label='Trending' className={` cursor-pointer inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3 
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '}  `}>{<TrendingUp size={28} />} <span>Trending</span></NavLink>
    </Tooltip>

    <Tooltip content={`Coming Soon`}>
      <NavLink aria-label='Follow' className={`cursor-pointer  inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3 
       ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '}`}>{<UserPlus size={28} />} <span>Follow</span></NavLink>
    </Tooltip>

    <Tooltip content={`Find More`}>
      <div aria-label='Find more' className={` cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-102 text-xl  px-6 py-3  
      ${isDark ? 'hover:bg-zinc-800' : ' hover:bg-zinc-300 '} `}>{<CircleEllipsis size={28} />} <span>More</span></div>
    </Tooltip>

    <Tooltip content={`Create Post`}>
      <button onClick={openBox} type='button' aria-label='Create post' className={`w-full mt-2 cursor-pointer inline-flex gap-2 font-bold active:scale-103 text-xl rounded-4xl justify-center items-center px-6 py-3
       ${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>{<SquarePen size={28} />} Post </button>
    </Tooltip>

    <div className={`inline-flex items-center gap-x-2 cursor-pointer px-6 py-2 mt-10 rounded-full ${isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-300'}`}>
      <img src={userLogo} alt='user Profile' className='size-12 rounded-full'></img>

      <div className='flex flex-col '>
        <span className=' font-semibold   lg:font-bold text-[15px] sm:text-[16px] lg:text-lg'>Shahijahan Pedhar</span>
        <span className='font-sans text-[14px] md:text-[16px] text-gray-600'>@shahijahanQ</span>
      </div>

      <span className='ml-2 lg:ml-3'>
        <Ellipsis size={20} />
      </span>
    </div>
  </div>



  return (
    <>
      {items}
    </>
  )
}

export default LeftMenu
