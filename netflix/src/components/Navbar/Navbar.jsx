import React, { useEffect,useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import dropdown from "../../assets/caret_icon.svg";

const Navbar = () => {

  const navRef = useRef();

  useEffect(() =>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt=""></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="" className="icons"></img>
        <p>Children</p>
        <img src={bellIcon} alt="" className="icons"></img>
        <div className="navbar-profile">
          <img src={profileIcon} alt="" className="profile"></img>
          <img src={dropdown} alt=""></img>
          <div className="dropdown">
            <p>Sign out of Netflix</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
