import React from 'react';
import img1 from '../../../assets/Image_website/img-19.png'
import { AiFillCaretRight } from 'react-icons/ai';
const ClientsTestimonials = () => {
   return (
      <div className=' bg-gradient-to-r from-[#359ad5] to-[#2d3185]'>
         <div className='max-w-[1100px] mx-auto py-16'>
            <div className="text-center py-10 ">
               <h1 className='text-3xl text-white'>Clients testimonials</h1>
               <p className='text-gray-400'>Don't just take our word for it.</p>
            </div>

            {/* carousel */}
            <div className="carousel bg-white rounded-xl ">

               <div id="slide1" className="carousel-item relative w-full">

                  <div className='flex justify-center  flex-col-reverse md:flex-row lg:flex-row'>
                     <div className='lg:w-1/2 md:w-full w-full px-10'>
                        <div className='mt-24'>
                           <h2 className='text-3xl font-semibold lg:w-3/4 md:'>WEST MIDLANDS FIRE SERVICE</h2>
                           <p className='flex  items-center mr-1 py-3 text-blue-600'>Watch Video <AiFillCaretRight />  </p>
                           <div className='flex flex-row py-10'>
                              <img src={img1} className='w-16 mr-4' alt="" />
                              <div className=''>
                                 <h1 className='font-semibold' >Adrian Scoyne</h1>
                                 <p className=' text-xs text-gray-600'>INFRASTRUCTURE ENGINEER</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <img src={img1} alt='' className="lg:w-1/2 md:w-1/2 w-full" />
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                     <a href="#slide3" className="btn btn-circle">❮</a>
                     <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>

               </div>
               <div id="slide2" className="carousel-item relative w-full">

                  <div className='flex justify-center  flex-col-reverse md:flex-row lg:flex-row'>
                     <div className='lg:w-1/2 md:w-full w-full px-10'>
                        <div className='mt-24'>
                           <h2 className='text-3xl font-semibold lg:w-3/4 md:'>Whitley Tandoori Ltd</h2>
                           <p className='flex  items-center mr-1 py-3 text-blue-600'>Watch Video <AiFillCaretRight />  </p>
                           <div className='flex flex-row py-10'>
                              <img src={img1} className='w-16 mr-4' alt="" />
                              <div className=''>
                                 <h1 className='font-semibold' >Adrian Scoyne</h1>
                                 <p className=' text-xs text-gray-600'>INFRASTRUCTURE ENGINEER</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <img src={img1} alt='' className="lg:w-1/2 md:w-1/2 w-full" />
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                     <a href="#slide1" className="btn btn-circle">❮</a>
                     <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">

                  <div className='flex justify-center  flex-col-reverse md:flex-row lg:flex-row'>
                     <div className='lg:w-1/2 md:w-full w-full px-10'>
                        <div className='mt-24'>
                           <h2 className='text-3xl font-semibold lg:w-3/4 md:'>WEST MIDLANDS FIRE SERVICE</h2>
                           <p className='flex  items-center mr-1 py-3 text-blue-600'>Watch Video <AiFillCaretRight />  </p>
                           <div className='flex flex-row py-10'>
                              <img src={img1} className='w-16 mr-4' alt="" />
                              <div className=''>
                                 <h1 className='font-semibold' >Adrian Scoyne</h1>
                                 <p className=' text-xs text-gray-600'>INFRASTRUCTURE ENGINEER</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <img src={img1} alt='' className="lg:w-1/2 md:w-1/2 w-full" />
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                     <a href="#slide2" className="btn btn-circle">❮</a>
                     <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
               </div>

            </div>

         </div>
      </div>
   );
};

export default ClientsTestimonials;