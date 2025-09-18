import React, { useEffect, useState } from 'react'
import { logo } from '../script/images'
import { Link, useNavigate } from 'react-router'
import supabase from '../../supabaseClient'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/redux/userSlice'

const NavBar = () => {
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.user.value)
  const navigate=useNavigate()


  const logOutNav=async()=>{
    try{
      await supabase.auth.signOut()
    } catch(err){
      console.log('signout error',err)
    }

    dispatch(logout())
    navigate("/")
  }

  return (
    <div className='bg-black p-8 flex items-center justify-between text-white'>
      <Link to='/'>
        <div className='flex items-center'>
          <img src={logo} alt="" className='w-8 h-8 rounded-3xl' />
          <p className='font-bold'>JobSeeker</p>

        </div>
      </Link>

      <div className='flex space-x-6 font-semibold '>
        <Link to="/"><p>Jobs</p></Link>
        <Link to='/training'><p>Trainings</p></Link>
        <Link to='/blogs'><p>Blogs</p></Link>
        {user?.email && <Link to="/job-dashboard">Employer</Link>}
      </div>

      {user?.email ? (
        <div>
          <p>Hi, {user.email}!</p>
          <button onClick={logOutNav} >LogOut</button>
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