import clsx from "clsx";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const AboutList = [
  {
    title: "Devlite (Developer Elite): A Software Development Handbook with a Ninja Approach",
    Svg: require("@site/static/img/undraw_hello_ccwj.svg").default,
    description: (
      <>
        <p className={styles.justifyText}>
          Devlite is an open-source software development learning platform inspired by the discipline and mastery of a ninja. We believe that becoming a great developer requires more than technical skills—it demands perseverance, strategy, and continuous growth.
        </p>
        <p className={styles.justifyText}>
          Our structured learning path provides a clear and seamless journey for developers, guiding them from Genin (beginner) to Kage (master) while ensuring steady progress at every stage. Devlite empowers developers to continuously sharpen their skills, adapt to new challenges, and master the art of coding with confidence.
        </p>
        <p className={styles.justifyText}>
          As an open-source platform, Devlite creates a collaborative ecosystem where anyone can learn, contribute, and refine their skills. Whether you're a beginner or a professional looking to enhance your expertise, Devlite provides the resources to help you grow in the ever-evolving world of technology.
        </p>
      </>
    ),
  },
];

function About({ Svg, title, description }) {
  return (
    <div className={clsx("row", styles.featureRow)}>
      <div className="col col--6">
        {/* Tambahkan class cardContainer agar tetap putih di dark mode */}
        <div className="text--left padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          {description}
        </div>
      </div>
      <div className="col col--6 text--center">
        <motion.div
          className={styles.parallaxContainer}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Svg className={styles.featureSvgMedium} role="img" />
        </motion.div>
      </div>
    </div>
  );
}

export default function HomepageAbout() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="container">
          {AboutList.map((props, idx) => (
            <About key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}