import React from "react";

const Header = () => {
  return (
    <>
      <style>
        {`
          header {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            color: #fff;
            text-align: center;
            padding: 40px 20px;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            animation: fadeIn 1.2s ease-out;
            transition: all 0.5s ease;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-60px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          h1 {
            font-size: 3rem;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 20px;
            text-transform: uppercase;
            background: linear-gradient(to right, #f8ff00, #3ad59f);
            -webkit-background-clip: text;
            color: transparent;
            animation: glow 1.5s infinite alternate;
            transition: all 0.3s ease;
          }

          @keyframes glow {
            0% {
              text-shadow: 0 0 10px #fff, 0 0 20px #ff6a00, 0 0 30px #ff6a00;
            }
            100% {
              text-shadow: 0 0 15px #fff, 0 0 30px #ff9500, 0 0 40px #ff9500;
            }
          }

          nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 15px;
          }

          nav ul li a {
            text-decoration: none;
            color: #fff;
            font-size: 1.1rem;
            font-weight: 500;
            padding: 12px 18px;
            border-radius: 8px;
            transition: all 0.3s ease;
            text-transform: capitalize;
          }

          nav ul li a:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          /* Sidebar Styling */
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: all 0.4s ease;
          }

          .sidebar.active {
            display: flex;
            opacity: 1;
          }

          .sidebar ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .sidebar ul li a {
            color: #fff;
            font-size: 1.3rem;
            font-weight: 600;
            padding: 12px 20px;
            border-radius: 6px;
            text-decoration: none;
            text-transform: capitalize;
            transition: all 0.3s ease;
          }

          .sidebar ul li a:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            header {
              padding: 30px 20px;
            }

            h1 {
              font-size: 2.5rem;
            }

            nav ul {
              gap: 20px;
            }

            nav ul li a {
              font-size: 1rem;
            }
          }
        `}
      </style>
      <header id="home">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
