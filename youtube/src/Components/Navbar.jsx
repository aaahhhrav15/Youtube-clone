import React from 'react';
import "../styles/navbar.css";
import logo from "../assets/youtube.png";
import search from "../assets/search.ico";
import user from "../assets/user.png";

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
        <button>
          <img src={search} alt="" style={ {width:18} }  />
        </button>
      </div>
      <div className="login">
        <img src={user} alt="" width={30}/>
      </div>
    </div>
    </>
  )
};

export default Navbar;