import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Instrument App(s)',
    Svg: require('@site/static/img/gears-solid.svg').default,
    description: (
      <>
        Share customer attributes for automatic audience segmentation and use ezbot Variables to create new digital experiences.
      </>
    ),
  },
  {
    title: 'Learn from Customer Behavior',
    Svg: require('@site/static/img/users-solid.svg').default,
    description: (
      <>
        Our powerful AI continuously learns which experiences work best for each kind of customer
      </>
    ),
  },
  {
    title: 'Capture More Value',
    Svg: require('@site/static/img/chart-simple-solid.svg').default,
    description: (
      <>
        As our AI learns, our predictions improve, along with your revenue – or any other KPI you care about – no human required after setup.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" fill="#a84af0" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
