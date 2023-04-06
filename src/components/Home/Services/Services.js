import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import img1 from '../../../assets/Image_website/img-5.png'
import img2 from '../../../assets/Image_website/img-2.png'
import img3 from '../../../assets/Image_website/img-4.png'
import img4 from '../../../assets/Image_website/img-3.png'
import img5 from '../../../assets/Image_website/image-1.png'
const Services = () => {
   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5
      },
      largeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 3000, min: 1400 },
         items: 3
      },
      desktop: {
         breakpoint: { max: 1400, min: 1024 },
         items: 2
      },
      tablet: {
         breakpoint: { max: 1024, min: 0 },
         items: 1
      },

   };
   return (
      <div className='max-w-[1500px] mx-auto my-10 '>
         <div className='max-w-[1100px] mx-auto my-6'> <h1 className='text-4xl font-semibold'>Services. <span className='text-gray-400'>Here where the fun begins.</span></h1></div>
         <div className='mx-2 lg:mx-2 md:mx-6'>
            <Carousel responsive={responsive}>
               {/* 01 */}
               <div className="card lg:w-[480px] md:w-[580px] w-80 h-[500px]  bg-base-100 shadow-md ">
                  <div className="card-body">
                     <p className='text-gray-500 font-semibold text-xl'>Phone System</p>
                     <h1 className=" font-bold text-2xl">Oh.SO.Pro!</h1>
                     <p className='font-semibold'>We install & support Business telephone system using VoIP system technology</p>
                  </div>
                  <figure><img src={img1} alt="" /></figure>
               </div>
               {/* 02 */}
               <div className="card lg:w-[480px] md:w-[580px] w-80 h-[500px] bg-base-100  shadow-md ">
                  <div className="card-body">
                     <p>Lines & Calls</p>
                     <h1 className=" font-bold text-2xl ">Network Cabling, WIFI, and fibre optics</h1>

                  </div>
                  <figure><img src={img2} alt="" /></figure>
               </div>
               {/* 03 */}
               <div className="card lg:w-[480px] md:w-[580px] w-80 h-[500px] bg-base-100  shadow-md ">
                  <div className="card-body">
                     <p>Internet</p>
                     <h1 className=" font-bold text-2xl ">Business mobile packages and 4G data</h1>

                  </div>
                  <figure><img src={img3} alt="" /></figure>
               </div>
               {/* 04 */}
               <div className="card lg:w-[480px] md:w-[580px] w-80 h-[500px] bg-base-100  shadow-md ">
                  <div className="card-body">
                     <p>Cabling & Wifi</p>
                     <h1 className=" font-bold text-2xl ">Business Telephone Lines & Analogue & ISDN</h1>

                  </div>
                  <figure><img src={img4} alt="" /></figure>
               </div>
               {/* 05 */}
               <div className="card lg:w-[480px] md:w-[580px] w-80 h-[500px] bg-base-100  shadow-md ">
                  <div className="card-body">
                     <p>Mobile & 4G</p>
                     <h1 className=" font-bold text-2xl ">Business Internet Connectivity</h1>
                  </div>
                  <figure><img src={img5} alt="" /></figure>
               </div>

            </Carousel>
         </div>
      </div>
   );
};

export default Services;