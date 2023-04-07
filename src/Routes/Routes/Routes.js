import React from 'react';
import UnKnownRoutes from '../UnknoownRoutes/UnknownRoutes';
import Main from '../../Layout/Main/Main';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import About from '../../Pages/About/About';
import Service from '../../Pages/Service/Service';
import Contact from '../../Pages/Contact/Contact';
import Billing from '../../Pages/Billing/Billing';
import Download from '../../Pages/Download/Download';
import TrainingVideo from '../../Pages/TrainingVideo/TrainingVideo';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <UnKnownRoutes></UnKnownRoutes>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },

         {
            path: '/about',
            element: <About></About>
         },
         {
            path: '/service',
            element: <Service></Service>
         },
         {
            path: '/billing',
            element: <Billing></Billing>
         },
         {
            path: '/download',
            element: <Download></Download>
         },
         {
            path: '/contact',
            element: <Contact></Contact>
         },
         {
            path: '/training_video',
            element: <TrainingVideo></TrainingVideo>
         },

         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },

      ]
   },


])

export default router;