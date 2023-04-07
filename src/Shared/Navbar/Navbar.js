import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import img from '../../assets/Image_website/img-29.png'
const Navbar = () => {
   return (
      <div className=' sticky top-0 z-40 nav'>
         <div className="navbar  backdrop-blur-md bg-opacity-95 font-semibold max-w-[1100px] mx-auto  ">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/about'>About</Link></li>
                     <li><Link to='/service'>Services</Link></li>
                     <li><Link to='/download'>Downloads</Link></li>
                     <li><Link to='/training_video'>Training Video</Link></li>
                     <li><Link to='/billing'>Billing</Link></li>
                     <li><Link to='/contact'>Contact Us</Link></li>
                     <li><Link to='/login'>Login</Link></li>
                     <li><Link to='/register'>Sign Up</Link></li>
                  </ul>
               </div>
               <Link to='/'>
                  <img className='w-20 h-12' src={img} alt="" />
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/service'>Services</Link></li>
                  <li><Link to='/download'>Downloads</Link></li>
                  <li><Link to='/training_video'>Training Video</Link></li>
                  <li><Link to='/billing'>Billing</Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>

               </ul>
            </div>
            <div className="navbar-end">
               <button className='mx-2  bg-[#71cdfb] btn-sm rounded-full w-20 text-white font-bold'><Link to='/login'>Login</Link></button>
               <p className=''><Link to='/register'>Sign Up</Link></p>
            </div>
         </div>
      </div>
   );
};

export default Navbar;