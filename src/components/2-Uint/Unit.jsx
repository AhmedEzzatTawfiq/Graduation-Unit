import React from "react";
import "./Unit.css";

const Unit = () => {
  return (
    <section className="u-wrapper flex">
      <div className="unit container">
        <div className="top flex">
          <div className="icon-commenting"></div>
          <h2>عن الوحدة</h2>
          <div className="icon-eye1"></div>
        </div>
        <div className="bottom flex">
          <div className="left-side">
            <h3>رسالة الوحدة</h3>
            <p>
              اهلا وسهلا بخريجي كليه الحاسبات والمعلومات
              جامعة الزقازيق نفخر دوما بنجاحك ونشيد بانجازاتك
              عزيزي الخريج تقدم بين يديك وحده خريجي كليه الحاسبات
              والمعلومات جامعة الزقازيق والتي تسعي
              من خلالها لتقديم الخدمات المتنوعة الخاصة بكم وتسهيل التواصل
              الفعال
            </p>
          </div>
          <div className="white-line"></div>
          <div className="right-side">
            <h3>رؤية الوحدة</h3>
            <p>
              تطمح کلیه حاسبات ومعلومات الزقازيق إلى بناء شراكة فعالة ومستدامة
              بين الجامعة وخريجيها وأصحاب المصلحة في المجتمع.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unit;

