import React from 'react'

function Banner () {
  return (
    <div className="h-full bg-cover bg-center" 
      style={{ backgroundImage: `url('/banner.png')` }}
    >
        <div className='ml-4 sm:ml-10 md:ml-[150px] lg:ml-[220px] pt-10 sm:pt-20 md:pt-[130px]'>
            <p className='font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                Live <span className='font-extrabold'>Your Best</span> Life
            </p>
            <p className='font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                Using <span className='font-extrabold'>Your Strengths</span>
            </p>
            <div className='mt-6 sm:mt-8 md:mt-10'>
                <p className='text-white text-sm sm:text-base md:text-lg lg:text-[18px]'>
                    Meet some of the people who have completed the Sagara Technology
                </p>
                <p className='text-white text-sm sm:text-base md:text-lg lg:text-[18px]'>
                    and use their results to maximize their potential at work and 
                </p>
                <p className='text-white text-sm sm:text-base md:text-lg lg:text-[18px]'>
                    everywhere else.
                </p>
            </div>
            <div>
                <button className="btn w-full sm:w-[200px] md:w-[250px] lg:w-[284px] h-12 sm:h-14 md:h-16 lg:h-[57px] bg-[#A51535] text-white mt-6 sm:mt-8 md:mt-10">
                    Get Certification
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner;
