import React from 'react';
import "../styles/navbar.css";
import logo from "../assets/youtube.png";
import search from "../assets/search.png";

const Navbar = () => {
  return (
    <>
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" style={ {width:40} } />
        <h2>Youtube</h2>
      </div>
      <div className="input">
        <input type="text" placeholder="Search...." />
        <img src={search} alt="" style={ {width:15} }  />
      </div>
      <div className="left">

      </div>
    </div>
    </>
  )
};

export default Navbar;