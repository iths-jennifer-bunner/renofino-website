import * as React from 'react';
import * as styles from '../../styles/home.module.css';
import { Link } from 'gatsby';

export default function Companys({ data }) {
  return (
    <section>
      <div className={styles.companys}>
        <h4>Företag</h4>
        <h3>Bra arbetsmiljö på jobbet</h3>
        <p>Vår ambition är att skapa en bättre arbetsmiljö för företaget</p>
        <div>....carousel...</div>
        <Link className={styles.btn} to="/companys">
          Företagstädning
        </Link>
        <hr />
      </div>
    </section>
  );
}
