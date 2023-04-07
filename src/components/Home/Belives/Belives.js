import React from 'react';
import img1 from '../../../assets/Image_website/img-23.jpg'
import img2 from '../../../assets/Image_website/img-30.jpg'
import img3 from '../../../assets/Image_website/img-31.jpg'
const Belives = () => {
   return (
      <div className='max-w-[1100px] mx-auto my-16'>
         <h1 className='text-3xl font-semibold my-8'>Our believes.  <span className='text-gray-400'> The way we do business.</span></h1>
         <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  grid-rows-2 gap-6  '>

            <div className=' bg-white rounded-xl lg:col-span-2 md:col-span-2 col-span-1'>
               <div className=' flex md:flex-row lg:flex-row flex-col-reverse items-center justify-end '>
                  <div className='lg:w-1/2 md:w-1/2 w-full text-center font-semibold px-2 my-16 '>
                     <p className='text-blue-500 text-lg'> TRUST</p>
                     <p className=' text-2xl px-2'>We believe trust is the foundation of any lasting relationship.</p>
                  </div>
                  <img src={img1} className='lg:w-1/2  md:w-1/2 w-7/11' alt="" />
               </div>
            </div>


            <div className='text-center font-semibold bg-white rounded-xl lg:flex lg:items-center justify-end flex-col' data-aos="zoom-in-up"
               data-aos-duration='1500'
               data-aos-anchor-placement="top-center">
               <div className=''>
                  <p className='text-red-500 text-xl'>PASSION</p>
                  <p className='text-3xl'> Think bigger.</p>
               </div>
               <img src={img3} className='  ' alt="" />
            </div>

            <div className=' font-semibold bg-white rounded-xl text-center' data-aos="zoom-in-up"
               data-aos-duration='1500'
               data-aos-anchor-placement="top-center">
               <div className='pt-16'>
                  <p className=' text-gray-500'>EXPERTISE</p>
                  <p className='  text-3xl'>Over 20 years of experience.</p>
               </div>
               <img src={img2} className='pt-8 mt-5 mx-auto h-44' alt="" />
            </div>


         </div >

      </div >
   );
};

export default Belives;