import React from 'react';
import logo from "../assets/youtube.png";
import "../styles/card.css";

const Cards = () => {
  return (
    <>
        <div className="card">
            <div className="thumbnail">
                <img src="https://i.ytimg.com/vi/HskNR0Ew3nE/maxresdefault.jpg" alt="" />
            </div>
            <div className="remcard">
                <div className="logochannel">
                    <img src={logo} alt="" width={30}/>
                </div>
                <div className="description">
                    <h3>Hello this is my very first youtube channel and i am very excited about this</h3>
                    <h4>Code with Harry</h4>
                    <h4>82k views . 3 months ago</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards;