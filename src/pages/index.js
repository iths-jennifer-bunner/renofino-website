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
      <section className={styles.presentation}>
        <div>
          <h3> Städfirma med kollektivavtal & medlem hos Almega</h3>
          <h2> Vi skapar livskvalitet genom rena miljöer</h2>
          <p>
            Ge oss ditt förtroende och du får en städpartner för livet. Vi
            håller vad vi lovar och med kort varsel kan vi rycka in där det
            krävs. Vi erbjuder skräddarsydda städtjänster för privatpersoner och
            företag i Stockholm.
          </p>
          <Link className={styles.btn} to="/private">
            Företagsstädning
          </Link>
          <Link className={styles.btn} to="/companys">
            Privatstädning
          </Link>
        </div>
        <div style={{ color: '#000000' }}>image here...</div>
      </section>
      <section className={styles.about}>
        <div style={{ color: '#000000' }}>image here ...</div>
        <div className={styles.aboutSection}>
          <div>
            <h3>Personligt bemötande</h3>
            <p>
              Hos oss får du av ett glatt och ödmjukt bemötande. Vi lyssnar
              gärna men kommer även med förslag på hur vår städservice kan
              förhöja din livskvalitet.
            </p>
          </div>
          <div>
            <h3>Noggrann städning</h3>
            <p>
              Hos oss får du av ett glatt och ödmjukt bemötande. Vi lyssnar
              gärna men kommer även med förslag på hur vår städservice kan
              förhöja din livskvalitet.
            </p>
          </div>
          <div>
            <h3>Snabb service</h3>
            <p>
              Hos oss får du av ett glatt och ödmjukt bemötande. Vi lyssnar
              gärna men kommer även med förslag på hur vår städservice kan
              förhöja din livskvalitet.
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
      <section>
        {/* gör om till en component */}
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
      <section className={styles.imageSection}>
        <p>image section</p>
        <hr />
      </section>
      <section>
        {/* gör om till en component */}
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
      <section className={styles.testimonials}>
        <h4>Omdöme</h4>
        <h3>Kundomdömen</h3>
        <p>Vår ambition är att skapa en bättre arbetsmiljö för företaget</p>
        <div>
          <p>....reco testimonials....</p>
        </div>
      </section>
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
      <section className={styles.faq}>
        <div>
          <p>....image....</p>
        </div>
        <div>
          <h4>FAQ</h4>
          <h3>Vad våra kunder vill veta</h3>
          <p>
            Dagens kunder är allt mer medvetna och ställer krav på fler saker än
            bara få en tjänst utförd. Här följer svar på frågor vi ofta får av
            privatpersoner och företag innan de beslutar sig för att bli vår
            kund.
          </p>
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
