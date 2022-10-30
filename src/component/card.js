import React, { useState } from "react";
import { Link } from "react-router-dom";

import CardData from "./data/CardData";

const Cards = (props) => {

  const [noOfElement, setnoOfElement]= useState(6);
  const showMore = () =>{
    setnoOfElement(noOfElement + noOfElement);
  }

  const slice = CardData.slice(0,noOfElement);

  return (
    <>
      <div className="card-section">
        <div className="container">
          <div className="card-wrapper">
            <h2>JavaScript Coding</h2>
            <div className="row card-layout">
  

            {slice.map((value, index ) => {
              return <>
                <Link  className="card" to={value.path} key={index} >
               <img src={value.image} className="card-img"/>
                  <div className="card-intro">
                    <h3 className="hv">{value.title}</h3>
                    <p className="hv">{value.desc}</p>
                  </div>
                </Link>
       
              </>;
            })}

          </div>
          <button className="btn show-more" onClick ={showMore}>  Show more</button>

        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
