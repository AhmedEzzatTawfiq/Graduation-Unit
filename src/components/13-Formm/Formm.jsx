
import './Formm.css';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';

const Formm = () => {
  const [menu, setMenu] = useState("unit");


  console.log(0);

  const { id } = useParams();


  const [Loader, setLoader] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);

    const token = localStorage.getItem("userToken");

    axios.patch(`https://graduationproject-98zn.onrender.com/job/applyForJob/${id}`, {}, {
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(res => {
        console.log(res.data);

        toast.success("job applied", {
          autoClose: 2000,
          onClose: () => {
            window.history.back();
          }
        });

        setLoader(false);

      }).catch(err => {
        console.log(err);

        toast.error("something went wrong!", {
          autoClose: 2000,
        });

        setLoader(false);

      })

  }



  return (
    <section className="iiii-wrapper">
      <ToastContainer />
      <div className="arrow flex">
        <div></div>
        <a
          className="flex"
          onClick={() => {
            setMenu("train2");
          }}
          href=""
        >
          <Link to="/train2">
            <div className="icon-arrow-left2 flex"></div>
          </Link>
          {menu === "train2" ? <div></div> : <></>}
        </a>
      </div>
      <div className="container info flex">
        <div className="second-h">

          {/* Header */}
          <header className="header">
            <h1>التقدم للوظيفه</h1>
          </header>

          {/* Main content */}
          <div className="main-contentt">
            <form onSubmit={handleSubmit} >
              {/* Input fields */}
              <div className="form-group">
                <label htmlFor="id1">الاسم <span className="red-star">*</span></label>
                <input
                  type="text"
                  id="id1"
                  name="id1"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id2">الرقم القومى <span className="red-star">*</span></label>
                <input
                  type="text"
                  id="id2"
                  name="id2"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="id3"> سنه التخرج <span className="red-star">*</span></label>
                <input
                  type="text"
                  id="id3"
                  name="id3"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-group" >
                <label htmlFor="id4">Cv <span className="red-star">*</span></label>
                <input
                  style={{ width: "9rem" }}
                  type="text"
                  id="id4"
                  name="id4"
                  className="input-field"
                  required
                />
                <div className="icon-download"></div>
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
        {
          Loader && <div className="loader">
            <Bars width={100} height={100} color="blue" />
          </div>
        }
      </div>
    </section>
  );
};

export default Formm;
