import React from "react";
import "./Event.css";
import EGI from "../../assets/Egi.jpeg";
import Eng from "../../assets/Eng.jpeg";


const Event = () => {
  return (
    <section className="e-wrapper">
      <div className="event container flex">
        <div className="first-h flex">
          <div className="about-unit flex">
            <h4>الندوات المتاحه</h4>
          </div>
        </div>
        <div className="second-h flex">
          <div className="title flex">
            <h3>STEP2.0</h3>
            <img src={EGI} alt="" />
          </div>
          <div className="content flex">
            <h4>14/12/2022</h4>
            <h4>12-1 flutter</h4>
            <h4>1-2 Data Science</h4>
            <a href="">More details</a>
          </div>
        </div>
        <div className="third-h flex">
          <div className="title flex">
            <h2>Cyber Security</h2>
            <h1>Learn and Get certified</h1>
            <img src={Eng} alt="" />
            <h4>Eng. Rania Elsayed</h4>
            <p>Head of Infrastructure & Cyper Security Department</p>
          </div>
          <div className="content flex">
            <h4>Wed, 18 October,2024</h4>
            <h4>6:00 PM</h4>
            <h4 className="small">( CAIRO TIME )</h4>
            <a href="">More details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
