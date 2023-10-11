import React, { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
  
  let review = props.reviews;

  return (
    <div className="flex flex-col md:relative">
      <div className='absolute top-[-7rem] z-[10]'>
        <img className="z-[25] aspect-square rounded-full w-[140px] h-[140px] "
         src={review.image} width="100px"></img>

         <div className="absolute w-[140px] h-[140px] rounded-full z-[-20] bg-purple-400 top-[-6px] left-[10px]"></div>
      </div>

      <div className='text-center'>
        <p className='font-bold text-larger mt-4'> {review.name}</p>
        <p className="uppercase text-purple-300 top-10">{review.job}</p>
      </div>

      <div className='top-[2rem]'>
        <FaQuoteLeft className=" mt-3 text-purple-500 text-center mx-auto top-20" />

        <div className='text-center mt-4 text-gray-500'>
          {review.text}
        </div>
        
        <FaQuoteRight className=" mt-4 text-purple-500 text-center mx-auto top-[20px]" />
      </div>

      
    </div>
  )
}

export default Card