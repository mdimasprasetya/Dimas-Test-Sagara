// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-white  flex justify-between ml-64'>
        {/* <div className='flex items-center text-xl'>
          <FaBars className='text-white me-4 cursor pointer'/>
          <span className='text-white font-semibold'>E-Commerce</span>
        </div>
        <div className='flex items-center gap-x-5'>
          <div className='relative md:w-65'>
            <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
              <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
            </span>
            <input type="text" className='w-full px-2 py-1 pl-12 rounded shadow outline-none hidden md:block' />
          </div>
        </div> */}
        
        <div className="avatar ml-auto flex items-center">
          <div className='flex flex-col text-[#212B36] mr-4 items-center justify-center content-center text-right'>
            <p className='font-semibold'>Thomas Anree</p>
            <p className='text-sm'>Admin</p>
          </div>
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 mr-20">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
