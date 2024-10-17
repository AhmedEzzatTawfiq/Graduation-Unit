import { useState } from 'react';
import './CreateJob.css';
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

const Info = () => {


  const nav = useNavigate();

  const [loginStudentData, setLoginStudentData] = useState({

    title: "",
    address: "",
    hiringType: "hybrid",
    qualifications: "",

  });

  const [errors, setErrors] = useState(null);

  const [Loader, setLoader] = useState(false);

  function handleInputChnage(e) {
    let tmp = { ...loginStudentData };
    if (e.target.name === "qualifications") {
      let value = e.target.value.split(" ");
      tmp['qualifications'] = value;
      setLoginStudentData(tmp);
      return
    }
    tmp[e.target.name] = e.target.value;
    setLoginStudentData(tmp);

  }


  function validData(data) {

    const schema = Joi.object({

      title: Joi.string().required().messages({
        'string.empty': 'title is required',
      }),
      address: Joi.string().required().messages({
        'string.empty': 'address is required',
      }),
      hiringType: Joi.string().required().messages({
        'string.empty': 'hiring type is required',
      }),
      qualifications: Joi.any().required().messages({
        'string.empty': 'qualifications is required',
      }),
      companyName: Joi.any()
    })

    return schema.validate(data, { abortEarly: false })

  }


  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    const validateResult = validData(loginStudentData);
    if (validateResult.error) {
      setErrors(validateResult.error.details);
      console.log(0);
      setLoader(false);
    }
    else {
      const token = localStorage.getItem("userToken");

      console.log(token);
      axios.post("https://graduationproject-98zn.onrender.com/job/createJob", loginStudentData, {
        headers: {
          "Authorization": `${token}`
        }
      }).then(res => {
        console.log(res.data);
        toast.success("job added successfully");
        setLoader(false);
        // nav("/graduate");
      }).catch(err => {
        // setErrors([err.response.data.ErrorMsg]);
        console.log(err.response.data);
        setLoader(false);
      })
    }

  }

  return (
    <section className="i-wrapper">
      <ToastContainer />
      <div className="container info flex">
        <div className="second-h">

          {/* Header */}
          <header className="header">
            <h1>انشاء اعلان وظيفى</h1>
          </header>

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

          {/* Main content */}
          <div className="main-contentt">
            <form onSubmit={handleSubmit}>
              {/* Input fields */}
              <div className="form-group">
                <label htmlFor="id1">المسمى الوظيفى <span className="red-star">*</span></label>
                <input
                  type="text"
                  id="id1"
                  name="title"
                  onChange={handleInputChnage}
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id3"> العنوان <span className="red-star">*</span></label>
                <input
                  type="text"
                  name="address"
                  onChange={handleInputChnage}
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id4"> نوع الوظيفه <span className="red-star">*</span></label>
                <select className='input-field' onChange={handleInputChnage} name="hiringType" id="">
                  <option value="hybrid">hybrid</option>
                  <option value="on-site">on-site</option>
                  <option value="remote">remote</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="id5">المؤهلات  <span className="red-star">*</span></label>
                <input
                  type="text"
                  id="id5"
                  name="qualifications"
                  onChange={handleInputChnage}

                  className="input-field"
                  required
                />
              </div>

              {/* Submit button */}
              <div className="form-groupp" style={{ textAlign: "center" }}>
                <button type="submit" className="submit-button">
                  انشاء
                </button>
              </div>
            </form>
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

export default Info;
