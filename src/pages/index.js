import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {MDXProvider} from '@mdx-js/react';

const features = [
  {
    title: <>Peer to peer</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Sonar is based on the <a href="https://hypercore-protocol.org/">Hypercore Protocol</a> and part of the <a href="https://dat.foundation">Dat</a> ecosystem of peer-to-peer tools.
      </>
    ),
  },
  {
    title: <>Full-text search</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Sonar includes the <a href="https://github.com/tantivy-search/tantivy">Tantivy</a> full-text search engine.
      </>
    ),
  },
  {
    title: <>Community focused</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Sonar is a young open source project. We want to enable people to build tools for local-first content archives and media libraries.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>
        <div class="markdown">
          <MDXProvider>{description}</MDXProvider>
        </div>
      </p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A peer-to-peer content database, media library and search engine">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
