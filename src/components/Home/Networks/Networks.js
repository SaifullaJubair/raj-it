import React from 'react';
import { WiNightCloudyGusts } from "react-icons/wi";
import { BsTrophy } from "react-icons/bs";
import { FaHeart, FaRegChartBar, FaUser } from 'react-icons/fa';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const Networks = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
         slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
      }
   };


   return (
      <div className='max-w-[1100px] mx-auto my-16'>
         <div className='max-w-[1100px] mx-auto my-8'> <h1 className='text-3xl font-semibold'>Award winning service. <span className='text-gray-400'>  National recognition.</span></h1></div>



         <div className='ml-4'>
            <Carousel responsive={responsive}>
               <div className='text-lg font-semibold my-8 p-6 bg-white w-64 rounded-xl'>
                  <WiNightCloudyGusts className='text-4xl mt-2 text-blue-500 font-semibold'></WiNightCloudyGusts>
                  <p className='pt-4 pb-2'>2018</p>
                  <p className='text-blue-500'>Cloud Solutions</p>
               </div>
               <div className='text-lg font-semibold my-8 p-6  bg-white w-64 rounded-xl'>
                  <BsTrophy className='text-4xl mt-2 text-red-600 font-semibold'></BsTrophy>
                  <p className='pt-4 pb-2'>2018</p>
                  <p className='text-red-600 '>Cloud Solutions</p>
               </div>

               <div className='text-lg font-semibold my-8 p-6  bg-white w-64 rounded-xl'>
                  <div className='flex items-center '>
                     <FaUser className='text-4xl mt-2 text-blue-500 font-semibold'></FaUser> <FaHeart className='text-blue-500 -ml-1'></FaHeart>
                  </div>
                  <p className='pt-4 pb-2'>2018</p>
                  <p className='text-blue-500'>Cloud Solutions</p>
               </div>
               <div className='text-lg font-semibold my-8 p-6  bg-white w-64 rounded-xl'>
                  <FaRegChartBar className='text-4xl mt-2 text-orange-400 font-semibold'></FaRegChartBar>
                  <p className='pt-4 pb-2 text-orange-400'>2017</p>
                  <p className=''>Cloud Solutions</p>
               </div>
               <div className='text-lg font-semibold my-8 p-6  bg-white w-64 rounded-xl'>
                  <div className='flex items-center '>
                     <FaUser className='text-4xl mt-2 text-blue-500 font-semibold'></FaUser> <FaHeart className='text-blue-500 -ml-1'></FaHeart>
                  </div>
                  <p className='pt-4 pb-2'>2018</p>
                  <p className='text-blue-500'>Cloud Solutions</p>
               </div>
               <div className='text-lg font-semibold my-8 p-6  bg-white w-64 rounded-xl'>
                  <div className='flex items-center '>
                     <FaUser className='text-4xl mt-2 text-blue-500 font-semibold'></FaUser> <FaHeart className='text-blue-500 -ml-1'></FaHeart>
                  </div>
                  <p className='pt-4 pb-2'>2018</p>
                  <p className='text-blue-500'>Cloud Solutions</p>
               </div>
            </Carousel>
         </div>
      </div>
   );
};

export default Networks;