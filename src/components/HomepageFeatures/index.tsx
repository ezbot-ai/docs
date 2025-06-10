import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Launch in 10 Minutes",
    Svg: require("@site/static/img/gears-solid.svg").default,
    description: (
      <>
        Add one code snippet and start optimizing immediately. No developers,
        designers, or data scientists required.
      </>
    ),
  },
  {
    title: "Continuous Optimization",
    Svg: require("@site/static/img/users-solid.svg").default,
    description: (
      <>
        ezbot will discover and deliver the best possible experience for each
        vistor – automatically.
      </>
    ),
  },
  {
    title: "Conversions that Compound",
    Svg: require("@site/static/img/chart-simple-solid.svg").default,
    description: (
      <>
        Watch conversions climb month after month from one simple dashboard. No
        stats degree required.
      </>
    ),
  },
];

function Feature({
  title,
  Svg,
  description,
  link,
}: FeatureItem & { link?: string }) {
  const content = (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" fill="#a84af0" />
      </div>
      <div className="text--center">
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
      </div>
      <div className={styles.featureDescription}>{description}</div>
    </>
  );

  if (link) {
    return (
      <Link to={link} className={styles.featureCard}>
        {content}
      </Link>
    );
  }

  return <div className={styles.featureCard}>{content}</div>;
}

const featureLinks = [
  "/get-started/overview/",
  "/guides/visual/capabilities/",
  "/get-started/getting-results/",
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} link={featureLinks[idx]} />
          ))}
        </div>
      </div>
    </section>
  );
}
