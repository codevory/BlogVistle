import { useTheme } from "../Theme/ThemeContext"

const Sortpost = ({ onSort }) => {
  const { isDark } = useTheme()
  return (
    <div className=''>
      <select id="sort-options" className={`h-10 md:px-2 py-1 outline-0  rounded-[20px] px-1 md:rounded-3xl font-semibold border-2 overflow-hidden text-[13px] sm:text-[15px] 
     ${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-zinc-800 text-white hover:bg-zinc-900'}`}
        defaultValue="newest" onChange={(e) => onSort(e.target.value)
        }>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  )
}
export default Sortpost