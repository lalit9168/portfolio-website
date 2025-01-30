import React from "react";
import { FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiTensorflow } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const skills = [
  { name: "Java", icon: <FaJava className="text-primary" /> },
  { name: "Python", icon: <FaPython className="text-warning" /> },
  { name: "DBMS", icon: <FaDatabase className="text-danger" /> },
  { name: "SQL", icon: <SiMysql className="text-info" /> },
  { name: "Machine Learning", icon: <SiTensorflow className="text-warning" /> },
  { name: "OOPs", icon: <FaDatabase className="text-danger" /> },
  { name: "HTML", icon: <FaHtml5 className="text-danger" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-primary" /> },
  { name: "JavaScript", icon: <FaJs className="text-warning" /> },
  { name: "React", icon: <FaReact className="text-info" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-success" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-success" /> },
  { name: "Express.js", icon: <SiExpress className="text-dark" /> },
  { name: "Git / GitHub", icon: <FaGithub className="text-secondary" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4 fw-bold text-uppercase">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm border-0 p-3 text-center animate__animated animate__fadeInUp"
                   style={{
                     transition: "transform 0.3s ease-in-out",
                     borderRadius: "15px",
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                   onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                <div className="fs-1 mb-2">{skill.icon}</div>
                <h6 className="fw-bold text-uppercase" style={{ fontSize: "0.9rem" }}>{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
