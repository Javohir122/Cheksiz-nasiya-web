import React from "react";
import SwiperComponent from "../components/Swiper";
// import Slider from "../components/Slider";

const Home = () => {
  return (
    <div id="home" className="section">
      <h1 style={{display:"flex", justifyContent:"center", marginTop:"-150px"}}>Cheksiz-nasiyaga Xush Kelibsiz</h1>
      <div style={{marginTop:"140px"}}>
      <SwiperComponent />
      </div>
        
    </div>
  );
};

export default Home;
