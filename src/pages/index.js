import * as React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Ren & Fino</h2>
          <h3>Städfirma</h3>
          <p>lorem ipsum dkgsjdgjsdfgjsldfkjgbfhb fdkgbdlfknghb</p>
          <Link className={styles.btn} to="/private">
            Privat
          </Link>
          <Link className={styles.btn} to="/companys">
            Företag
          </Link>
        </div>
      </section>
    </Layout>
  );
}
