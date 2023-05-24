import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className='mt-20 mb-10'>
                <div className='flex max-lg:flex-col rounded-3xl justify-center bg-gray-50 w-[80%] container mx-auto'>
                    <div style={{ backgroundImage: `url('vector1.jpg')` }} className='flex flex-col rounded-l-3xl max-lg:rounded-3xl max-lg:p-5 max-lg:w-[100%] bg-cover bg-no-repeat justify-center items-center w-1/2'>
                        <h1 className='text-white max-md:text-xl text-3xl font-extrabold'>HQPencils - A Sketch Store</h1>
                        <p className='text-gray-200 max-md:text-xs tracking-widest py-2 text-sm'>HIGHLY DETAILED HANDMADE SKETCHES</p>
                    </div>
                    <div className='w-1/2 max-lg:w-[100%] h-[80vh] flex flex-col justify-center items-center'>
                        <h1 className='text-xl mb-5 font-semibold'>Hello</h1>
                        <form className='flex flex-col gap-3 max-md:w-[80%] w-1/2'>
                            <input type='text' placeholder='Name' className='border-[1px] border-gray-300 py-2 px-3 rounded-lg' />
                            <input type='text' placeholder='Email' className='border-[1px] border-gray-300 py-2 px-3 rounded-lg' />
                            <input type='text' placeholder='Number' className='border-[1px] border-gray-300 py-2 px-3 rounded-lg' />
                            <input type='password' placeholder='Password' className='border-[1px] border-gray-300 py-2 px-3 rounded-lg' />
                            <input type='password' className='py-2 px-3 rounded-lg border-[1px] border-gray-300' placeholder='Confirm password' />
                                <span className='flex items-center text-sm gap-2'><input type='checkbox'/> Accept our terms and conditions</span>
                            <button className='py-2 my-4 bg-blue-600 text-white rounded-lg' type='submit'>Sign up</button>
                        </form>
                        <div>
                            <p>Already have an account? <NavLink to='/login' className='text-blue-600 font-semibold'>Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp