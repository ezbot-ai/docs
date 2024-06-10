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
    <header id='hero-header' className={clsx('hero hero--primary', styles.heroBanner)} style={{background: 'linear-gradient(32deg,#990fc3 0,#760fc3 16%,#652ec3 52% 52%,#0dd3c5 100%,#7db9e8 100%)'}}>
      <div className="container">
        <Heading as="h1" className="hero__title text--secondary">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text--secondary">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/get-started/overview">
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Optimize with AI`}
      description="ezbot.ai Documentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
