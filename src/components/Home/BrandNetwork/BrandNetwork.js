import React from 'react';
import img1 from '../../../assets/Image_website/img-16.png'
import img2 from '../../../assets/Image_website/img-14.png'
import img3 from '../../../assets/Image_website/img-15.png'
import img4 from '../../../assets/Image_website/img-13.png'
import img5 from '../../../assets/Image_website/img-11.png'
import Marquee from "react-fast-marquee";
const BrandNetwork = () => {
   return (
      <div className='bg-white '>
         <div className=' max-w-[1100px] mx-auto pb-16'>
            <hr className="border-t-1 border-gray-600 " />

            <div className='flex items-center justify-center pt-6'>
               <p className=' w-36 p-2 mx-2 text-sm font-semibold'>WE’VE BUILT SOLUTIONS  FOR</p>
               <div className='bg-white'>
                  <Marquee speed={20} gradientColor>
                     <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img1} alt="" />
                     <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img2} alt="" />
                     <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img3} alt="" />
                     <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img4} alt="" />
                     <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img5} alt="" />


                  </Marquee>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BrandNetwork;