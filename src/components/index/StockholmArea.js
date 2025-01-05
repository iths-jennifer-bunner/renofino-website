import * as React from 'react';
import * as styles from '../../styles/home.module.css';
import { Link } from 'gatsby';

export default function StockholmArea({ data }) {
  return (
    <section className={styles.map}>
      <div>
        <h3>Stockholm</h3>
        <p>Vi åtager oss uppdrag för företag och privat inom detta område</p>
        <Link className={styles.btn} to="/">
          Offert inom 24h
        </Link>
      </div>
      <div>
        <p>....map....</p>
      </div>
    </section>
  );
}
