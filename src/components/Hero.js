import React from 'react';

const Hero = () => {
  return (
    <>
      <style>
        {`
          #hero {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 72, 102, 0.85)); /* Dark blue gradient */
            color: white;
            padding: 130px 0;
            text-align: center;
            animation: fadeIn 1.5s ease-out;
            background-attachment: fixed;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          h2 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 3px;
            animation: slideInFromLeft 1.5s ease-out;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); /* Text shadow for emphasis */
          }

          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          p {
            font-size: 1.4rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            animation: fadeInText 1s ease-out;
            margin-bottom: 30px;
            line-height: 1.5;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
          }

          @keyframes fadeInText {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-button {
            display: inline-block;
            margin-top: 30px;
            padding: 14px 30px;
            font-size: 1.2rem;
            background-color: #ff5722; /* Warm vibrant color */
            color: #fff;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            letter-spacing: 1px;
            border: 2px solid #ff5722; /* Matching border */
          }

          .hero-button:hover {
            background-color: #e64a19; /* Darker shade on hover */
            color: #f9fafb; /* Light text color */
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            #hero {
              padding: 80px 20px;
            }

            h2 {
              font-size: 2.8rem;
            }

            p {
              font-size: 1.2rem;
            }

            .hero-button {
              font-size: 1rem;
              padding: 12px 24px;
            }
          }
        `}
      </style>

      <section id="hero">
        <h2>Hello, I'm LALIT CHAUDHARI</h2>
        <p>I am a passionate Web Developer focused on building innovative and efficient solutions.</p>
        <a href="#contact" className="hero-button">Get in Touch</a>
      </section>
    </>
  );
};

export default Hero;
