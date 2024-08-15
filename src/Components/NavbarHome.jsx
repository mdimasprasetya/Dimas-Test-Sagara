// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const links = [
    { text: "IT CERTIFICATION", href: "#ItCertification" },
    { text: "CAREERS", href: "#Carrers" },
    { text: "FAQ", href: "#FAQ" }
];

function NavbarHome() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigasi ke halaman dashboard
    navigate('/dashboard');
  };

  return (
    <nav className='w-full flex justify-center h-[80px] md:h-[100px]'>
        <div className='w-full bg-white flex items-center justify-between px-6 md:px-24'>
            <div className='text-black text-[20px]'>
                <img className='w-32 md:w-40' src="/logo.png" alt="Logo" />
            </div>
            <div className='hidden md:flex'>
                {links.map((link, index) => (
                    <a key={index} href={link.href} className='ml-4 md:ml-12 hover:font-bold'>
                        {link.text}
                    </a>
                ))}
            </div>
            <button 
              type="submit" 
              className="btn w-[80px] md:w-[100px] bg-[#A51535] text-white ml-auto"
              onClick={handleSignIn}
            >
                Admin
            </button>
        </div>
    </nav>
  )
}

export default NavbarHome;
