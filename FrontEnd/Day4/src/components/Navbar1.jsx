// import { Link } from "react-router-dom";
// function Navbar()
// {
//     return(
//         <div id="header">
//             <div id="siteinfo"></div>
//             <div id="navbar">
//             
                   
//         </div>        
//         </div>
//     )
// }
// export default Navbar;
import React from "react";
import "./navbar1.css";
import { Link } from "react-router-dom";

const Navbar1 = ({ selected, setSelected, setOpen }) => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
        Marina<span>Getaways</span>
        </h1>
      </div>
      <div className="header__right">
            <Link className="navlink" to="/h1">Home </Link>
            <Link className="navlink" to="/about">About </Link>
            <Link className="navlink" to="/addboat">Boat Details </Link>
            <Link className="navlink" to="/book">Boat Booking </Link>
            <Link className="navlink" to="/">Logout </Link> 
        
    </div>
    </div>
  );
};

export default Navbar1;