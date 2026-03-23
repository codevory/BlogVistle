import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' flex justify-between items-center p-1 md:px-4 md:py-2 lg:px-8 lg:py-4  w-full  '>
        <div className='flex flex-col gap-3'>
            <h2 className='font-medium text-xl'>Need Help</h2>
            <div className='flex flex-col justify-between gap-1'>
              <Link to='/contact'>Contact</Link>
              <Link to='/contact'>About us</Link>
              <Link to='/contact'>Grievence cell</Link>
              <Link to='/contact'>Article submission</Link>
             </div>
      </div>

      <div className='flex flex-col gap-3'>
            <h2 className='font-medium text-xl'>Media</h2>
            <div className='flex flex-col justify-between gap-1'>
              <Link to='/contact'>Contact</Link>
              <Link to='/contact'>About us</Link>
              <Link to='/contact'>Grievence cell</Link>
              <Link to='/contact'>Article submission</Link>
             </div>
      </div>

      <div className='flex flex-col gap-3'>
            <h2 className='font-medium text-xl'>Privacy</h2>
            <div className='flex flex-col justify-between gap-1'>
              <Link to='/contact'>Contact</Link>
              <Link to='/contact'>About us</Link>
              <Link to='/contact'>Grievence cell</Link>
              <Link to='/contact'>Article submission</Link>
             </div>
      </div>
   
    </div>
  )
}

export default Footer
