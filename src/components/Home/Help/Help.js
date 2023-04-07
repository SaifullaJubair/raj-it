import React from 'react';
import img1 from '../../../assets/Image_website/img-25.png'
import img2 from '../../../assets/Image_website/img-26.jpg'
import img3 from '../../../assets/Image_website/img-27.png'
import img4 from '../../../assets/Image_website/img-28.jpg'
import img5 from '../../../assets/Image_website/img-24.png'
const Help = () => {
   // const styles = {
   //    background: 'linear-gradient(to bottom right, #e0ebfc, #f1e9ec)'
   // }
   return (
      <div className='max-w-[1100px] mx-auto my-10 '>
         <h1 className='text-4xl font-semibold my-8'>Help is here. <span className='text-gray-400'>Always ready for you.</span></h1>
         <div className='grid grid-rows-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-10 lg:mx-0 md:mx-3 mx-4'>

            <div className="card  bg-white text-neutral-content row-span-2" data-aos="fade-right"
               data-aos-duration='1500'
               data-aos-anchor-placement="top-center">
               <div className="card-body text-lg ">
                  <h2 className="card-title text-red-600">Advice</h2>
                  <p className='text-black font-semibold'>Specialist advice</p>
                  <figure><img className='w-72 my-16' src={img1} alt="" /></figure>

               </div>
            </div>
            <div className="card bg-white text-neutral-content" data-aos="fade-left"
               data-aos-duration='1500'
               data-aos-anchor-placement="top-center">
               <div className="card-body  text-lg">
                  <h2 className="card-title text-blue-600 uppercase">Training</h2>
                  <p className='text-black font-semibold'>100 + training videos to support you</p>
                  <img src={img2} alt="" />
               </div>
            </div>
            <div className="card bg-white text-neutral-content bg-gradient-to-br from-[#e0ebfc] to-[#f1e9ec]" data-aos="fade-left"
               data-aos-duration='1500'
               data-aos-anchor-placement="top-center" >
               <div className="card-body text-black flex flex-row  justify-between  ">
                  <div className='w-1/3 font-semibold'>
                     <h2 className="card-title mt-2 mb-10">SUPPORT</h2>
                     <p className=' text-lg '>Log a ticket in our customer support portal</p>
                  </div>
                  <div>
                     <img className='h-36 my-2' src={img3} alt="" />
                  </div>
               </div>
            </div>
            <div className="card  bg-white text-neutral-content" data-aos="zoom-in-up" data-aos-duration='1500' data-aos-anchor-placement="top-center">
               <div className="card-body  flex flex-row  justify-between  ">
                  <div className='w-1/3 font-semibold'>
                     <h2 className="card-title mt-2 mb-10 text-[#04D2FF]">MESSAGING</h2>
                     <p className=' text-lg text-black'>Quick and efficent communication</p>
                  </div>
                  <div>
                     <img className='h-36 my-2' src={img4} alt="" />
                  </div>
               </div>
            </div>
            <div className="card  bg-white text-neutral-content" data-aos="zoom-in-up"
               data-aos-duration='1500'
               data-aos-anchor-placement="top-center">
               <div className="card-body flex flex-row  justify-between">
                  <div className='w-1/3 font-semibold'>
                     <h2 className="card-title mt-2 mb-10 text-gray-400">GUIDANCE</h2>
                     <p className=' text-lg  text-black'>User guides & software</p>
                  </div>
                  <div>
                     <img className='h-36 my-2' src={img5} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Help;