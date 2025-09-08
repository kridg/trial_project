import React, { useEffect, useState } from 'react'
import { logo } from '../script/images'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '@/context/AuthContext'
import supabase from '../../supabaseClient'

const NavBar = () => {
  const { session, signOut, setSession } = useAuth()
  const [role, setRole] = useState(null);
  const navigate=useNavigate()

  const logOutNav=async()=>{
    await signOut()
    navigate("/")
  }
  useEffect(() => {
    if (!session) {
      setRole(null)
      return
    }
    //   const useSession = async () => {
    //     if (session) {
    //       const { data: profile } = await supabase.from("profiles")
    //         .select("role").eq("id", session.user.id)
    //         .single()
    //       if (profile) {
    //   setRole(profile.role);
    // }
    //     }
    //   }
    const getRole = async () => {
      const { data, error } = await supabase.from("profiles")
        .select("role").eq("id", session.user.id)
        .single()

      if(error || !data){
        console.log(error)
        setRole(null)
      } else{
        setRole(data.role)
      }
      
    }
    getRole()
  }, [session])

  return (
    <div className='bg-black p-8 flex items-center justify-between text-white'>
      <Link to='/'>
        <div className='flex items-center'>
          <img src={logo} alt="" className='w-8 h-8 rounded-3xl' />
          <p className='font-bold'>JobSeeker</p>

        </div>
      </Link>
      <div className='flex space-x-6 font-semibold '>
        <p>Home</p>
        <Link to="/">
          <p>Jobs</p>
        </Link>
        <Link to='/training'>
        <p>Trainings</p>
        </Link>
        <Link to='/blogs'>
        <p>Blogs</p>
        </Link>
        
        {session && role === "employer" && <Link to='/job-dashboard'>Employer</Link>}

        {/* {!session && <Link to='/login'>Log In</Link>}
        {!session && <Link to='/register'>Sign Up</Link>} */}
      </div>

      {/* session and authentication section */}
      {session ? (
        <div>
          <p>Hi, {session.user.email}!</p>
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