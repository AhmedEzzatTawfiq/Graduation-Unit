import "./NewLoginacademy.css";
import Logo from "../../assets/college-logo.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Bars } from "react-loader-spinner";

const NewLoginacademy = () => {
  const [menu, setMenu] = useState("unit");


  const nav = useNavigate();

  const [loginStudentData, setLoginStudentData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    universityEmail: "0",
    nationalNumber: "0",
    address: "",
    gender: "male",
    age: 27,
    phoneNumber: "",
    role: "Company",
    companyName: "ifuture"
  });

  const [errors, setErrors] = useState(null);

  const [Loader, setLoader] = useState(false);

  function handleInputChnage(e) {
    let tmp = { ...loginStudentData };

    if (e.target.name === "password") {
      tmp['confirmPassword'] = e.target.value;
    }
    if (e.target.name === "address") {
      tmp['address'] = [e.target.value];
      setLoginStudentData(tmp)
      return
    }

    tmp[e.target.name] = e.target.value;
    setLoginStudentData(tmp);
    console.log(loginStudentData);
  }


  function validData(data) {

    const schema = Joi.object({
      userName: Joi.string().required().messages({
        'string.empty': 'user name is required',
      }),
      email: Joi.string().required().messages({
        'string.empty': 'email is required',
      }),
      password: Joi.string().required().messages({
        'string.empty': 'password is required',
      }),
      confirmPassword: Joi.string(),
      universityEmail: Joi.string(),
      nationalNumber: Joi.string(),
      address: Joi.any().required().messages({
        'string.empty': 'address is required',
      }),
      gender: Joi.string(),
      age: Joi.number(),
      phoneNumber: Joi.string().required().messages({
        'string.empty': 'phone number is required',
      }),
      role: Joi.string(),
      companyName: Joi.string().required().messages({
        'string.empty': 'company name is required',
      }),
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
      axios.post("https://graduationproject-98zn.onrender.com/auth/signup", loginStudentData).then(res => {
        console.log(res.data);
        // localStorage.setItem("userToken", res.data.loggedUser.token);
        toast.success("confirm email, then login");
        setErrors(null);
        nav("/academylogin");
        setLoader(false);
      }).catch(err => {
        setErrors(['something went wrong']);
        console.log(err.response.data);
        setLoader(false);
      })
    }
  }
  return (
    <section className="lll-wrapper">
      <ToastContainer />
      <div className="loginn container">
        <div className="head flex">
          <img src={Logo} alt="" />
          <a
            className="flex"
            onClick={() => {
              setMenu("academylogin");
            }}
            href=""
          >
            <Link to="/academylogin">
              <div className="icon-arrow-left2 flex"></div>
            </Link>
            {menu === "academylogin" ? <div></div> : <></>}
          </a>
        </div>
        <div className="under flex">
          <form onSubmit={handleSubmit} className="login-form">
            <h2
              style={{
                borderBottom: "1px solid black",
                textAlign: "center",
                marginBottom: "1.7rem",
              }}
            >
              تسجيل حساب جديد ( شركه )
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
            <div className="form-group">
              <label htmlFor="id">اسم الشركه</label>
              <input
                onChange={handleInputChnage}
                name="companyName" type="text" id="id" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">العنوان</label>
              <input onChange={handleInputChnage}
                type="text" id="address" name="address" required />
            </div>
            <div className="emailnumber flex">
              <div className="form-group">
                <label htmlFor="gmail">البريد الاكترونى</label>
                <input onChange={handleInputChnage}
                  type="email" id="gmail" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="gmail">التلفون</label>
                <input onChange={handleInputChnage}
                  type="text" id="phone" name="phoneNumber" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="user">اسم المستخدم</label>
              <input onChange={handleInputChnage}
                type="text" id="user" name="userName" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">كلمه المرور</label>
              <input onChange={handleInputChnage}
                type="password" id="passworder" name="password" required />
              <div className="icon-eye1"></div>
            </div>
            <button type="submit">تسجيل</button>
          </form>
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

export default NewLoginacademy;
