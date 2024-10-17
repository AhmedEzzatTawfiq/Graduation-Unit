import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [menu, setMenu] = useState("home");
  return (
    <section className="hero-wrapper">
      <div className="hero container flex">
        <div className="first-h flex">
          <h3>مرحبا بكم فى وحده خريجين كليه الحاسبات والمعلومات بالزقازيق</h3>
          <div className="about-unit flex">
            <h4>عن الوحدة</h4>
            <div className="white-line"></div>
            <button style={{fontSize:"0.7rem"}} onClick={() =>{setMenu("unit")}} href=""><Link to='/unit'>اضغط لمعرفة المزيد </Link>{menu==="unit"? <div></div>:<></>}</button>
          </div>
        </div>
        <div className="second-h flex">
          <div className="title flex">
            <h3>"بوابه الخريجين"</h3>
          </div>
          <div className="content flex">
            <h5>
              من خلال هذه البوابه يمكن البحث عن خريجى الكليه فى مختلف التخصصات
            </h5>
            <div className="input">
              <input type="text" placeholder="ابحث باسم التخصص" />
            </div>
            <div className="icon-search"></div>
            <div className="year-and-search flex">
            <div className="form-group">
                <div className="custom-select">
                  <select
                    id="id10"
                    name="technology"
                    className="input-field"
                    required
                  >
                    <option className="first-option" value="" disabled selected>
                    سنه التخرج
                    </option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                </div>
              </div>
              <button onClick={() => {
                    setMenu("search");
                  }}
                  href=""
                >
                  <Link to="">اضغط للبحث</Link>
                  {menu === "" ? <div></div> : <></>}</button>
            </div>
          </div>
        </div>
        <div className="third-h flex">
          <div className="title">
            <h3>"الشركات المتاحه"</h3>
          </div>
          <div className="content">
            <div className="name flex">
              <h5>
                اسم الشركه <span className="red-star">*</span>
              </h5>
              <div className="company flex">
                <h3>Microsoft</h3>
                <img src="../../../src/assets/microsoft.png" alt="" />
              </div>
            </div>
            <div className="feild flex">
              <h5>
                مجال العمل <span className="red-star">*</span>
              </h5>
              <h4>Computer technologies</h4>
            </div>
            <div className="breif flex">
              <h5>
                مجال العمل <span className="red-star">*</span>
              </h5>
              <p>
                ميكروسوفت شركه دوليه تعمل فى مجال تقنيات الحاسوب,
                <br />
                يبلغ دخلها السنوى 44 مليار دولار , ويعمل بها 71,553 فى 102 دوله.{" "}
                <br />
                تطور وتصنع وترخص مدى واسع من البرمجيات للأجهزه الحاسوبيه .{" "}
                <br />
                يقع المقر الرئيسى للشركه فى ضاحيه واشنطن , والولايات المتحده
              </p>
            </div>
          </div>
        </div>
        <div className="forth-h flex">
          <div className="title">
            <h4>التقارير</h4>
          </div>
          <div className="content flex">
            <div className="students">
              <div className="icon-user"></div>
              <h5>اعداد الطلاب</h5>
              <p>71.008</p>
            </div>
            <div className="gradu">
              <div className="icon-graduate"></div>
              <h5>اعداد الخريجين</h5>
            </div>
            <div className="pass">
              <div className="icon-fact_check"></div>
              <h5>نسبه النجاح</h5>
              <p>98%</p>
            </div>
            <div className="num-gradu">
              <div className="icon-coin-dollar"></div>
              <h5>
                عدد الخريجين
                <br />
                التى تم توظيفهم
              </h5>
              <p>51.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;