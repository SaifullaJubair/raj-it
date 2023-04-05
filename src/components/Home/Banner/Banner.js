import React from 'react';
import BtnSixteen from '../../ButtonsCodePen/BtnSixteen/BtnSixteen';
import BtnThree from '../../ButtonsCodePen/BtnThree/BtnThree';
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
   return (
      <div className="mx-auto banner max-w-[1100px] " >
         <div className="flex flex-col-reverse  lg:flex-row md:flex-col-reverse  items-center lg:justify-between  ">
            <div className='lg:w-1/2 md:w-full w-full '>
               <div className='lg:ml-0 md:ml-20 ml-6'>
                  <h2 className="text-4xl font-semibold mb-4">
                     Midland Network
                     <br className="" />
                     We are
                     {/* animate typewriter */}
                     <span className='ms-2' style={{ color: '#66c4f2', }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                           words={['Telecom Providers', 'Engineers', 'Data Cabler', 'IT Experts', 'Experienced']}
                           loop={Infinity}
                           cursor
                           cursorStyle='|'
                           typeSpeed={70}
                           deleteSpeed={50}
                           delaySpeed={1000}

                        />
                     </span>


                  </h2>
                  <p className="py-3 lg:w-full w-3/4 text-sm">Midland Networks started life as a telecom company and it's still the major part of our business. We have expanded our services over the years at customer request to offer related services, providing our customers with one port of call.</p>

                  {/* CodePen Custom Button */}
                  <div className="flex items-center mt-3 mb-16">
                     <span className='mr-2 '><BtnSixteen>ABOUT US</BtnSixteen></span>
                     <span><BtnThree>GET IN TOUCH</BtnThree></span>
                  </div>

               </div>
            </div>
            <div>
               <img
                  className="mx-auto lg:h-[740px] lg:w-[740px]"
                  src="https://i.ibb.co/9tt7wHw/https-adrl-uk-public-midlandnetworks-public.png"
                  alt=""
               />
            </div>

         </div>
      </div>
   );
};

export default Banner;