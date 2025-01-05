import * as React from 'react';
import * as styles from '../../styles/index/about.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function About({ data }) {
  const apartmentImage = getImage(
    data.apartmentImage.childImageSharp.gatsbyImageData
  );
  return (
    <section className={styles.about}>
      <div className={styles.imageDiv}>
        <GatsbyImage
          image={apartmentImage}
          alt="clean livingroom with furnitures"
        />
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.padding}>
          <h3>Personligt bemötande</h3>
          <p>
            Hos oss får du av ett glatt och ödmjukt bemötande. Vi lyssnar gärna
            men kommer även med förslag på hur vår städservice kan förhöja din
            livskvalitet.
          </p>
        </div>
        <div className={styles.padding}>
          <h3>Noggrann städning</h3>
          <p>
            Hos oss får du av ett glatt och ödmjukt bemötande. Vi lyssnar gärna
            men kommer även med förslag på hur vår städservice kan förhöja din
            livskvalitet.
          </p>
        </div>
        <div className={styles.padding}>
          <h3>Snabb service</h3>
          <p>
            Hos oss får du av ett glatt och ödmjukt bemötande. Vi lyssnar gärna
            men kommer även med förslag på hur vår städservice kan förhöja din
            livskvalitet.
          </p>
        </div>
        <div className={styles.linkSection}>
          <Link to="/about">
            <h3>Om Ren och Fino</h3>
          </Link>
          <Link to="/about">...arrow image</Link>
        </div>
      </div>
    </section>
  );
}
