import * as React from 'react';
import * as styles from '../../styles/home.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function Faq({ data }) {
  const cleanImage = getImage(data.cleanImage.childImageSharp.gatsbyImageData);

  return (
    <section className={styles.faq}>
      <div className={styles.imageDiv}>
        <GatsbyImage image={cleanImage} alt="shuffle and brush" />
      </div>
      <div>
        <h4>FAQ</h4>
        <h3>Vad våra kunder vill veta</h3>
        <p>
          Dagens kunder är allt mer medvetna och ställer krav på fler saker än
          bara få en tjänst utförd. Här följer svar på frågor vi ofta får av
          privatpersoner och företag innan de beslutar sig för att bli vår kund.
        </p>
      </div>
    </section>
  );
}
