import React from 'react';

function Footer() {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="flex flex-wrap justify-between px-8 md:px-28 py-10 md:py-20">
        {/* Logo and Description */}
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <img src="logo2.png" alt="Logo" />
          <p className="text-white mt-4">
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
          <div className="flex mt-4 space-x-4">
            <img src="fb.png" alt="Facebook" />
            <img src="tw.png" alt="Twitter" />
            <img src="ln.png" alt="LinkedIn" />
            <img src="ig.png" alt="Instagram" />
          </div>
        </div>

        {/* Pages */}
        <div className="text-white w-full md:w-auto mb-8 md:mb-0">
          <p className="text-2xl font-bold">Pages</p>
          <ul className="mt-4 space-y-2">
            <li>IT Certification</li>
            <li>Careers</li>
            <li>FAQ</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        {/* Careers */}
        <div className="text-white w-full md:w-auto mb-8 md:mb-0">
          <p className="text-2xl font-bold">Careers</p>
          <ul className="mt-4 space-y-2">
            <li>Front End Developer</li>
            <li>Back End Developer</li>
            <li>Quality Assurance</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-white w-full md:w-auto">
          <p className="text-2xl font-bold">Contact</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <img src="tele.png" alt="Phone" />
              <p>Front End Developer</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="email.png" alt="Email" />
              <p>consult@sagara.asia</p>
            </div>
            <div className="flex items-center space-x-2">
              <img className="w-[30px] h-[30px]" src="loca.png" alt="Location" />
              <p>South Jakarta and Bandung, Indonesia.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center py-4">
        <p>Copyright © 2024 PT. Sagara Asia Teknologi</p>
      </div>
    </div>
  );
}

export default Footer;