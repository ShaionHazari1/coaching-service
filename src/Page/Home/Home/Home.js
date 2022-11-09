import React from 'react';
import img1 from '../../../assets/images/TourImage/christoph-schulz-7tb-b37yHx4-unsplash.jpg';
import img2 from '../../../assets/images/TourImage/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg';
import img3 from '../../../assets/images/TourImage/eva-darron-oCdVtGFeDC0-unsplash.jpg';
import img4 from '../../../assets/images/TourImage/jack-ward-rknrvCrfS1k-unsplash.jpg';


const Home = () => {
    return (
        <div className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full h-1/2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Home;