import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

// css for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// it uses a array of slides, which containes objects with imgUrl, altText
// slides = [
// {imgUrl: '', altText: ''},
// {imgUrl: '', altText: ''},
// ]


export default function SimpleSlider(props) {
  const settings = {
    className: "slider variable-width",
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 2040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    
  };
  
  return (
    <div className=" mx-auto w-[90%]">

    <Slider {...settings}>
        {
           props.children
            
        }
    </Slider>
    </div>
  
  );
}




// different settings

// Pause on hover + autoplay
// dots: true,
// infinite: true,
// slidesToShow: 3,
// slidesToScroll: 1,
// autoplay: true,
// autoplaySpeed: 2000,
// pauseOnHover: true



// Nav Carousel




export function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

