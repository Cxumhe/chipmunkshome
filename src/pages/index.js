import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import IndexDesk from '@site/static/img/indexDesk.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx(styles.container)}>
        <div className={clsx("slogan", styles.slogan)}>
          <div className={clsx(styles.blogVersion)}>
            <div>
            beta 0.0.1
            </div>
          </div>
          <Heading as="h2" className={clsx(styles.hero__title)}>
            Hi,I'm <span>Pi</span> Chen.
          </Heading>
          {/* <Heading as="h2" className="hero__title">
            {siteConfig.title}
          </Heading> */}
          <h2 className={clsx("hero__subtitle", styles.hero__subtitle)}>A ambitious <span>full-stack</span> learner.</h2>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--secondary button--lg",styles.button)}
              to="/docs/C/C中，两个指针相减的意义">
              Let's go!
            </Link>
          </div>
        </div>
        
        {/* <h2 className="hero__subtitle">{siteConfig.tagline}</h2> */}
      </div>
      <div>
        <IndexDesk alt="indexDesk" className={clsx(styles.indexDesk)} />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`吱吱吱`}
      description="志同道合的人会再相逢">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
