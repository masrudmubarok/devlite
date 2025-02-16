import React, { useState } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function MasrudMubarok() {
  const [iconTransforms, setIconTransforms] = useState({
    linkedin: { x: 0 },
    github: { x: 0 },
    youtube: { x: 0 },
    email: { x: 0 },
    website: { x: 0 },
  });

  const handleMouseMove = (e, icon) => {
    const { clientX } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;

    setIconTransforms((prev) => ({
      ...prev,
      [icon]: { x },
    }));
  };

  return (
    <div className={styles.container}>
      {/* Kartu Profil */}
      <motion.div 
        className={styles.card} 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="/img/profile.png"
          alt="Masrud Mubarok"
          className={styles.profilePic}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <h1 className={styles.name}>Masrud Mubarok</h1>
        <p className={styles.role}>Software Developer</p>
        <div className={styles.links}>
          {[
            { href: "https://linkedin.com/masrudmubarok/", icon: <FaLinkedin />, name: "linkedin" },
            { href: "https://github.com/masrudmubarok/", icon: <FaGithub />, name: "github" },
            { href: "https://www.youtube.com/@masrudmubarok", icon: <FaYoutube />, name: "youtube" },
            { href: "mailto:masrud.mubarok21@gmail.com", icon: <FaEnvelope />, name: "email" },
            { href: "/", icon: <FaGlobe />, name: "website" },
          ].map(({ href, icon, name }) => (
            <motion.a 
              key={name}
              href={href} 
              rel="noopener noreferrer" 
              className={styles.link}
              onMouseMove={(e) => handleMouseMove(e, name)}
              target={name === "website" ? "_self" : "_blank"} // Website di tab yang sama, lainnya di tab baru
            >
              <motion.div 
                animate={{ x: iconTransforms[name].x }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <span className={styles.icon}>{icon}</span>
              </motion.div>
            </motion.a>
          ))}
        </div>
        {/* Tombol "See My Project" */}
        <motion.a 
          href="/masrudmubarok/showcase" 
          className={styles.projectButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Showcase →
        </motion.a>
      </motion.div>
    </div>
  );
}