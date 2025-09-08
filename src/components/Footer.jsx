import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black text-white p-14 flex justify-between font-bold'>
      <div>
        <p>Find your dream job with us and connect to various companies in your field!</p>
      </div>
      <div className='space-y-2'>
        <Link to='/about-us'>
        <p>About Us</p>
        </Link>
        <p>Our team</p>
      </div>
      <div>
        <p>Our Location</p>
      </div>
    </div>
  )
}

export default Footer