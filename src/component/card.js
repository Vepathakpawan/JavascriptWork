import React from "react";
import { Link } from "react-router-dom";

import CardData from "./data/CardData";

const Cards = (props) => {
  return (
    <>
      <div className="card-section">
        <div className="container">
          <div className="card-wrapper">
            <h2>JavaScript Coding</h2>
            <div className="row card-layout">
  

            {CardData.map((value, index ) => {
              return <>
                <Link  className="card" to={value.path} key={index} >
               <img src={value.image} className="card-img"/>
                  <div className="card-intro">
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </Link>
       
              </>;
            })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
