import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Daftar fitur dengan gambar di kanan dan deskripsi di kiri
const FeatureList = [
  {
    title: 'Devlite (Developer Elite): A Software Development Academy with a Ninja Approach',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p className={styles.justifyText}>
        Welcome to Devlite, where developers grow into true experts by adopting the ninja way of learning. We believe that becoming a great software developer takes more than just technical skills—it requires discipline, perseverance, and a strategic mindset, just like a ninja mastering their craft.
        </p>
        <p className={styles.justifyText}>
        At Devlite, we provide a structured learning path that adapts to each developer’s growth, ensuring a seamless transition from fundamental skills to advanced mastery. Our curriculum is designed with progressive difficulty levels, allowing participants to refine their expertise step by step, just as a ninja advances through their training. From Genin (beginners) to Kage (masters), every student embarks on an exciting journey of continuous learning & problem-solving.
        </p>
        <p className={styles.justifyText}>
        Unlock your full potential as a software developer with Devlite. Embrace the ninja way, sharpen your coding skills, and rise to the top in the ever-evolving world of technology—where knowledge is open to all and growth knows no limits!
        </p>
      </>
    ),
  },
];

// Komponen untuk menampilkan fitur dengan gambar di kanan
function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('row', styles.featureRow)}>
      {/* Bagian deskripsi */}
      <div className="col col--6">
        <div className="text--left padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          {description}
        </div>
      </div>
      {/* Bagian gambar */}
      <div className="col col--6 text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

// Komponen utama HomepageFeatures
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Bagian daftar fitur */}
        <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}