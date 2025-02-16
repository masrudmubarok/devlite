import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import projectImage from "./project.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const techIcons = {
  "HTML": <FaHtml5 className={styles.icon} />, 
  "CSS": <FaCss3Alt className={styles.icon} />, 
  "JS": <FaJs className={styles.icon} />, 
  "React": <FaReact className={styles.icon} />, 
  "Node.js": <FaNodeJs className={styles.icon} />, 
  "Express": <FaNodeJs className={styles.icon} />, 
  "Socket.io": <FaNodeJs className={styles.icon} />, 
};

const portfolioItems = [
  { id: 1, category: "Front-End", title: "Landing Page", tech: ["HTML", "CSS", "JS"], image: projectImage, site: "#", code: "#" },
  { id: 2, category: "Front-End", title: "Portfolio Website", tech: ["React", "CSS"], image: projectImage, site: "#", code: "#" },
  { id: 3, category: "Front-End", title: "Dashboard Admin", tech: ["React", "Node.js"], image: projectImage, site: "#", code: "#" },
  { id: 4, category: "Back-End", title: "API Service", tech: ["Node.js", "Express"], image: projectImage, site: "#", code: "#" },
  { id: 5, category: "Full-Stack", title: "E-Commerce Platform", tech: ["React", "Node.js"], image: projectImage, site: "#", code: "#" },
  { id: 6, category: "Full-Stack", title: "Chat Application", tech: ["React", "Socket.io", "Node.js"], image: projectImage, site: "#", code: "#" },
];

const categories = ["All", "Front-End", "Back-End", "Full-Stack"];

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className={styles.portfolioContainer}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h2 className={styles.title}>My Projects</h2>
      </div>

      {/* Filter Wrapper */}
      <div className={styles.filterWrapper}>
        <div className={styles.buttonsContainerFixed}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeCategory === category ? styles.active : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Gallery */}
      <motion.div layout className={styles.galleryGrid}>
        {filteredItems.map((item) => (
          <motion.div 
            key={item.id} 
            layout 
            whileHover={{ scale: 1.05 }} // Zoom effect on hover
            className={styles.galleryItem}
          >
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} className={styles.galleryImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{item.title}</h3>
              <p className={styles.projectCategory}>{item.category}</p>
              <div className={styles.projectTech}>
                {item.tech.map((tech, index) => (
                  <span key={index} className={styles.techIcon}>
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              <div className={styles.buttonContainer}>
                <a href={item.site} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
                  <FaExternalLinkAlt />
                </a>
                <a href={item.code} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
                  <FaCode />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioGallery;