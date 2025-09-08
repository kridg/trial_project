import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import supabase from '../../../supabaseClient'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router'

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  gmail: yup.string().email("Invalid email format").required("Gmail is required"),
  role:yup.string().required("This field is required!")
})

const Register = () => {
  const [errMsg, setErrMsg] = useState(null)
  const [buffer,setBuffer]=useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (userData) => {
    setBuffer(true)
    setErrMsg(null)
    try {
      const { gmail, name, password, role } = userData
      const payload = {
        email: gmail,
        password,
        options: {
          data: {
            name,
          }
        }
      }

      const { data, error } = await supabase.auth.signUp(payload)
      

      if(error){
        setErrMsg(error.message)
      }

      toast.success("Registered Successfully!") 

      console.log(data)

      const user=data.user
      await supabase.from("profiles").insert([
        {
          id:user.id,
          role:role
        }
      ])

    } catch (error) {
      console.log(error)
      toast.error("Error!")
    } finally{
      setBuffer(false)
    }
    // console.log(userData)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl w-[320px] shadow-md">
        <h2 className="font-bold text-lg text-center mb-4">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="Enter Full Name"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
          </div>

          <div>
            <label htmlFor="cpassword" className="text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              id="cpassword"
              type="password"
              {...register("cpassword")}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-500 text-xs mt-1">{errors.cpassword?.message}</p>
          </div>

          <div>
            <label htmlFor="gmail" className="text-sm font-medium text-gray-600">
              Gmail
            </label>
            <input
              id="gmail"
              type="email"
              {...register("gmail")}
              placeholder="Enter Gmail"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-red-500 text-xs mt-1">{errors.gmail?.message}</p>
          </div>
          <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-600">
          Role
        </label>
        <select id="role"className="w-full p-2 mb-3 border rounded-lg" {...register("role")}>
          <option value="">Select One</option>
          <option value="employer">Employer</option>
          <option value="jobseeker">Job Seeker</option>
        </select>
          <p className='text-sm text-red-500'>{errMsg}</p>
          <button type="submit" disabled={buffer}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {buffer?"Registering...":"Register"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register