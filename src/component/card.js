import React from "react";

import CardData from "./data/CardData";

const Cards = (props) => {
  return (
    <>
      <div className="card-section">
        <div className="container">
          <div className="card-wrapper">
            <h2>JavaScript Coding</h2>
            <div className="row card-layout">
  

            {CardData.map((value, index) => {
              return <>
                <div className=" card" key={index}>
                  <div className="card-intro">
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </div>
       
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
