import './App.css';
import ScrollToTop from 'react-scroll-up';
import { Toaster } from 'react-hot-toast';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <ScrollToTop showUnder={160} >
        <span className='text-4xl text-blue-600 hover:text-sky-600'><BsArrowUpCircleFill className='animate-bounce'></BsArrowUpCircleFill></span>
      </ScrollToTop>
    </div>
  );
}

export default App;
