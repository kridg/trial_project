import React from 'react'
import { logo } from '../script/images'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className='bg-white h-20 p-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <img src={logo} alt="" className='w-8 h-8 rounded-3xl'/>
        <p className='font-bold'>JobSeeker</p>
      </div>
      <div className='flex space-x-6 font-semibold '>
        <Link to="/job-dashboard">
        <p>Jobs</p>
        </Link>
        <p>Trainings</p>
        <p>Blogs</p>
        <p>About Us</p>
        <p>Employer Section</p>
      </div>
    </div>
  )
}

export default NavBar