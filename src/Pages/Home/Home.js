import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import Brand from '../../components/Home/Brand/Brand';
import Services from '../../components/Home/Services/Services';
import Help from '../../components/Home/Help/Help';
import Networks from '../../components/Home/Networks/Networks';
import Supporting from '../../components/Home/Supporting/Supporting';
import BrandNetwork from '../../components/Home/BrandNetwork/BrandNetwork';
import ClientsTestimonials from '../../components/Home/ClientsTestimonials/ClientsTestimonials';
import Award from '../../components/Home/Award/Award';
import Belives from '../../components/Home/Belives/Belives';
import StayUpdated from '../../components/Home/StayUpdated/StayUpdated';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Brand></Brand>
         <Services></Services>
         <Help></Help>
         <Networks></Networks>
         <Supporting></Supporting>
         <BrandNetwork></BrandNetwork>
         <ClientsTestimonials></ClientsTestimonials>
         <Award></Award>
         <Belives></Belives>
         <StayUpdated></StayUpdated>
      </div>
   );
};

export default Home;