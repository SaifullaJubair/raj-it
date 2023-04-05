import React from 'react';
import BtnSixteen from '../../ButtonsCodePen/BtnSixteen/BtnSixteen';
import BtnThree from '../../ButtonsCodePen/BtnThree/BtnThree';
const Banner = () => {
   return (
      <div className="mx-auto banner max-w-[1100px] " >
         <div className="grid text-max lg:grid-cols-2 items-center justify-between ">
            <div className=''>
               <h2 className="text-4xl font-semibold mb-4">
                  Midland Network
                  <br className="" />
                  We are
               </h2>
               <p className="py-3 w-3/4">Midland Networks started life as a telecom company and it's still the major part of our business. We have expanded our services over the years at customer request to offer related services, providing our customers with one port of call.</p>

               {/* CodePen Custom Button */}
               <div className="flex items-center mt-3">
                  <span className='mr-2 '><BtnSixteen>ABOUT US</BtnSixteen></span>
                  <span><BtnThree>GET IN TOUCH</BtnThree></span>
               </div>

            </div>
            <div>
               <img
                  className="mx-auto lg:h-[640px] lg:w-[740px]"
                  src="https://i.ibb.co/9tt7wHw/https-adrl-uk-public-midlandnetworks-public.png"
                  alt=""
               />
            </div>

         </div>
      </div>
   );
};

export default Banner;