import React from "react";
import "./Home.css";
import NavrBar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <NavrBar />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner-img"></img>
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="caption-img"></img>
          <p>
            Dsicovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={playIcon} alt=""></img>Play</button>
            <button className="btn dark-btn"><img src={infoIcon} alt=""></img>More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
