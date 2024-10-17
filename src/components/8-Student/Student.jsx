import React from "react";
import "./Student.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Student = () => {
  const [menu, setMenu] = useState("unit");
  return (
    <section className="g-wrapper">
      <div className="graduate container flex">
        <div className="first-h flex">
          <h3>وحده خريجين كليه الحاسبات والمعلومات ترحب بطلابها الاعزاء</h3>
        </div>
        <div className="second-g flex">
          <div className="about-unit flex">
            <h4>الندوات</h4>
            <div className="white-line"></div>
            <button onClick={() => {
                    setMenu("event2");
                  }}
                  href=""
                >
                  <Link to="/event2">اضغط لمعرفة المزيد</Link>
                  {menu === "event2" ? <div></div> : <></>}</button>
          </div>
          <div className="about-unit flex">
            <h4>التدريبات والوظائف</h4>
            <div className="white-line"></div>
            <button onClick={() => {
                    setMenu("train2");
                  }}
                  href=""
                >
                  <Link to="/train2">اضغط لمعرفة المزيد</Link>
                  {menu === "train2" ? <div></div> : <></>}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
