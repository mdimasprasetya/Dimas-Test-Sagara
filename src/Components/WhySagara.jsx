/* eslint-disable no-unused-vars */
import React from 'react'

function WhySagara () {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center px-4 md:px-8 mt-24 md:mt-[200px]'>
      <div className='w-full md:w-[570px]'>
        <div className='text-[#A51535] text-3xl md:text-5xl font-bold text-center md:text-left'>
          <p>WHY SAGARA</p>
          <p>IT CERTIFICATION?</p>
        </div>
        <div className='mt-8'>
          <div className='flex items-start mb-6'>
            <img className='w-12 h-12 md:w-[60px] md:h-[60px]' src="Global.png" alt="Global Credibility Boost" />
            <div className='ml-4 md:ml-8'>
              <p className='text-[#A51535] font-bold text-lg md:text-xl'>Global Credibility Boost</p>
              <p className='text-sm md:text-base'>Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.</p>
            </div>
          </div>
          <div className='flex items-start mb-6'>
            <img className='w-12 h-12 md:w-[60px] md:h-[60px]' src="Empower.png" alt="Career Empowerment" />
            <div className='ml-4 md:ml-8'>
              <p className='text-[#A51535] font-bold text-lg md:text-xl'>Career Empowerment</p>
              <p className='text-sm md:text-base'>Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry.</p>
            </div>
          </div>
          <div className='flex items-start mb-6'>
            <img className='w-12 h-12 md:w-[60px] md:h-[60px]' src="Expertise.png" alt="Showcase Expertise" />
            <div className='ml-4 md:ml-8'>
              <p className='text-[#A51535] font-bold text-lg md:text-xl'>Showcase Expertise</p>
              <p className='text-sm md:text-base'>Showcase your expertise and validate your skills with globally recognized certifications that employers trust.</p>
            </div>
          </div>
        </div>
      </div>
      <img className='w-1/2 md:w-[32%] mt-8 md:mt-0' src="Talk.png" alt="Talk" />
    </div>
  )
} 

export default WhySagara;
