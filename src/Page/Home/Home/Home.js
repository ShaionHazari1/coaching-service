import React from 'react';
import Choosen from '../Choosen/Choosen';
import Knowledge from '../Knowledge/Knowledge';
import PriceSection from '../PriceSection/PriceSection';
import ServiceHome from '../ServiceHome/ServiceHome';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ServiceHome></ServiceHome>
            <Knowledge></Knowledge>
            <Choosen></Choosen>
            <PriceSection></PriceSection>
  
            
        </div>
    );
};

export default Home;