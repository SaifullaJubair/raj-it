import React from 'react';
import img1 from '../../../assets/Image_website/img-6.png'
import img2 from '../../../assets/Image_website/img-10.png'
import img3 from '../../../assets/Image_website/img-9.png'
import img4 from '../../../assets/Image_website/img-8.png'
import img5 from '../../../assets/Image_website/img-7.png'
import Marquee from 'react-fast-marquee';
const Brand = () => {
   return (
      <div className='h-[146px] max-w-[1100px] mx-auto'>
         <hr className="border-t-1 border-gray-600" />

         <div className='flex items-center justify-center pt-6'>
            <p className=' w-40 p-2 mx-2 text-sm font-semibold'>WE’VE BUILT SOLUTIONS  FOR</p>
            <div className=''>
               <Marquee speed={20} gradientColor>
                  <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img1} alt="" />
                  <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img2} alt="" />
                  <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img3} alt="" />
                  <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img4} alt="" />
                  <img className='  w-[125px] lg:mr-8 md:mr-4 mr-0' src={img5} alt="" />


               </Marquee>
            </div>
         </div >
      </div >
   );
};

export default Brand;