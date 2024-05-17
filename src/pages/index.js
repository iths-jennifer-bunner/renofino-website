import * as React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link, graphql } from 'gatsby';

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <section className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.btns}>
          <Link className={styles.btn} to="/private">
            Företagsstädning
          </Link>
          <Link className={styles.btn} to="/companys">
            Privatstädning
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
