import { useState} from 'react';
import './Projects.css';
import gUnit from '../../assets/GraduateUnit.jpeg';
import { saveAs } from 'file-saver';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Function to fetch projects data
  const fetchProjects = () => {
    fetch('https://graduationproject-98zn.onrender.com/getAllGraduationProjects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  };

  // Function to download projects data
  const downloadProjects = () => {
    fetch('https://graduationproject-98zn.onrender.com/getAllGraduationProjects')
      .then(response => response.json())
      .then(data => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        saveAs(blob, 'projects.json');
      })
      .catch(error => console.error('Error downloading projects:', error));
  };

  return (
    <section className='p-wrapper'>
      <div className="container projects flex">
        <div className="first-h flex">
          <div className="head">
            <img src={gUnit} alt="" />
            <h3>Graduates Unit</h3>
            <p>قسم : نظم المعلومات</p>
          </div>
          <div className="stars flex">
            <div className="starsline flex">
              <div className="icon-star-full" style={{color:"#fff"}}></div>
              <div className="icon-star-full"></div>
              <div className="icon-star-full"></div>
              <div className="icon-star-full"></div>
            </div>
            <span>(تقييمات120)</span>
          </div>
          <div className="logos flex">
            <button className="first" onClick={fetchProjects}>
              <div className="icon-book-open"></div>
              <p>قراءة</p>
            </button>
            <button className="second" onClick={downloadProjects}>
              <div className="icon-download"></div>
              <p>تحميل</p>
            </button>
          </div>
        </div>
        {projects.length > 0 && (
          <div className="projects-list">
            {projects.map(project => (
              <div key={project.id} className="project-item">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
