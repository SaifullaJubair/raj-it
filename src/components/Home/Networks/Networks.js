import React from 'react';
import { BsCheckLg, BsHeart, BsShieldCheck } from 'react-icons/bs';
import img1 from '../../../assets/Image_website/logo.png'
import Carousel from 'react-multi-carousel';
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
         <div className='max-w-[1100px] mx-auto my-8'>
            <h1 className='text-3xl font-semibold'>The Midland Networks difference. <span className='text-gray-400'> Thats right!</span></h1>
         </div>

         <div className='ml-4'>
            <Carousel responsive={responsive}>
               <div className=' font-semibold  p-6  bg-white w-64 rounded-xl'>
                  <BsShieldCheck className='text-4xl mt-2 text-blue-500 font-bold'></BsShieldCheck>
                  <p className='pt-4 '>Quality assurance.</p>
                  <span className='text-blue-500'>Only The best for you.</span>
               </div>

               <div className=' font-semibold  p-6  bg-white w-64 rounded-xl'>
                  <BsCheckLg className='text-4xl mt-2 text-red-600 font-bold'></BsCheckLg>
                  <p className='pt-4 pb-2'>Price match</p>
                  <span className='text-pink-600 '>Quality great deals promise </span>
               </div>

               <div className=' font-semibold  p-6  bg-white w-64 rounded-xl'>
                  <BsHeart className='text-4xl mt-2 text-blue-500 font-bold'></BsHeart>
                  <p className='pt-4 pb-2'>Customer service.</p>
                  <span className='text-blue-500'>More than just shopping.</span>
               </div>

               <div className=' font-semibold  p-4  bg-white w-64 rounded-xl'>
                  <img src={img1} alt="" className='w-20' />
                  <p className='pt-4 pb-2 text-orange-400'>Installation</p>
                  <p className=''>and exceed the industry standards.</p>
               </div>
               <div className=' font-semibold  p-6  bg-white w-64 rounded-xl'>
                  <BsCheckLg className='text-4xl mt-2 text-red-600 font-bold'></BsCheckLg>
                  <p className='pt-4 pb-2'>Price match</p>
                  <span className='text-pink-600 '>Quality great deals promise </span>
               </div>

               <div className=' font-semibold  p-6  bg-white w-64 rounded-xl'>
                  <BsHeart className='text-4xl mt-2 text-blue-500 font-bold'></BsHeart>
                  <p className='pt-4 pb-2'>Customer service.</p>
                  <span className='text-blue-500'>More than just shopping.</span>
               </div>

            </Carousel>
         </div>

      </div>
   );
};

export default Networks;