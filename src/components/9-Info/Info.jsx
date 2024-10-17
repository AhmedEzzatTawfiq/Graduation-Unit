import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <section className="ii-wrapper">
      <div className="container info flex">
        <div className="second-h">
          {/* Header */}
          <header className="header">
            <h1>معلومات حول عملك (العربيه)</h1>
          </header>

          {/* Main content */}
          <div className="main-contentt">
            <form>
              {/* Input fields */}
              <div className="form-group flex">
                <div className="first-input">
                  <label htmlFor="id1">
                    اسم الشركه <span className="red-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="id1"
                    name="id1"
                    className="input-field"
                    required
                  />
                </div>
                <div className="addlogo">
                  <button className="icon-download"></button>
                  <h3>اضف شعارك</h3>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="id2">
                  مجال العمل <span className="red-star">*</span>
                </label>
                <input
                  type="text"
                  id="id2"
                  name="id2"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id3">
                  الصفحه الرسميه <span className="red-star">*</span>
                </label>
                <input
                  type="text"
                  id="id3"
                  name="id3"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id4">
                  نبذه عن العمل <span className="red-star">*</span>
                </label>
                <textarea
                  type="text"
                  id="id4"
                  name="id4"
                  className="input-field"
                  required
                />
              </div>

              {/* Submit button */}
              <div className="form-groupp" style={{ textAlign: "center" }}>
                <button type="submit" className="submit-button">
                  اضافه
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
