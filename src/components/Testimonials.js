import React, { useState } from 'react'
import Card from './Card'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Testimonials = (props) => {
  let reviews = props.reviews;
  const[index, setIndex]=useState(0);
  function leftShiftHandler(){
     if(index-1<0){
      setIndex((reviews).length - 1)
     }
     else{
      setIndex(index-1);
     }
  }
  function rightShiftHandler(){
    if(index+1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  }
  function surpriseHandler(){
    let randomIndex= Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="flex justify-center items-center w-[85vw] md:w-[700px] bg-white mt-10 p-10
    transition-all duration-700 flex-col shadow-md">
      <Card reviews={reviews[index]}></Card>


      <div className='flex items-center justify-center text-purple-400 font-bold gap-[12px] mt-[2rem]'>
        <button onClick={leftShiftHandler} className="cursor-pointer hover:text-purple-500">
          <AiOutlineLeft size="1.5rem" />
        </button>
        <button onClick={rightShiftHandler} className="cursor-pointer hover:text-purple-500 rounded-sm">
          <AiOutlineRight size="1.5rem" />
        </button>


      </div>

      <div className="flex justify-center mt-3">
        <button onClick={surpriseHandler} className="bg-purple-400 hover:bg-purple-600 transition-all duration-200 rounded-sm py-1 px-5">Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonials