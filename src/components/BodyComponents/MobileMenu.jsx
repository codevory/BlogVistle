import Tooltip from '../Resuables/Tooltip'
import { House, Telescope, TrendingUp, SearchCheck, Ellipsis, SquarePen, Bell, UserPlus, CircleEllipsis } from 'lucide-react';
import { useTheme } from '../Theme/ThemeContext';
import userLogo from '/Userlogo.webp'
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOn, Cbfunction }) => {
  const { isDark } = useTheme()
  const check = isDark ? 'bg-zinc-800' : 'bg-zinc-200'
  const items =

    <div className={`flex flex-col   gap-5 md:gap-7 absolute top-0 left-0  min-w-1/3  sm:min-w-1/4
  ${isOn ? check : ''} ${isOn ? 'h-screen' : 'h-5'} `}>
      <span onClick={Cbfunction} className={`relative inline-flex  top-5 left-5 cursor-pointer actve:scale-97 lg:hidden`}><Menu size={25} /></span>
      <div className={`flex-col w-full h-screen  gap-0.5 sm:gap-1.5 md:gap-3 mt-4 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}
  ${isOn ? 'traslate-x-10 z-100 flex  ' : 'hidden z-0'}`}>

        <Link to={`/`} aria-label='Home' className={`cursor-pointer inline-flex  gap-2 font-medium active:font-bold active:scale-95 text-[15px] rounded-full  px-3 py-1.5  
      ${isDark ? 'hover:bg-zinc-700' : ' hover:bg-zinc-300 '} `}>{<House size={20} />} <span>Home</span></Link>

        <Link to={`/`} aria-label='Explore' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-95 text-[15px] px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-700' : ' hover:bg-zinc-300 '} `}>{<Telescope size={20} />} <span>Explore</span></Link>

        <Link to={`/`} aria-label='Notifications' className={`cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-700' : ' hover:bg-zinc-300 '} `}>{<Bell size={20} />} <span>Notifications</span></Link>

        <div aria-label='Trending' className={`cursor-pointer inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-700' : ' hover:bg-zinc-300 '}  `}>{<TrendingUp size={20} />} <span>Trending</span></div>

        <div aria-label='Follow' className={`cursor-pointer  inline-flex rounded-full gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5  
       ${isDark ? 'hover:bg-zinc-700' : ' hover:bg-zinc-300 '}`}>{<UserPlus size={20} />} <span>Follow</span></div>

        <div aria-label='Find more' className={` cursor-pointer inline-flex rounded-full  gap-2 font-medium active:font-bold active:scale-95 text-[15px]  px-3 py-1.5   
      ${isDark ? 'hover:bg-zinc-700' : ' hover:bg-zinc-300 '} `}>{<CircleEllipsis size={20} />} <span>More</span></div>

        <Link to={`/post`} aria-label='Create post' className={`mt-2 cursor-pointer w-35 flex gap-2 font-bold active:scale-95 text-[15px] rounded-4xl justify-center items-center px-2 py-1
       ${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-zinc-900 text-white hover:bg-zinc-700'}`}>{<SquarePen size={20} />} Post </Link>

        <Tooltip content={`User info`}>
          <div className={`inline-flex items-center gap-x-1 cursor-pointer px-2 py-1   mt-5 rounded-full ${isDark ? 'hover:bg-zinc-700' : 'hover:bg-zinc-300'}`}>
            <img src={userLogo} alt='user Profile' className='size-6 rounded-full'></img>

            <div className='flex flex-col '>
              <span className=' font-medium  text-[10px] sm:text-[12px] '>Shahijahan Pedhar</span>
              <span className='font-sans text-[8px] md:text-[10px] text-gray-600'>@shahijahanQ</span>
            </div>

            <span className='ml-0.5'>
              <Ellipsis size={20} />
            </span>
          </div>
        </Tooltip>
      </div>
    </div>




  return (
    <div>
      {items}
    </div>
  )
}

export default MobileMenu