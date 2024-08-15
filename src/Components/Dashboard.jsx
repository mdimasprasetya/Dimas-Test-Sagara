// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export const Dashboard = () => {
  return (
    <div className='w-full bg-[#F4F4F4]'>
        <Sidebar/>
        <Navbar/>
        <div className='mr-14'>
            <div className='flex ml-80 mt-10'>
                <img src="calender.svg" alt="" />
                <img className='ml-auto mr-6' src="daily.svg" alt="" />
            </div>
            <div className='flex ml-80 mt-10 justify-between mr-6'>
                <img src="totaluser.svg" alt="" />
                <img src="totaluser2.svg" alt="" />
                <img src="average.svg" alt="" />
            </div>
            <div className='flex ml-80 mt-10 justify-between mb-10 row-span-2 mr-6'>
                <img className='flex-grow' src="chart.svg" alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Dashboard;
