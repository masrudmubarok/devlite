import React, { useState } from "react";
import styles from "./author.module.css";
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function AuthorPage() {
  const [iconTransforms, setIconTransforms] = useState({
    linkedin: { x: 0, y: 0 },
    github: { x: 0, y: 0 },
    youtube: { x: 0, y: 0 },
    email: { x: 0, y: 0 },
    website: { x: 0, y: 0 },
  });

  const handleMouseMove = (e, icon) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    setIconTransforms((prev) => ({
      ...prev,
      [icon]: { x, y },
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.name}>Ahmad Masrud Mubarok</h1>
        <p className={styles.role}>Software Developer</p>

        <div className={styles.links}>
          <a
            href="https://linkedin.com/masrudmubarok/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={(e) => handleMouseMove(e, "linkedin")}
          >
            <FaLinkedin
              className={styles.icon}
              color="#0a66c2"
              style={{
                transform: `translate(${iconTransforms.linkedin.x}px, ${iconTransforms.linkedin.y}px)`,
              }}
            />
          </a>
          <a
            href="https://github.com/masrudmubarok/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={(e) => handleMouseMove(e, "github")}
          >
            <FaGithub
              className={styles.icon}
              color="#333"
              style={{
                transform: `translate(${iconTransforms.github.x}px, ${iconTransforms.github.y}px)`,
              }}
            />
          </a>
          <a
            href="https://youtube.com/masrudmubarok/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={(e) => handleMouseMove(e, "youtube")}
          >
            <FaYoutube
              className={styles.icon}
              color="#ff0000"
              style={{
                transform: `translate(${iconTransforms.youtube.x}px, ${iconTransforms.youtube.y}px)`,
              }}
            />
          </a>
          <a
            href="mailto:masrud.mubarok21@gmail.com"
            className={styles.link}
            onMouseMove={(e) => handleMouseMove(e, "email")}
          >
            <FaEnvelope
              className={styles.icon}
              color="#28a745"
              style={{
                transform: `translate(${iconTransforms.email.x}px, ${iconTransforms.email.y}px)`,
              }}
            />
          </a>
          <a
            href="https://devlite.org"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={(e) => handleMouseMove(e, "website")}
          >
            <FaGlobe
              className={styles.icon}
              color="#0077b6"
              style={{
                transform: `translate(${iconTransforms.website.x}px, ${iconTransforms.website.y}px)`,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}