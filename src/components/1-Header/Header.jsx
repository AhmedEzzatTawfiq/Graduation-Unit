import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <section className="h-wrapper">
      <div className="container header flex">
        
        <div className="right-side flex">
          <nav>
            <ul className="flex">
              <li>
                <a onClick={() =>{setMenu("/")}} href=""><Link to='/'>الرئيسية </Link>{menu==="/"? <div></div>:<></>}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="left-side flex">
          <h2>graduates unit</h2>
          <span className="icon-graduate flex"></span>
        </div>
      </div>
    </section>
  );
};

export default Header;
