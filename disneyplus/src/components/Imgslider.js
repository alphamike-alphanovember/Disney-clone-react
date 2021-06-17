import React from "react";
import styled from "styled-components";

import Slider from "react-slick"; //https://react-slick.neostack.com/docs/get-started
import "slick-carousel/slick/slick.css"; //for coursel
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default Imgslider;

const Carousel = styled(Slider)`
  marign-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(10, 158, 171);
    }

    li.slick-active button::before {
      color: white;
    }

    .slick-list {
      overflow: visible;
    }
  }
`;

const Wrap = styled.div`
  img {
    border-radius: 4px solid transparent;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  }
`;
