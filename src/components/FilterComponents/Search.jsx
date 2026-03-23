import { Search } from 'lucide-react';


const SearchButton = ({ onSearch }) => {
  return (
    <div className='w-full h-12 p-0  py-1 flex lg:justify-center items-center hover:outline-blue-600 gap-2 md:gap-0 rounded-[10px] md:px-3 lg:px-6 md:rounded-full relative border-2 '>
      <span className='absolute left-1 sm:left-2 top-3 md:size-8 rounded '>{<Search size={20} strokeWidth={1.6} absoluteStrokeWidth />} </span>
      <input onChange={(e) => onSearch(e.target.value)} type='text' name='search' placeholder='Type to search..'
        className='text-[12px]  sm:text-[14px] md:text-xl absolute right-1 md:left-11 outline-0 top-0 w-[80%] h-full sm:px-1 lg:px-0 rounded ' />
    </div>
  )
}

export default SearchButton
