import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import "./Graduateheader.css";

const Header = () => {
  const [menu, setMenu] = useState("unit");
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <OutsideClickHandler
  onOutsideClick={() => {
    setMenuOpened(false);
  }}
>
    <section className="h-wrapper">
      <div className="container header flex">
        <div className="right-side flex">
          <nav className="menu">
            <ul className="flex">
              <li>
                <a
                  onClick={() => {
                    setMenu("");
                  }}
                  href=""
                >
                  <Link to="/">الرئيسية </Link>
                  {menu === "" ? <div></div> : <></>}
                </a>
              </li>
              
              <li>
                <a href="">خريج</a>
              </li>
              <li>
              <a
                  onClick={() => {
                    setMenu("graduateform");
                  }}
                  href=""
                >
                  <Link to="/graduateform">استماره خريج</Link>
                  {menu === "graduateform" ? <div></div> : <></>}
                </a>
              </li>
              
              
            </ul>
          </nav>
          <div style={{cursor:"pointer"}} className="menu-icon" onClick={() => {
          setMenuOpened((prev)=>!prev);
        }
        }>
          <BiMenuAltRight size={30} />
        </div>
        </div>
        <div className="left-side flex">
          <h2>graduates unit</h2>
          <span className="icon-graduate flex"></span>
        </div>
      </div>
      {menuOpened && (
        
        <div className="hidden-menu flexCenter">
                <a
                  onClick={() => {
                    setMenu("/");
                  }}
                  href=""
                >
                  <Link to="/">الرئيسية </Link>
                  {menu === "/" ? <div></div> : <></>}
                </a>
          
          <a href="#">خريج</a>

          <a
                  onClick={() => {
                    setMenu("graduateform");
                  }}
                  href=""
                >
                  <Link to="/graduateform">استماره خريج</Link>
                  {menu === "graduateform" ? <div></div> : <></>}
                </a>
          
          
          
        </div>
        
        
        )}
    </section>
    </OutsideClickHandler>
  );
};

export default Header;
