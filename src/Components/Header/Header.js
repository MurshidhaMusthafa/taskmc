import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { TextField } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header-main-parent">
        <div className="header-logo">
          <img src="logo.png" alt="" />
        </div>
        <div className="delivery-logo"><div>
          <img src="delivery.png" alt=""/> </div> 
        </div>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <div className="header-search">
          <div>
            <input type="text" className="header-search-input" />
          </div>
          <div className="header-search-input-icon">
            <BsSearch color="white" fontSize={20} />
          </div>
        </div>
        <div className="header-profile">
          <div className="header-profile-icon">
            <img src="user.png" alt="" />
          </div>
          <div className="header-search-cart">
            <img src="cart.png" alt="" />
          </div>
        </div>
      </div>
      <div></div>
      <hr></hr> 
      <br></br>
      <div className="header-2">
        <h5>Tobacco</h5> &nbsp; &nbsp; &nbsp; &nbsp;
        <h5>Hemp</h5> &nbsp; &nbsp; &nbsp; &nbsp;
        <h5>Vape</h5> &nbsp; &nbsp; &nbsp; &nbsp;
        <h5>Alternative</h5> &nbsp; &nbsp; &nbsp; &nbsp;
        <h5>General Merchandise</h5> &nbsp; &nbsp; &nbsp; &nbsp;
        <h5>Brand</h5> &nbsp; &nbsp; &nbsp; &nbsp;
        <h5>Article</h5> &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
      <br></br>
      <hr></hr>

      {/* Mobile */}
      <div className="header-mobile-main">
        <div style={{fontSize:"20px"}}>
          <GiHamburgerMenu />
        </div>
        <div>
          <img src="logo.png" alt="" height={35} width={150} />
        </div>
        <div className="header-profile">
          <div className="header-profile-icon" style={{margin:"0 10px 0 -10px"}}>
            <img src="profile.png" alt="" />
          </div>
          <div className="header-search-cart">
            <img src="cart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="header-mobile-search" >
          <div>
            <input type="text" className="header-search-input-mobile" />
          </div>
          <div className="header-search-input-icon-mobile">
            <BsSearch color="white" fontSize={20} />
          </div>
        </div>
    </>
  );
};

export default Header;
