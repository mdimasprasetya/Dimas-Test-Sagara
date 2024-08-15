import React from 'react';

function HowSagara() {
  return (
    <div className='px-4'>
      {/* Title */}
      <div className='flex justify-center items-center mt-40'>
        <div className="w-20 border-t-4 border-[#A51535] p-4 rounded-sm"></div>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <p className='font-medium text-3xl text-[#A51535]'>How Sagara</p>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <p className='font-bold text-3xl text-[#A51535]'>IT-Certification Works</p>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row justify-center mt-36 px-20'>
        <div className='flex flex-col items-center md:items-start md:flex-row mx-auto'>
          <img className='w-3/4 md:w-3/4 ' src="Laptop.png" alt="Laptop" />
          <img className='w-1/4 md:w-3/4 ml-0 md:ml-32 mt-5 md:mt-0' src="Lima.png" alt="Lima" />

        </div>
        <div className='mt-10 md:mt-0 md:ml-8'>
          <div className='ml-2 mb-5'>
            <p className='text-2xl font-bold'>
              <span className='text-[#A51535] mr-3'>#1</span>Register Account
            </p>
            <p className='text-[#9E9E9E]'>
              Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.
            </p>
          </div>
          <div className='ml-2 mb-5'>
            <p className='text-2xl font-bold'>
              <span className='text-[#A51535] mr-3'>#2</span>Select the Type
            </p>
            <p className='text-[#9E9E9E]'>
              Choose from a variety of IT certification options tailored to your career goals and interests. Select the certification that aligns with your expertise.
            </p>
          </div>
          <div className='ml-2 mb-5'>
            <p className='text-2xl font-bold'>
              <span className='text-[#A51535] mr-3'>#3</span>Register and Pay
            </p>
            <p className='text-[#9E9E9E]'>
              Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.
            </p>
          </div>
          <div className='ml-2 mb-5'>
            <p className='text-2xl font-bold'>
              <span className='text-[#A51535] mr-3'>#4</span>Take Test
            </p>
            <p className='text-[#9E9E9E]'>
              Prepare for your certification exam and schedule a convenient time to take the test online.
            </p>
          </div>
          <div className='ml-2 mb-5'>
            <p className='text-2xl font-bold'>
              <span className='text-[#A51535] mr-3'>#5</span>Get Certificate
            </p>
            <p className='text-[#9E9E9E]'>
              Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowSagara;