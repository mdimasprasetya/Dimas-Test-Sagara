import React from 'react'

function AboutUs() {
    return (
        <div className='flex flex-col md:flex-row px-4 py-8 md:py-16'>
            <div className='flex flex-col items-start mt-[250px] md:mt-[250px] ml-[20px] md:ml-[200px] mb-8 md:mb-0'>
                <div className="w-28 border-t-4 border-black p-4 rounded-sm mb-4">
                </div>
                <div>
                    <p className='font-semibold text-xl md:text-[25px]'>ABOUT US</p>
                </div>
            </div>
            <div className='w-full md:w-[921px] h-auto md:h-[337px] text-[#A51535] text-lg md:text-[24px] font-[600] md:mt-[100px] ml-[0] md:ml-[200px]'>
                <p className='text-lg md:text-[24px] mb-6'>SAGARA IT CERTIFICATION</p>
                <p className='text-xl md:text-[40px] text-black mb-6 leading-tight'>
    <span className='text-[#A51535] font-bold'>Join thousands </span> 
    of professionals who have elevated their skills and carved out success in the technology industry. 
    Start your journey to excellence with us today!
</p>

                <p className='text-lg md:text-[24px] text-[#9E9E9E]'>
                    Boost your career prospects in the digital era with industry-recognized information technology certifications from Sagara IT Certification.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;
