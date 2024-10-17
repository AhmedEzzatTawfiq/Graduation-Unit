import { useState } from "react";
import "./Contact.css";
import contact from "../../animation/contact.json";
import Lottie from "lottie-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { Bars } from "react-loader-spinner";

const Contact = () => {

  const [formData, setFormData] = useState({
    role: "Student",
    name: "",
    email: "",
    message: ""
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const [Loader, setLoader] = useState(false);

  function handleInputChnage(e) {

    let tmp = { ...formData };
    tmp[e.target.name] = e.target.value;
    setFormData(tmp);
  }


  function validData(data) {

    const schema = Joi.object({
      name: Joi.string().required().messages({
        'string.empty': 'name is required',
      }),
      email: Joi.string().required().messages({
        'string.empty': 'email is required',
      }),
      message: Joi.string().required().messages({
        'string.empty': 'message is required',
      }),
      role: Joi.string()

    })

    return schema.validate(data, { abortEarly: false })

  }


  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    const validateResult = validData(formData);
    if (validateResult.error) {
      setErrors(validateResult.error.details);
      setLoader(false);
    }
    else {
      axios.post("https://graduationproject-98zn.onrender.com/contact-us", formData).then(res => {
        // localStorage.setItem("userToken", res.data.loggedUser.token);
        setErrors(null);
        toast.success("message sent");
        setLoader(false);
        // nav("/graduate");
      }).catch(err => {
        setErrors([err.response.data.ErrorMsg]);
        setLoader(false);
      })
    }

  }




  return (
    <section className="c-wrapper flex">
      <div className="head flex">
        <a className="flex" onClick={() => window.history.back()} href="#">
          <div className="icon-arrow-left2 flex"></div>
        </a>
      </div>
      <div className="contact container">
        <header style={{ height: "2.5rem", backgroundColor: "blue" }} className="flex">
          <div className="white-line"></div>
          <div className="white-line"></div>
          <div className="white-line"></div>
          <div className="white-line"></div>
        </header>
        <div className="under flex">
          <div className="left-side">
            <h1>Contact Us</h1>

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
            <form onSubmit={handleSubmit}>
              <label className="how flex">How are you</label>
              <div className="form-group">
                <div className="flex">
                  <input
                    type="radio"
                    checked
                    name="role"
                    value="Student"
                    onChange={handleInputChnage}
                    id="student"
                  />
                  <label htmlFor="student">Student</label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    name="role"
                    value="Graduate"
                    onChange={handleInputChnage}
                    id="graduate"
                  />
                  <label htmlFor="graduate">Graduate</label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="company"
                    name="role"
                    value="Company"
                    onChange={handleInputChnage}
                  />
                  <label htmlFor="company">Company</label>
                </div>
              </div>
              <div className="threeinputs">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    name="name"
                    onChange={handleInputChnage}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    name="email"
                    onChange={handleInputChnage}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Type your message here..."
                    rows="5"
                    cols="39"
                    name="message"
                    onChange={handleInputChnage}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{ backgroundColor: "blue", color: "white" }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="right-side">
            <Lottie className="contacttt" animationData={contact} />
          </div>
        </div>
        <div style={{
          backgroundColor: 'red'
        }}>

          <ToastContainer />
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

export default Contact;
