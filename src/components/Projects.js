import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: 'Optical Store Management System',
      image: 'optical.webp',
      description: `This project is a web application developed using the MERN stack for an optical store management system. 
      It includes features like product management, stock updates, and customer interaction.`,
    },
    {
      title: 'Gait Pattern Analysis Using Computer Vision',
      image: 'gait.jpeg',
      description: `A system to analyze walking patterns using computer vision and machine learning. 
      It detects gait patterns such as Steppage, Hemiplegia, and Parkinson’s disease.`,
    },
    {
      title: 'Food Packaging Defect Detection and Segregation',
      image: 'food.jpeg',
      description: `This project focuses on detecting and segregating food packaging defects using YOLOv4, 
      identifying improper labeling, material issues, and incorrect capping.`,
    },
  ];

  const openPopup = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  };

  const closePopup = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
  };

  return (
    <section id="projects" style={styles.projectsSection}>
      <h2 style={styles.projectsTitle}>Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard} className="card shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              style={styles.projectImage}
              className="card-img-top"
            />
            <div className="card-body">
              <h3 style={styles.projectTitle} className="card-title">{project.title}</h3>
              <button style={styles.viewDetailsButton} onClick={() => openPopup(project)} className="btn btn-primary">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          style={styles.popupOverlay}
          onClick={closePopup}
        >
          <div
            style={styles.popup}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.closeButton} onClick={closePopup}>&times;</button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              style={styles.popupImage}
            />
            <h3 style={styles.popupTitle}>{activeProject.title}</h3>
            <p style={styles.popupDescription}>{activeProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  projectsSection: {
    backgroundColor: '#f4f4f9', // Outer flexbox background color
    textAlign: 'center',
    padding: '6rem 2rem',
    marginBottom: '4rem',
    width: '100%',
    margin: '0 auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  projectsTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  projectsContainer: {
    backgroundColor: '#fff', // Inner flexbox background color
    display: 'flex',
    flexWrap: 'wrap',
    gap: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    padding: '60px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    height: '120%', // Increased height for better alignment
  },
  projectCard: {
    background: '#fff', // Card background
    borderRadius: '15px',
    width: '280px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  projectTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  popupOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  popup: {
    background: '#fff',
    borderRadius: '20px',
    padding: '2rem',
    width: '80%',
    maxWidth: '900px',
    maxHeight: '95%',
    overflowY: 'auto',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.5rem',
    color: '#333',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  popupImage: {
    width: '55%',
    height: '370px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  popupTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  popupDescription: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#555',
    textAlign: 'left',
  },
};

export default Project;
