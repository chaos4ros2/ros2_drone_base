import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Slide from './slide/Slide.js'

const FeatureList = [
  {
    title: 'micro-ROS',
    Svg: require('../../static/img/micro-ROS.svg').default,
    description: (
      <>
        micro-ROS puts ROS 2 onto microcontrollers
      </>
    ),
  },
  {
    title: 'PX4',
    Svg: require('../../static/img/PX4.svg').default,
    description: (
      <>
        Open Source Autopilot for Drone Developers
      </>
    ),
  },
  {
    title: 'SDK',
    Svg: require('../../static/img/dji.svg').default,
    description: (
      <>
        Most flexibile but diffcult method
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Slide />
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div>
        Disclaimer: All logos and product names are property of their respective owners. All company names, 
        logos and product names used in this presentation are for identification purposes only. Their use does not imply endorsement. 
        </div>
      </div>
    </section>
  );
}
