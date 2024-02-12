import React from 'react';
import Navbar from "./Navbar";
import "../styles/homepage.css";
import Leftnav from './Leftnav';
import Cards from './Cards';

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="alignpage">
        <Leftnav/>
        <Cards/>
      </div>

    </>
  )
};

export default Homepage;