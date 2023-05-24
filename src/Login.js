import React from 'react'
import { RiLoginCircleFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='mt-20 mb-10'>
                <div className='flex max-lg:flex-col rounded-3xl justify-center bg-gray-50 w-[80%] container mx-auto'>
                    <div style={{ backgroundImage: `url('vector1.jpg')` }} className='flex flex-col rounded-l-3xl max-lg:rounded-3xl max-lg:p-5 max-lg:w-[100%] bg-cover bg-no-repeat justify-center items-center w-1/2'>
                        <h1 className='text-white text-3xl max-md:text-xl font-extrabold'>HQPencils - A Sketch Store</h1>
                        <p className='text-gray-200 tracking-widest max-md:text-xs py-2 text-sm'>HIGHLY DETAILED HANDMADE SKETCHES</p>
                    </div>
                    <div className='w-1/2 h-[75vh] max-lg:w-[100%] flex flex-col justify-center items-center'>
                        <div className='p-3 my-3 text-4xl text-gray-500 bg-slate-100 border-[1px] border-gray-300 rounded-full'>
                            <RiLoginCircleFill />
                        </div>
                        <h1 className='text-xl mb-5 font-semibold'>Hello Again!</h1>
                        <form className='flex flex-col gap-3 max-md:w-[80%] w-1/2'>
                            <input type='text' placeholder='Email' className='border-[1px] border-gray-300 py-2 px-3 rounded-lg' />
                            <input type='text' className='py-2 px-3 rounded-lg border-[1px] border-gray-300' placeholder='Password' />
                            <div className='flex text-sm justify-between'>
                                <span className='flex items-center gap-1'><input type='checkbox'/> Remember Me</span>
                                <span className='text-blue-600'>Recovery Password</span>
                            </div>
                            <button className='py-2 my-4 bg-blue-600 text-white rounded-lg' type='submit'>Login</button>
                        </form>
                        <div className='my-10'>
                            <p>Don't have an account yet? <NavLink to='/signup' className='text-blue-600 font-semibold'>Sign up</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login