import * as React from 'react';
import * as styles from '../../styles/home.module.css';

export default function Testimonials({ data }) {
  return (
    <section className={styles.testimonials}>
      <h4>Omdöme</h4>
      <h3>Kundomdömen</h3>
      <p>Vår ambition är att skapa en bättre arbetsmiljö för företaget</p>
      <div>
        <p>....reco testimonials....</p>
      </div>
    </section>
  );
}
