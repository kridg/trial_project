import React from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { LoginSchema } from '../../schema/LoginSchema';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(LoginSchema)
        });
    const onSubmit = data => console.log(data);
    return (
        <div className='flex items-center h-screen justify-center bg-gray-200'>
            <div className='bg-white p-6 rounded-xl w-[300px] flex flex-col items-center space-y-4'>
                <p className='font-bold'>Log in</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 items-center'>
                    <div className='space-y-2'>
                        <div>
                            <label className='font-semibold' htmlFor="">Email</label><br />
                            <input {...register("email")} type="text" className='border rounded p-1' />
                        </div>
                        <div>
                            <label className='font-semibold' htmlFor="">Password</label><br />
                            <input {...register("password")} type="password" className='border rounded p-1' />
                        </div>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <button type='submit' className='bg-black text-white p-0.5 rounded-xl font-semibold w-20'>Log in</button>
                    </div>
                </form>

                <div className='flex items-center mt-2'>
                    <p className='text-xs'>Don't have an account?</p>
                    <Link to="/register">
                        <p className='text-green-400 font-semibold'>SignUp</p>
                    </Link>
                </div>

                <div>
                    <Link to="/forgot-pass">
                        <p className='text-red-500 text-xs'>Forgot password?</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Login