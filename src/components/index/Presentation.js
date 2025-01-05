import * as React from 'react';
import * as styles from '../../styles/index/presentation.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Presentation({ data }) {
  const teamImage = getImage(data.teamImage.childImageSharp.gatsbyImageData);

  return (
    <section className={styles.presentationWrapper}>
      <div className={styles.presentation}>
      <div className={styles.padding}>
        <h3> Städfirma med kollektivavtal & medlem hos Almega</h3>
        <h2> Vi skapar livskvalitet genom rena miljöer</h2>
        <p>
          Ge oss ditt förtroende och du får en städpartner för livet. Vi håller
          vad vi lovar och med kort varsel kan vi rycka in där det krävs. Vi
          erbjuder skräddarsydda städtjänster för privatpersoner och företag i
          Stockholm.
        </p>
        <div className={styles.presentationBtnContainer}>
        <Link className={styles.btn} to="/private">
          Företagsstädning
        </Link>
        <Link className={styles.btn} to="/companys">
          Privatstädning
        </Link>
        </div>
      </div>
      </div>
      <div className={styles.imageDiv}>
        <GatsbyImage image={teamImage} alt="three of the team" />
      </div>
    
    </section>
  );
}
