import React, { useState } from 'react'
import { useTheme } from '../Theme/ThemeContext';

const Categorysorting = ({ onSort }) => {
   const { isDark } = useTheme()
   return (
      <div>
         <select className={`h-10 md:px-2 py-1  outline-0 rounded-[20px] px-1 md:rounded-3xl font-semibold border-2 overflow-hidden text-[13px] sm:text-[15px] 
     ${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-zinc-800 text-white hover:bg-zinc-900'}`} onChange={(e) => {
               if (e.target.value == 'null') return 0;
               onSort(e.target.value)
            }}>
            <option value={'null'}>Select</option>
            <option value={"Guidance"}>Guidance</option>
            <option value={"Education"}>Education</option>
            <option value={"Language"}>Language</option>
            <option value={"Technology"}>Technology</option>

         </select>

      </div>
   )
}

export default Categorysorting
