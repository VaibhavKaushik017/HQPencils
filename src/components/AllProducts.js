import React from 'react'
import { AiOutlineLike, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FeaturedItems } from '../Data'

const AllProducts = () => {
    return (
        <>
            <section className='w-[100%] py-10 mt-10'>
                <div className='w-[90%] container mx-auto'>
                    <div className='flex gap-[67px] flex-wrap justify-center mb-10'>
                        {
                            FeaturedItems.map((featuredM) => {
                                return (
                                    <div className='border-[1px] hover:shadow-lg p-3 rounded-3xl border-gray-300'>
                                        <div className='bg-gray-100 rounded-3xl p-3'>
                                            <img className='h-[200px] w-[200px]' src={featuredM.Image} />
                                        </div>
                                        <p className='text-xs pt-3 text-green-500'>{featuredM.Availability}</p>
                                        <h1 className='font-semibold'>{featuredM.Name}</h1>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <div className='flex text-yellow-400'>
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiOutlineStar />
                                                </div>
                                                <h1 className='font-bold'>{featuredM.Price}</h1>
                                            </div>
                                            <div className='cursor-pointer bg-red-100 rounded-3xl p-2 border-[1px] border-red-500'>
                                                <AiOutlineLike className='text-xl text-red-500' /><p className='text-xs text-center'>{featuredM.Likes}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default AllProducts