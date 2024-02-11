import "../styles/leftnav.css";
import React from 'react';
import home from "../assets/home.png";
import shorts from "../assets/shorts.png";

const Leftnav = () => {
  return (
    <>
      <div className="container">
        <div className="first">
          <div className="home">
            <img src={home} alt="" width={16} height={16}/>
            <h3>Home</h3>
          </div>
          <div className="shorts">
            <img src={shorts} alt="" width={16} height={16}/>
            <h3>Shorts</h3>
          </div>
          <div className="subscription">
            <img src={home} alt="" width={16} height={16}/>
            <h3>Subscriptions</h3>
          </div>
        </div>
        <div className="gap"></div>
        
      </div>
    </>
  )
};

export default Leftnav;