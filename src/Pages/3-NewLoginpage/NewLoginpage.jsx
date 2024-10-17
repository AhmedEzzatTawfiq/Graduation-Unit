import "./NewLoginpage.css";
import Logo from "../../assets/college-logo.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";



const NewLoginpage = () => {
  const [menu, setMenu] = useState("unit");

  const nav = useNavigate();

  const [serverErr, setServerErr] = useState(null);


  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: [
      ""
    ],
    college: {
      name: "",
      startDate: "",
      department: "",
      graduationDate: ""
    },
    gender: "male",
    age: "",
    phoneNumber: "",
    nationality: "egyptian",
    role: "Graduated",
    nationalNumber: "",

    job: {
      title: "",
      companyName: ""
    },
    postGraduateCourses: [
      ""
    ]
  })

  const [Loader, setLoader] = useState(false);

  const [errors, setErrors] = useState(null);




  function getData(e) {
    let tmp = { ...signupData };

    if (e.target.name === "address") {
      tmp['address'] = [e.target.value];
    }
    else if (e.target.name === "jobTitle") {
      tmp['job']['title'] = e.target.value;
    }
    else if (e.target.name === "jobCompanyName") {
      tmp['job']['companyName'] = e.target.value;
    }
    else if (e.target.name === "postGraduateCourses") {
      tmp['postGraduateCourses'] = e.target.value.split(' ');
    }
    else if (e.target.name === "collegeName") {
      tmp['college']['name'] = e.target.value;
    }
    else if (e.target.name === "startDate") {
      tmp['college']['startDate'] = e.target.value;
    }
    else if (e.target.name === "endDate") {
      tmp['college']['graduationDate'] = e.target.value;
    }
    else if (e.target.name === "department") {
      tmp['college']['department'] = e.target.value;
    }
    else {
      tmp[e.target.name] = e.target.value;
    }

    setSignupData(tmp)

  }

  function validData(data) {

    const schema = Joi.object({


      userName: Joi.string().required().messages({
        'string.empty': 'user name is required',
      }),
      email: Joi.string().required().messages({
        'string.empty': 'email is required',
      }),
      gender: Joi.string().required().messages({
        'string.empty': 'gender is required',
      }),
      address: Joi.any().required().messages({
        'any.empty': 'address is required',
      }),
      age: Joi.number().required().messages({
        'string.empty': 'age is required',
      }),
      phoneNumber: Joi.number().required().messages({
        'string.empty': 'phone number is required',
      }),
      nationalNumber: Joi.string().min(14).required().messages({
        'string.empty': 'national number is required',
      }),
      nationality: Joi.string(),
      role: Joi.string(),
      job: Joi.any().required().messages({
        'any.empty': 'job is required',
      }),
      postGraduateCourses: Joi.any().required().messages({
        'any.empty': 'post graduate courses is required',
      }),
      college: Joi.any(),
      password: Joi.string().min(5).required().label('password').messages({
        'string.empty': 'password is required',
      }),
      confirmPassword: Joi.string().valid(Joi.ref('password')).required().label('Confirm Password')
        .messages({ 'any.only': 'passwords do not match' }),
    })

    return schema.validate(data, { abortEarly: false })

  }


  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    setServerErr(null);
    const validateResult = validData(signupData);
    if (validateResult.error) {
      setErrors(validateResult.error.details);
      console.log(validateResult.error);
      setLoader(false);
    }
    else {
      axios.post("https://graduationproject-98zn.onrender.com/auth/signup", signupData).then(res => {
        console.log(res);
        // localStorage.setItem("userToken", res.data.user.token);
        setLoader(false);
        toast.success("sign up successfully", {
          autoClose: 2000,
          onClose: () => {
            nav("/login");
          }
        })
      }).catch(err => {

        console.log(11);

        if (Array.isArray(err.response.data.ErrorMsg[0])) {
          setServerErr(err.response.data.ErrorMsg[0]);
        } else {
          setErrors([err.response.data.ErrorMsg]);
        }

        e.target.scrollTop = 0

        setLoader(false);
      })
    }

  }




  return (
    <section className="ll-wrapper">
      <ToastContainer />
      <div className="loginn container">
        <div className="head flex">
          <img src={Logo} alt="" />
          <a
            className="flex"
            onClick={() => {
              setMenu("login");
            }}
            href=""
          >
            <Link to="/login">
              <div className="icon-arrow-left2 flex"></div>
            </Link>
            {menu === "login" ? <div></div> : <></>}
          </a>
        </div>
        <div className="under flex">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 style={{ borderBottom: '1px solid black', textAlign: 'center', marginBottom: "1.7rem" }}>تسجيل حساب جديد ( خريج )</h2>

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
            <ul style={{
              width: '100%'
            }}>
              {
                serverErr?.map((error, i) => <li key={i} className="error">
                  {
                    error.message
                  }
                </li>
                )
              }
            </ul>
            <div className="form-group">
              <label htmlFor="userName">اسم المستخدم</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={getData}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationalNumber">الرقم القومى</label>
              <input
                type="text"
                id="nationalNumber"
                name="nationalNumber"
                onChange={getData}


                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">البريد الاكترونى</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={getData}


                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">العنوان</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={getData}


                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">الجنس</label>
              <select onChange={getData}
                style={{
                  padding: '15px',
                  borderRadius: '4px'
                }} name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="age">العمر</label>
              <input
                type="text"
                id="age"
                name="age"
                onChange={getData}


                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="collegeName">اسم الكلية</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                onChange={getData}

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">تاريخ البداية</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                onChange={getData}

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">تاريخ التخرج</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={getData}

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">القسم</label>
              <input
                type="text"
                id="department"
                name="department"
                onChange={getData}

                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">رقم التليفون</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"

                onChange={getData}

                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobTitle">المسمي الوظيفي</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"

                onChange={getData}

                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobCompanyName">اسم الشركه التي تعمل بها</label>
              <input
                type="text"
                id="jobCompanyName"
                name="jobCompanyName"

                onChange={getData}

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postGraduateCourses">كورسات ما قبل التخرج</label>
              <input
                type="text"
                id="postGraduateCourses"
                name="postGraduateCourses"

                onChange={getData}

                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">كلمه المرور</label>
              <input
                type="password"
                id="password"
                name="password"

                onChange={getData}

                required
              />
              <div className="icon-eye1"></div>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">تأكيد كلمه المرور</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"

                onChange={getData}

                required
              />
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

export default NewLoginpage;
