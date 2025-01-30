import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "260px",
        background: "linear-gradient(135deg, #002244, #005577)",
        color: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "4px 0 15px rgba(0, 0, 0, 0.3)",
        padding: "50px 20px",
        zIndex: 999,
        overflowY: "auto",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {/* Profile Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <motion.img
          src="/lalit.png"
          alt="Profile"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "4px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
            marginBottom: "15px",
          }}
        />
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: "bold",
            letterSpacing: "1.5px",
            color: "#ffcc00",
            marginBottom: "5px",
          }}
        >
          Lalit Chaudhari
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#d1d5db", fontWeight: 300 }}>
          Full Stack Developer
        </p>
      </div>

      {/* Navigation Links */}
      <nav style={{ width: "100%" }}>
        {["Home", "About", "Projects", "Skills", "Contact"].map(
          (link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleClick(e, link.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                display: "block",
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "#f9fafb",
                textDecoration: "none",
                margin: "12px 0",
                padding: "14px 25px",
                borderRadius: "8px",
                transition: "all 0.4s ease",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                cursor: "pointer",
              }}
            >
              {link}
            </motion.a>
          )
        )}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
