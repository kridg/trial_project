import React from 'react'

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className='bg-white p-6 rounded-xl w-[300px] flex flex-col items-center space-y-4'>
        <h2 className="font-bold">Registration</h2> 
        <form className="flex flex-col space-y-2 items-center">

        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Student Name"
          className="w-full p-2 mb-3 border rounded-lg"
        />
        
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-600">
          Confirm Password
        </label>
        <input
          id="cpassword"
          type="password"
          name="cpassword"
          className="w-full p-2 mb-3 border rounded-lg"
        />

        <label htmlFor="gmail" className="block mb-2 text-sm font-medium text-gray-600">
          Gmail
        </label>
        <input
          id="gmail"
          type="email"
          name="gmail"
          placeholder="Enter Gmail"
          className="w-full p-2 mb-3 border rounded-lg"
        />        
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}

export default Register