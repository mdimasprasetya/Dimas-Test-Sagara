import React from 'react';

function Empower() {
  return (
    <div className="p-4">
      {/* Title */}
      <div className="flex justify-center items-center mt-20 md:mt-40">
        <div className="w-20 border-t-4 border-[#A51535] p-4 rounded-sm"></div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="font-medium text-2xl md:text-3xl text-[#A51535] text-center">
          Empower Yourself with
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="font-bold text-2xl md:text-3xl text-[#A51535] text-center">
          Our Certification
        </p>
      </div>
      
      {/* Buttons */}
      <div className="flex flex-wrap justify-center mt-10 md:mt-20">
        <button
          type="submit"
          className="btn w-full md:w-[284px] bg-[#A51535] text-white mx-2 my-2 md:mx-5"
        >
          FRONT END DEVELOPER
        </button>
        <button
          type="submit"
          className="btn w-full md:w-[284px] bg-white border border-gray-300 text-black mx-2 my-2 md:mx-5"
        >
          BACK END DEVELOPER
        </button>
        <button
          type="submit"
          className="btn w-full md:w-[284px] bg-white border border-gray-300 text-black mx-2 my-2 md:mx-5"
        >
          QUALITY SERVICE
        </button>
        <button
          type="submit"
          className="btn w-full md:w-[284px] bg-white border border-gray-300 text-black mx-2 my-2 md:mx-5"
        >
          UI/UX DESIGN
        </button>
      </div>

      {/* Content */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-auto flex justify-center">
          <img className="w-full md:w-[650px] mr-0 md:mr-10" src="Coding.png" alt="" />
        </div>
        <div>
          <p className="mt-12 text-3xl md:text-5xl font-bold text-[#A51535] text-center md:text-left">
            Front End Certification
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="mt-6 md:mt-24 ml-2 flex justify-center">
              <div>
                <img className="ml-3" src="Kotak.png" alt="" />
                <img className="mt-16" src="Dua.png" alt="" />
                <img className="ml-3 mt-16" src="User3.png" alt="" />
              </div>
            </div>
            <div className="mt-6 md:mt-16 ml-0 md:ml-14 text-lg text-center md:text-left">
              <p>This program equips you with the essential skills and</p>
              <p>knowledge to create visually appealing websites or</p>
              <p>applications.</p>
              <p className="mt-6">Evaluates your proficiency in frontend programming.</p>
              <p> languages and other relevant frontend technologies</p>
              <p className="mt-6">Gain recognition as a qualified frontend developer, enhance</p>
              <p>your career prospects, and open doors to exciting job</p>
              <p>opportunities.</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-10 md:mt-20">
            <button
              type="submit"
              className="btn w-full md:w-[284px] bg-[#A51535] text-white mx-5"
            >
              Get Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empower;