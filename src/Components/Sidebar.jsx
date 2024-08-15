// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      {/* gambar sagara */}
      <div className="w-64 bg-[#1C1C1C] fixed h-full">
        <div className="w-[178px] h-[64px] my-10 mx-4">
          <img src="logo2.png" alt="" />
        </div>
        {/* Menu */}
        <p href="" className="pl-6 text-[#9E9E9E] ">
          Menu
        </p>
        {/* Konten Sidebar */}
        <ul className="mt-2 text-white font-bold">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${
                isActive ? "bg-red-900" : ""
              } block mx-4 mb-2 rounded hover:shadow hover:bg-red-900`
            }
          >
            <div className="px-3 hover:px-5 transition-all duration-300">
              <AiOutlineAppstore className="mb-5 inline-block w-6 h-6 mr-2 my-4" />
              Dashboard
            </div>
          </NavLink>
          <NavLink
            to="/student"
            className={({ isActive }) =>
              `${
                isActive ? "bg-red-900" : ""
              } block mx-4 mb-2 rounded hover:shadow hover:bg-red-900`
            }
          >
            <div
              href=""
              className="px-3 hover:px-5 transition-all duration-300"
            >
              <PiStudent className="mb-5 inline-block w-6 h-6 mr-2 my-4" />
              Student
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
