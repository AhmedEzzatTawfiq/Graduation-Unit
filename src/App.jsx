import "./App.css";
import "../public/style.css";
import Header from "./components/1-Header/Header";
import Unit from "./components/2-Uint/Unit";
import Footer from "./components/3-Footer/Footer";
import Hero from "./Pages/2-Hero/Hero";
import Homeheader from "./Headers/Home-header/Homeheader";
import Graduateheader from "./Headers/graduate-header/Graduateheader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './Pages/3-Loginpage/Loginpage';
import Graduate from "./components/4-Graduate/Graduate";
import EventHeader from './Headers/Event-Header/EventHeader';
import Event from "./components/5-Event/Event";
import Train from "./components/6-Train/Train";
import AcademyHeader from "./Headers/AcademyHeader/AcademyHeader";
import Academy from "./components/7-Academy/Academy";
import AcademyLogin from '../src/Pages/4-AcademyLogin/AcademyLogin';
import NewLoginpage from "./Pages/3-NewLoginpage/NewLoginpage";
import Contact from "./Pages/5-Contact/Contact";
import StudentLogin from "./Pages/6-StudentLogin/StudentLogin";
import Student from "./components/8-Student/Student";
import StudentHeader from "./Headers/StudentHeader/StudentHeader";
import Info from "./components/9-Info/Info";
import CreateJob from "./components/10-CreateJob/CreateJob";
import NewLoginacademy from "./Pages/7-NewLoginacademy/NewLoginacademy";
import Projects from "./components/11-Projects/Projects";
import ProjectHeader from "./Headers/ProjectHeader/ProjectHeader";
import Form from "./components/12-Form/Form";
import Formm from "./components/13-Formm/Formm";
import Trainn from "./components/7-Trainn/Trainn";
import GraduateForm from "./components/14-GraduateForm/GraduateForm";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <Homeheader />
                <Hero />
                <Footer />
              </div>
            }
          />
        
          <Route
            path="/login"
            element={
              <div>
                <Loginpage />
              </div>
            }
          />
          <Route
            path="/newlogin"
            element={
              <div>
                <NewLoginpage />
              </div>
            }
          />
          <Route
            path="/academylogin"
            element={
              <div>
                <AcademyLogin />
              </div>
            }
          />
          <Route
            path="/newloginacademy"
            element={
              <div>
                <NewLoginacademy />
              </div>
            }
          />
          <Route
            path="/studentlogin"
            element={
              <div>
                <StudentLogin />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Contact />
              </div>
            }
          />
          <Route
            path="/graduateform"
            element={
              <div>
                <GraduateForm />
              </div>
            }
          />
          <Route
            path="/graduate"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "110vh",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <Graduateheader />
                <Graduate />
                
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <ProjectHeader />
                <Projects />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/student"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "120vh",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <StudentHeader />
                <Student />
                
              </div>
            }
          />
          <Route
            path="/info"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/academy.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <AcademyHeader />
                <Info />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/createjob"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/academy.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <AcademyHeader />
                <CreateJob />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/form/:id"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <Form />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/form2/:id"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <Formm />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/academy"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/academy.jpg')`,
                  height: "120vh",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <AcademyHeader />
                <Academy />
                
              </div>
            }
          />
          <Route
            path="/event"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <EventHeader />
                <Event />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/event2"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <StudentHeader />
                <Event />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/train"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <EventHeader />
                <Train />
                <Footer />
                
              </div>
            }
          />
          
          <Route
            path="/train2"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <StudentHeader />
                <Trainn />
                <Footer />
                
              </div>
            }
          />
          <Route
            path="/unit"
            element={
              <div
                style={{
                  backgroundImage: `url('../../../src/assets/graduate.jpg')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <Header />
                <Unit />
                <Footer />
              </div>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
