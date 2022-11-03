import React from "react";
import Cards from "./card";
import CardData from "./data/CardData";



function HomePage(){

    return(
        
        <>
        <div className="home-page">
            <div className="banner-section">
                <div className="container  ">
                    <div className="d-flex section-1">
                    <div className="col-6 ">
                        <div className="col-wrapper">
                        <h1>  {"{/JavaScript/}"} <br /> with React</h1>
                        <a href="#" className="more">Learn and More</a>
                        </div>
                    </div>
                    <div className="col-6 ">
                      <div className="js-img">
                      </div>
                    </div>
                    </div>
                </div>
            </div>
            
            
            <Cards details={CardData}> </Cards>
           
        </div>
        </>
    
    )
  
};

export default HomePage;