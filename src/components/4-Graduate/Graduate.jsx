import React from "react";
import "./Graduate.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Graduate = () => {
  const [menu, setMenu] = useState("unit");
  return (
    <section className="g-wrapper">
      <div className="graduate container flex">
        <div className="first-h flex">
          <h3>وحده خريجين كليه الحاسبات والمعلومات ترحب بخريجيها الاعزاء</h3>
        </div>
        <div className="second-g flex">
          <div className="about-unit flex">
            <h4>الندوات</h4>
            <div className="white-line"></div>
            <button onClick={() => {
                    setMenu("event");
                  }}
                  href=""
                >
                  <Link to="/event">اضغط لمعرفة المزيد</Link>
                  {menu === "event" ? <div></div> : <></>}</button>
          </div>
          <div className="about-unit flex">
            <h4>التدريبات والوظائف</h4>
            <div className="white-line"></div>
            <button onClick={() => {
                    setMenu("train");
                  }}
                  href=""
                >
                  <Link to="/train">اضغط لمعرفة المزيد</Link>
                  {menu === "train" ? <div></div> : <></>}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graduate;
