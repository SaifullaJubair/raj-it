import React from 'react';
import img1 from '../../../assets/Image_website/img-32.png'
import BtnThree from '../../ButtonsCodePen/BtnThree/BtnThree';
const Supporting = () => {
   return (
      <div className='bg-white py-24'>
         <div className='max-w-[1100px] mx-auto bg-[#F5F5F7] rounded-md shadow-lg'>
            <div className='flex justify-center items-center flex-col-reverse md:flex-row lg:flex-row lg:px-16 md:px-8 px-6 py-10'>
               <div className='lg:w-1/2 md:w-full w-full py-10'>
                  <h1 className='text-3xl font-bold mb-2'>Supporting any
                     business size</h1>
                  <p className='text-lg my-6'>Our clients range from small start-up businesses who just need a phone line and broadband, right through to national retailers who require multi-site business telephone systems, lease line internet connectivity or cloud-based data networks. So we are confident we will be able to help your business.</p>
                  <BtnThree>Contact Us</BtnThree>
               </div>
               <div className='lg:w-1/2 md:w-full w-full'>
                  <img src={img1} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Supporting;