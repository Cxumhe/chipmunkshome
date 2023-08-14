import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomeBanner() {
  return (
    <div className="homeBanner">
      Support Ukraine 🇺🇦{' '}
      <Link to="https://opensource.facebook.com/support-ukraine">
        Help Provide Humanitarian Aid to Ukraine
      </Link>
      .
    </div>
  );
}

const HomeSplash = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div className="homeContainer">
        <div className="homeSplashFade">
          {/* <div className="logo">
            <img src={useBaseUrl('img/relay-white.svg')} />
          </div> */}
          <div className="wrapper homeWrapper">
            <h2 className="projectTitle">
              {siteConfig.title}
              <small>{siteConfig.tagline}</small>
              <small>{siteConfig.subtagline}</small>
            </h2>
            <div className="try-it">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`吱吱吱`}
      description="志同道合的人会再相逢">
      <HomeSplash />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
