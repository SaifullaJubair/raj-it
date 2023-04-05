import React from 'react';
import img1 from '../../../assets/Image_website/img-6.png'
import img2 from '../../../assets/Image_website/img-10.png'
import img3 from '../../../assets/Image_website/img-9.png'
import img4 from '../../../assets/Image_website/img-8.png'
import img5 from '../../../assets/Image_website/img-7.png'
const Brand = () => {
   return (
      <div className='h-[146px] max-w-[1100px] mx-auto'>
         <hr className="border-t-1 border-gray-600" />

         <div className='flex items-center justify-between overflow-x-scroll my-6' >
            <p className=' w-[125px] p-2 mx-2 text-sm'>WE’VE BUILT SOLUTIONS  FOR</p>
            <img className=' h-[75px] w-[125px]' src={img1} alt="" />
            <img className=' h-[75px] w-[125px]' src={img2} alt="" />
            <img className=' h-[75px] w-[125px]' src={img3} alt="" />
            <img className=' h-[75px] w-[125px]' src={img4} alt="" />
            <img className=' h-[75px] w-[125px]' src={img5} alt="" />

         </div>
      </div>
   );
};

export default Brand;