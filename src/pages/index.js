import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.fullScreen}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src='/img/shurri.png' className={styles.appLogo} alt="logo" />
          <Heading as="h3" className={clsx('hero__title', styles.heroTitle, styles.smallHeading)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="academy/genin/intro">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}

function HomepageFeaturesWrapper() {
  return (
    <section className={styles.fullScreen}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <HomepageFeatures />
        </div>
      </header>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Devlite`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.scrollContainer}>
        <HomepageHeader />
        <HomepageFeaturesWrapper />
      </div>
    </Layout>
  );
}