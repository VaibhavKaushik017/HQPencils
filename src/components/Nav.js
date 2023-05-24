import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const Nav = () => {
    return (
        <>
            <div className='fixed top-0 w-[100%] bg-white'>
                <div className='flex items-center py-4 justify-between w-[95%] container mx-auto'>
                    <div>
                        <NavLink to='/'>
                            <h1 className='font-bold text-xl'>HQ<span className='text-red-600'>PENCILS</span></h1>
                        </NavLink>
                    </div>
                    <div>
                        <ul className='flex items-center gap-10 max-lg:hidden text-sm font-semibold'>
                            <NavLink to='/'><li className='hover:text-red-600' >HOME</li></NavLink>
                            <NavLink to='/products'><li className='hover:text-red-600'>PRODUCTS</li></NavLink>
                            <NavLink to='/contact'><li className='hover:text-red-600'>CONTACT</li></NavLink>
                            {/* <p className='text-gray-500 font-normal'>Welcome, Vaibhav</p>
                            <button class="logout-btn">LOG OUT
                            </button> */}
                            <button class="logout-btn"><NavLink to='/login'>LOGIN</NavLink>
                            </button>
                            <NavLink to='/cart'><li className='text-lg'><FiShoppingCart /></li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav