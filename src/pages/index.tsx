import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      id="hero-header"
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        background:
          "linear-gradient(32deg,#990fc3 0,#760fc3 16%,#652ec3 52% 52%,#0dd3c5 100%,#7db9e8 100%)",
      }}
    >
      <div className="container">
        <Heading
          as="h1"
          className={clsx("hero__title text--secondary", styles.heroTitle)}
        >
          Stop Guessing. Start Converting.
        </Heading>
        <p
          className={clsx(
            "hero__subtitle text--secondary",
            styles.heroSubtitle
          )}
        >
          Put your optimization on autopilot.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/welcome/">
            Read the Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            target="_blank"
            href="https://www.ezbot.ai/pricing"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </header>
  );
}

function ValueProposition() {
  return (
    <section className={styles.valueProposition}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center">
              <Heading as="h2" className={styles.valueTitle}>
                Optimize Your Website While You Sleep
              </Heading>
              <p className={styles.valueDescription}>
                You know what you want to test. ezbot.ai does the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Optimize with AI`} description="ezbot.ai Documentation">
      <HomepageHeader />
      <main>
        <ValueProposition />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
