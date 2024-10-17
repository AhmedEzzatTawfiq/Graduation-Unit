import React from "react";
import "./Academy.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Academy = () => {
  const [menu, setMenu] = useState("unit");
  return (
    <section className="g-wrapper">
      <div className="graduate container flex">
        <div className="first-h flex">
          <h3>اهلا بكم فى وحده خريجين كليه الحاسبات والمعلومات بالزقازيق</h3>
        </div>
        <div className="second-g flex">
          <div className="about-unit flex">
            <h4>معلومات حول عملك</h4>
            <div className="white-line"></div>
            <button onClick={() => {
                    setMenu("info");
                  }}
                  href=""
                >
                  <Link to="/info">اضغط لمعرفة المزيد</Link>
                  {menu === "info" ? <div></div> : <></>}</button>
          </div>
          <div className="about-unit flex">
            <h4>انشاء اعلان وظيفى</h4>
            <div className="white-line"></div>
            <button onClick={() => {
                    setMenu("createjob");
                  }}
                  href=""
                >
                  <Link to="/createjob">اضغط لمعرفة المزيد</Link>
                  {menu === "createjob" ? <div></div> : <></>}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
