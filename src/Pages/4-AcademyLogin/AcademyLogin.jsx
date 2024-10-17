import React from "react";
import "./AcademyLogin.css";
import Logo from "../../assets/college-logo.jpg";
import Lottie from "lottie-react";
import graduateAnimation from "../../animation/graduate.json";
import graduationHat from "../../assets/g-hat.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import { Bars } from "react-loader-spinner";

const Loginpage = () => {
  const [menu, setMenu] = useState("unit");
  const [serverError, setServerError] = useState(null);
  const nav = useNavigate();

  const [loginStudentData, setLoginStudentData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState(null);

  const [Loader, setLoader] = useState(false);

  function handleInputChnage(e) {
    let tmp = { ...loginStudentData };
    tmp[e.target.name] = e.target.value;
    setLoginStudentData(tmp);
  }


  function validData(data) {

    const schema = Joi.object({
      email: Joi.string().required().messages({
        'string.empty': 'Email is required',
      }),
      password: Joi.string().required().messages({
        'string.empty': 'password is required',
      })
    })

    return schema.validate(data, { abortEarly: false })

  }


  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    const validateResult = validData(loginStudentData);
    if (validateResult.error) {
      setErrors(validateResult.error.details);
      setLoader(false);
    }
    else {
      axios.post("https://graduationproject-98zn.onrender.com/auth/company-login", loginStudentData).then(res => {
        console.log(res.data);
        localStorage.setItem("userToken", res.data.loggedUser.token);
        nav("/academy");

        setLoader(false);

      }).catch(err => {
        console.log(err.response.data.ErrorMsg);
        setServerError(err.response.data.ErrorMsg[0]);
        setLoader(false);
      })
    }
  }


  return (
    <section className="l-wrapper">
      <div className="login container">
        <div className="head flex">
          <img src={Logo} alt="" />
          <a
            className="flex"
            onClick={() => {
              setMenu("/");
            }}
            href=""
          >
            <Link to="/">
              <div className="icon-arrow-left2 flex"></div>
            </Link>
            {menu === "/" ? <div></div> : <></>}
          </a>
        </div>
        <div className="under flex">
          <div className="right-side flex">
            <img src={graduationHat} alt="" />

            <form onSubmit={handleSubmit} className="loginForm flex">
              <h2 className="title" style={{ marginBottom: "1rem" }}>
                تسجيل الدخول
              </h2>

              <ul style={{
                width: '100%'
              }}>
                {
                  errors?.map((error, i) => <li key={i} className="error">
                    {
                      error.message
                    }
                  </li>
                  )
                }
              </ul>
              <ul style={{
                width: '100%'
              }}>
                {
                  serverError?.map((error, i) => <li key={i} className="error">
                    {
                      error.message
                    }
                  </li>
                  )
                }
              </ul>
              <div className="input-field flex">
                <div className="icon-user"></div>
                <input
                  className="LoginInput"
                  type="text"
                  name="email"
                  onChange={handleInputChnage}
                  placeholder="البريد الالكترونى"
                />
              </div>
              <div className="input-field flex">
                <div className="icon-lock_outline"></div>
                <input
                  className="LoginInput"
                  type="password"
                  name="password"
                  onChange={handleInputChnage}
                  placeholder="كلمه المرور"
                />
              </div>

              <button
                onClick={() => {
                  setMenu("academy");
                }}
                href=""
                className="btn flex"
              >
                تسجيل تسجيل
                {menu === "academy" ? <div></div> : <></>}
              </button>
              <h6 className="flex">
                ليس لديك حساب؟{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {
                    setMenu("newloginacademy");
                  }}
                  href=""
                  className="btn flex"
                >
                  <Link to="/newloginacademy">اشتراك</Link>
                  {menu === "newloginacademy" ? <div></div> : <></>}
                </span>
              </h6>
            </form>
          </div>
          <div className="left-side">
            <div className="icon">
              <Lottie className="graduate" animationData={graduateAnimation} />
            </div>
          </div>
        </div>
        {
          Loader && <div className="loader">
            <Bars width={100} height={100} color="blue" />
          </div>
        }
      </div>
    </section>
  );
};

export default Loginpage;
