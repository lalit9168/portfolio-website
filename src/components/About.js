import React from "react";

const About = () => {
  return (
    <>
      <style>
        {`
          #about {
            background: #f4f4f9;
            padding: 30px 0;
            text-align: center;
          }

          .about-section {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row; /* Image on the left and text on the right */
            width: 80%;
            margin: 0 auto;
            max-width: 1200px;
            background: #fff;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .about-section:hover {
            transform: translateY(-10px);
          }

          .about-text {
            max-width: 600px;
            text-align: left;
            margin-left: 2cm; /* Gap between image and text */
            padding: 20px;
          }

          .about-heading {
            font-size: 2.5rem;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;
            text-align: left;
          }

          .about-content {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #555;
            text-align: left;
          }

          .about-description {
            margin-bottom: 20px;
            color: #777;
          }

          .about-img {
            width: 250px; /* Image size */
            height: 300px; /* Image size */
            border-radius: 60%;
            object-fit: cover;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .about-section {
              flex-direction: column; /* Stack content on smaller screens */
              text-align: center;
            }

            .about-img {
              width: 200px; /* Adjusted for smaller screen */
              height: 200px; /* Adjusted for smaller screen */
              margin-top: 20px;
            }

            .about-heading {
              font-size: 2rem;
            }

            .about-content {
              font-size: 1rem;
            }
          }
        `}
      </style>
      <section id="about">
        <div className="about-section">
          {/* Profile Image */}
          <img src="/lalit.png" alt="Profile" className="about-img" />
          {/* About Me Text Box */}
          <div className="about-text">
            <h2 className="about-heading">About Me</h2>
            <div className="about-content">
              <p className="about-description">
                I am a passionate software developer with hands-on experience in
                building full-stack web applications. I specialize in MERN stack
                (MongoDB, Express, React, Node.js) and have a strong foundation
                in front-end and back-end development. My goal is to leverage
                technology to solve real-world problems and create meaningful
                solutions.
              </p>
              <p className="about-description">
                With a strong drive for continuous learning, I have worked on
                various projects, including an Optical Store Management System
                using the MERN stack, a Gait Pattern Analysis system for
                healthcare, and Food Packaging Defect Detection using YOLO. I
                enjoy collaborating with teams to develop scalable and efficient
                solutions that have a tangible impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
