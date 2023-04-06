import React from 'react';
import BtnThree from '../../ButtonsCodePen/BtnThree/BtnThree';
import img1 from '../../../assets/Image_website/img-21.png'
import img2 from '../../../assets/Image_website/img-20.png'
import img3 from '../../../assets/Image_website/img-22.png'
const StayUpdated = () => {
   return (
      <div className='max-w-[1100px] mx-auto my-16'>
         {/* connected and button section  */}

         <div className='flex justify-center items-center flex-col  text-4xl font-bold'>
            <p className='my-10'>Let's Connect</p>
            <BtnThree>GET IN TOUCH</BtnThree>
            <p className='mt-16 mb-4'>Stay Updated</p>
            <p className='text-sm text-gray-500 text-semibold'>Discover the latest news</p>
         </div>

         {/* left red div  */}
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-16'>
            <div className='bg-[#d7657f] h-96 rounded-tl-2xl rounded-bl-2xl  text-white'>
               <div className='p-8 pt-16'>
                  <h1 className='py-16 text-4xl w-2/5 font-bold'>Paying too much for mobile?</h1>
                  <p className='text-sm font-semibold'> Mobile phone | 3 mim read</p>
               </div>
            </div>

            {/* right blue div  */}
            <div className='bg-[#66c4f2] h-96 rounded-tr-2xl rounded-br-2xl pt-8  text-white' >
               <img src={img1} alt="" />
            </div>

         </div>


         {/* card section here  */}

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure><img src={img2} alt="Shoes" /></figure>
               <div className="card-body bg-[#66c4f2] rounded-b-xl ">
                  <h2 className="text-2xl font-bold w-3/4 mb-6 ">Why Choose a Hosted Telephone System?</h2>
                  <p>Telephone system | 2 min read</p>

               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure><img src={img2} alt="Shoes" /></figure>
               <div className="card-body bg-[#66c4f2] rounded-b-xl ">
                  <h2 className="text-2xl font-bold w-3/4 mb-6 ">Why Choose a Hosted Telephone System?</h2>
                  <p>Telephone system | 2 min read</p>

               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure><img src={img2} alt="Shoes" /></figure>
               <div className="card-body bg-[#66c4f2] rounded-b-xl ">
                  <h2 className="text-2xl font-bold w-3/4 mb-6 ">Why Choose a Hosted Telephone System?</h2>
                  <p>Telephone system | 2 min read</p>

               </div>
            </div>
         </div>



      </div>
   );
};

export default StayUpdated;