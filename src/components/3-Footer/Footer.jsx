import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [menu, setMenu] = useState("unit");
  return (
    <section className='f-wrapper'>
      <div className="container footer">
        <h3>بيانات الاتصال :</h3>
        <div className="address flex">
          <div className="icon-home2"></div>
          <h4>العنوان : كلية الحاسبات والمعلومات - ميدان الزراعة - الزقازيق - الشرقية - مصر</h4>
        </div>
        <div className="barid flex">
          <div className="icon-person_pin_circle"></div>
          <h4>الرقم البريدى : 44519</h4>
        </div>
        <div className="email flex">
          <div className="icon-envelop"></div>
          <h4>البريد الالكترونى : info-informatics@zu.edu.eg</h4>
        </div>
        <div className="fax flex">
          <div className="icon-phone"></div>
          <h4>الفاكس : 0552261521</h4>
        </div>
        <button className='flex' onClick={() => {
                    setMenu("/contact");
                  }}
                  href=""
                >
                  <Link to="/contact">Contact Us</Link>
                  {menu === "contact" ? <div></div> : <></>}</button>
      </div>
    </section>
  )
}

export default Footer;
