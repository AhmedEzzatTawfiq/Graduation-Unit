import "./StudentLogin.css";
import Logo from "../../assets/college-logo.jpg";
import Lottie from "lottie-react";
import graduateAnimation from "../../animation/graduate.json";
import graduationHat from "../../assets/g-hat.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { Bars } from "react-loader-spinner";
import axios from "axios";

const Loginpage = () => {
  const [menu, setMenu] = useState("unit");


  const nav = useNavigate();

  const [loginStudentData, setLoginStudentData] = useState({
    universityEmail: '',
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
      universityEmail: Joi.string().regex(/^.+@fci\.zu\.edu\.eg$/).required().messages({
        "string.pattern.base": 'University email is not valid',
        'string.empty': 'University Email is required',
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
      axios.post("https://graduationproject-98zn.onrender.com/auth/student-login", loginStudentData).then(res => {
        console.log(res.data);
        localStorage.setItem("userToken", res.data.loggedUser.token);
        nav("/student");

        setLoader(false);

      }).catch(err => {
        console.log(err);
        setErrors([err.response.data.ErrorMsg])
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
              setMenu("/student");
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
                      error.message || error
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
                  name="universityEmail"
                  onChange={handleInputChnage}
                  placeholder="الايميل الجامعي"
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
                href=""
                className="btn flex"
              >
                تسجيل الدخول
                {/* {menu === "student" ? <div></div> : <></>} */}
              </button>
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
