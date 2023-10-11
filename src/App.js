import React, { useState } from "react";

import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {

  // const[reviews, setReviews]=useState(reviews);
  
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    
    <div className="text-center">
      <h1 className="font-bold text-2xl">Our Testimonials</h1>
      <div className=" bg-purple-400 h-[4px] w-[1/5] mt-1"></div>
    </div>

    <div>
      <Testimonials reviews={reviews}/>
    </div>
  </div>;
};

export default App;
