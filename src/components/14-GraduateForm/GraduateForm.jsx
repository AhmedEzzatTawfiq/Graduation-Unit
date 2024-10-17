import React from "react";
import "./GraduateForm.css";
import Logo from "../../assets/college-logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const GraduateForm = () => {
  const [menu, setMenu] = useState("unit");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="gf-wrapper">
      <div className="container gform flex">
        <div className="head flex">
          <a
            className="flex"
            onClick={() => {
              setMenu("graduate");
            }}
            href=""
          >
            <Link to="/graduate">
              <div className="icon-arrow-left2 flex"></div>
            </Link>
            {menu === "graduate" ? <div></div> : <></>}
          </a>
          <img src={Logo} alt="" />
        </div>
        <div className="under">
          <div className="img">
            <label htmlFor="imageUpload" className="file-upload-button">
              Upload Your Photo
            </label>
            <input
              type="file"
              accept="image/*"
              id="imageUpload"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {image && <img src={image} alt="Uploaded Image" />}
          </div>

          {/* Header */}
          <header className="header">
            <h1 style={{ marginBottom: "8rem" }}>Graduation Form</h1>
          </header>

          {/* Main content */}
          <section className="main-content">
            <form>
              {/* Input fields */}
              <div className="namee flex">
                <div className="form-group">
                  <label htmlFor="id1">Name</label>
                  <input
                    type="text"
                    id="id1"
                    name="id1"
                    className="input-field"
                    required
                    placeholder="Graduate name in English"
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "#fff" }} htmlFor="id1">
                    .
                  </label>
                  <input
                    type="text"
                    id="id2"
                    name="id2"
                    className="input-field"
                    required
                    placeholder="Graduate name in Arabic"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="id3">Phone</label>
                <input
                  type="text"
                  id="id3"
                  name="id3"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id4">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  required
                />
              </div>
              <div className="g-info flex">
                <div className="form-group">
                  <label htmlFor="id5">National number</label>
                  <input
                    type="text"
                    id="id5"
                    name="id5"
                    className="input-field"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="id6">University-email</label>
                  <input
                    type="text"
                    id="id6"
                    name="id6"
                    className="input-field"
                    required
                  />
                </div>
              </div>
              <div className="born flex">
                <div className="form-group">
                  <label htmlFor="id7">Place of birth</label>
                  <input
                    type="text"
                    id="id7"
                    name="id7"
                    className="input-field"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="id8">Date of birth</label>
                  <input
                    type="text"
                    id="id8"
                    name="id8"
                    className="input-field"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="id9">Nationality</label>
                  <input
                    type="text"
                    id="id9"
                    name="id9"
                    className="input-field"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="id10">Specialization (department)</label>
                <div className="custom-select">
                  <select
                    id="id10"
                    name="technology"
                    className="input-field"
                    required
                  >
                    <option className="first-option" value="" disabled selected>
                      Select Department
                    </option>
                    <option value="web">Web</option>
                    <option value="android">Android</option>
                    <option value="flutter">Flutter</option>
                  </select>
                </div>
              </div>
              <div className="college flex">
                <div className="form-group">
                  <label htmlFor="id9">College name</label>
                  <input
                    type="text"
                    id="id9"
                    name="id9"
                    className="input-field"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="id10">Graduation year</label>
                  <div className="custom-select">
                    <select
                      id="id10"
                      name="technology"
                      className="input-field"
                      required
                    >
                      <option
                        className="first-option"
                        value=""
                        disabled
                        selected
                      >
                        Select year
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
              </div>
              <div className="form-group">
                <label htmlFor="id9">Post-graduation courses</label>
                <input
                  type="text"
                  id="id9"
                  name="id9"
                  className="input-field"
                  required
                />
              </div>
              <div className="if-work flex">
                <p>*If you work</p>
                <div className="job flex">
                  <div className="form-group">
                    <label htmlFor="id9">Company name</label>
                    <input
                      type="text"
                      id="id9"
                      name="id9"
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="id9">Job title</label>
                    <input
                      type="text"
                      id="id9"
                      name="id9"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="id10">Tracks</label>
                <div className="custom-select">
                  <select
                    id="id10"
                    name="technology"
                    className="input-field"
                    required
                  >
                    <option className="first-option" value="" disabled selected>
                      Select your Track
                    </option>
                    <option value="web">Web Development</option>
                    <option value="android">Android Development</option>
                    <option value="flutter">Flutter Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="network-security">Network Security</option>
                    <option value="ui-ux">UI/UX</option>
                  </select>
                </div>
              </div>
              <div className="last flex">
                <div className="form-group">
                  <label className="gender-label" htmlFor="gender">
                    Gender
                  </label>
                  <div className="gender-options">
                    <div className="flex male">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        required
                      />
                      <label htmlFor="male">Male</label>
                    </div>

                    <div className="flex female">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="form-group cv flex">
                  <label htmlFor="id9">Upload your Cv</label>
                  <input
                    type="text"
                    id="id9"
                    name="id9"
                    className="input-field"
                    required
                  />
                  <div className="icon-upload"></div>
                </div>
              </div>

              {/* Submit button */}
              <div className="form-group" style={{ textAlign: "center" }}>
                <button
                  onClick={() => {
                    setMenu("search");
                  }}
                  href=""
                  className="submit-button"
                >
                  <Link to="/search">SEND</Link>
                  {menu === "search" ? <div></div> : <></>}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default GraduateForm;
