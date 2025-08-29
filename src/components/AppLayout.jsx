import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div><Outlet/></div>
    </div>
  )
}

export default AppLayout