import React from 'react'
import { logo } from '../script/images'
import { Link } from 'react-router'
import { useAuth } from '@/context/AuthContext'

const NavBar = () => {
  const { session, signOut } = useAuth()
  return (
    <div className='bg-white h-20 p-4 flex items-center justify-between'>
      <Link to='/job-dashboard'>
        <div className='flex items-center'>
          <img src={logo} alt="" className='w-8 h-8 rounded-3xl' />
          <p className='font-bold'>JobSeeker</p>

        </div>
      </Link>
      <div className='flex space-x-6 font-semibold '>
        <Link to="/job-dashboard">
          <p>Jobs</p>
        </Link>
        <p>Trainings</p>
        <p>Blogs</p>
        <p>About Us</p>
        <p>Employer Section</p>
      </div>

      {/* session and authentication section */}
      {session ? (
        <div>
          <p>Hi, {session.user.email}!</p>
          <button onClick={signOut}>LogOut</button>
        </div>
      ) : (
        <div className='flex space-x-4'>
          <Link to='/login'>
            <p className='font-bold'>Log In</p>
          </Link>
          <Link to='/register'>
            <p className='font-bold'>Sign Up</p>
          </Link>
        </div>
      )
      }
    </div>
  )
}

export default NavBar