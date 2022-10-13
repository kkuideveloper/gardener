import React from "react";
import Carousel from "react-bootstrap/Carousel"


function Slider(){
    return(
        <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="./img/carousel-1.jpg"  alt="First slide" />
          <Carousel.Caption>
          <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
            <a href="/" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src="./img/carousel-2.jpg"  alt="First slide" />
  
          <Carousel.Caption>
          <h1 className="display-1 text-white mb-5 animated slideInDown">Create Your Own Small Garden At Home</h1>
           <a href="/" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a></Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>


    );
}

export default Slider;