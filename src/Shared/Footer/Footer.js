import React from 'react';
import img1 from '../../assets/Image_website/img-29.png'
import { FaFacebookF, FaTwitter, FaYoutube, } from 'react-icons/fa'

const Footer = () => {
   return (
      <div className=''>
         <footer className="px-4 pt-8 divide-y bg-[#191d65] dark:text-gray-100 ">
            <div className="container flex flex-col justify-between items-center mx-auto space-y-8 lg:flex-row lg:space-y-0 lg:h-[610px]">
               <div className="lg:w-1/3 md:w-full w-full">
                  <img className='h-16' src={img1} alt="" />
                  <p className='my-3 lg:w-5/6 md:w-11/12 w-full'>Midland Networks started life as a business lines and calls provider in Birmingham City Centre, we moved our offices to Halesowen in 2012.  We expanded over the following years to cover all forms of business communications and gained customers from all over the UK. </p>
                  <div className="space-y-3">
                     <div className="uppercase dark:text-gray-50">Social media</div>
                     <div className="flex justify-start space-x-3">
                        <a href="https://www.facebook.com/" title="Facebook" className="flex items-center border-2 border-blue-500 text-2xl rounded-full p-2 text-blue-500">
                           <FaFacebookF></FaFacebookF>
                        </a>
                        <a href="https://www.facebook.com/" title="Facebook" className="flex items-center border-2 border-cyan-500 text-2xl rounded-full p-2 text-cyan-400">
                           <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://www.facebook.com/" title="Facebook" className="flex items-center border-2 border-red-500 text-2xl rounded-full p-2 text-red-600">
                           <FaYoutube></FaYoutube>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-2 text-sm gap-x-3 md:grid-cols-3 lg:w-2/3 w-4/5 lg:grid-cols-3">
                  <div className="  my-3">
                     <h3 className="tracking-wide  font-semibold lg:text-4xl md:text-3xl text-2xl dark:text-gray-50 lg:-mt-24 lg:mb-10">Services</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Telephone Systems</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Lines & Calls</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Internet</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Mobile & 4G</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Cabling</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Wifi</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Hosted Telephony System</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3  my-3 ">
                     <h3 className="tracking-wide font-semibold dark:text-gray-50 lg:-mt-24 lg:mb-10 lg:text-4xl md:text-3xl text-2xl">Useful Links</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Our Brochure</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Order Form</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Finance Calculator</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Blog</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3  mb-3 ">
                     <h3 className="font-semibold dark:text-gray-50 lg:-mt-24 lg:mb-10 my-3 pt-3 lg:text-4xl md:text-3xl text-2xl">Developers</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Midland Networks Group Holdings Ltd</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">0800 849 8585</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">hello@midlandnetworks.co.uk</a>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>
            <div className="py-6  text-center   text-white font-semibold">© 2022 Midland Networks Group Holdings Ltd. All Rights Reserved.</div>
         </footer>
      </div>
   );
};

export default Footer;