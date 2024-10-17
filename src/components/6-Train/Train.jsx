
import axios from "axios";
import "./Train.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";

const Train = () => {
  const [menu, setMenu] = useState("unit");

  const [data, setData] = useState(null);




  useEffect(() => {

    axios.get("https://graduationproject-98zn.onrender.com/job/getAllJobs").then(res => {
      setData(res.data.allJobs)
    }).catch(err => {
      console.log(err);
    })

  }, [])

  return (
    <section className="t-wrapper">
      <div className="train container flex">
        <div className="first-h flex">
          <div className="about-unit flex">
            <h4>تدريبات ووظائف</h4>
          </div>
        </div>
        {
          data ? data.map((item, i) => <div key={i} className="third-h flex">
            <div className="content flex">
              <div className="name flex" style={{ marginBottom: "2rem" }}>
                <h5>
                  المسمى الوظيفى <span className="red-star">*</span>
                </h5>
                <h4>{item.title}</h4>
              </div>
              <div className="feild flex">
                <h5>
                  اسم الشركه <span className="red-star">*</span>
                </h5>
                <h4>{item.companyUser[0].companyName}</h4>
              </div>
              <div className="breif flex">
                <h5>
                  نوع الوظيفه <span className="red-star">*</span>
                </h5>
                <h4>{item.hiringType}</h4>
              </div>
              <div className="breif flex">
                <h5>
                  المؤهلات <span className="red-star">*</span>
                </h5>
                <h4 className="flex" style={{ flexDirection: "column", textAlign: "center" }}>
                  {item.qualifications.map(qual => qual + ' ')}
                </h4>
              </div>
            </div>
            <button onClick={() => {
              setMenu("form2");
            }}
            >
              <Link to={`/form/${item._id}`}>تقديم</Link>
              {/* {menu === "form2" ? <div></div> : <></>} */}
              </button>
          </div>) : <div className="loader">
            <Bars width={100} height={100} color="blue" />
          </div>

        }
      </div>
    </section>
  );
};

export default Train;


