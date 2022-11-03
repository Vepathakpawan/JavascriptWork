import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import CardData from "./data/CardData";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Cards = (props) => {

  const [noOfElement, setnoOfElement]= useState(9);
  const showMore = () =>{
    setnoOfElement(noOfElement + noOfElement);
  }

  const slice = CardData.slice(0,noOfElement);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="card-section">
        <div className="container">
          <div className="card-wrapper">
            <h2>JavaScript Coding</h2>
            <div className="row card-layout">
  
            <Slider {...settings}>
            {slice.map((value, index ) => {
              return <>
               
              <div  className="card">
                <Link  to={value.path} key={index} >
               <img src={value.image} className="card-img"/>
                  <div className="card-intro">
                    <h3 className="hv">{value.title}</h3>
                    <p className="hv">{value.desc}</p>
                  </div>
                </Link>
                </div>
         
              </>;
            })}
       </Slider>
          </div>
          {/* <button className="btn show-more" onClick ={showMore}>  Show more</button> */}

        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
