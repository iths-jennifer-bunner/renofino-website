import * as React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Header from '../components/index/Header';
import Presentation from '../components/index/presentation';
import About from '../components/index/About';
import Companys from '../components/index/Companys';
import Private from '../components/index/Private';
import StockholmArea from '../components/index/StockholmArea';
import Faq from '../components/index/Faq';
import Testimonials from '../components/index/Testimonials';

export default function Home({ data }) {
  const cleanLamp = getImage(data.cleanLamp.childImageSharp.gatsbyImageData);
  const cleanStairs = getImage(
    data.cleanStairs.childImageSharp.gatsbyImageData
  );
  const cleanTable = getImage(data.cleanTable.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <Header data={data} />
      <div className={styles.indexWrapper}>
        <Presentation data={data} />
        <About data={data} />
        </div>
        <Testimonials />
        <div className={styles.indexWrapper}>
        <Companys />
        <section className={styles.imageSection}>
          <div className={styles.images}>
            <GatsbyImage
              image={cleanLamp}
              alt="three of the team"
              className={styles.gatsbyImages}
            />
            <GatsbyImage
              image={cleanStairs}
              alt="three of the team"
              className={styles.gatsbyImages}
            />
            <GatsbyImage
              image={cleanTable}
              alt="three of the team"
              className={styles.gatsbyImages}
            />
          </div>
          <hr />
        </section>
        <Private />
        <StockholmArea />
        <Faq data={data} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
    teamImage: file(relativePath: { eq: "huvudsida-1024x683.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    apartmentImage: file(relativePath: { eq: "apartment.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    cleanImage: file(relativePath: { eq: "clean1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    cleanLamp: file(relativePath: { eq: "cleanLamp.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    cleanStairs: file(relativePath: { eq: "cleanStairs.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
    cleanTable: file(relativePath: { eq: "cleanTable.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP]
          placeholder: BLURRED
        )
      }
    }
  }
`;

// export const query = graphql`
//   query HeaderImage {
//     file(relativePath: { eq: "huvudsida-1024x683.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(
//           layout: FULL_WIDTH
//           placeholder: BLURRED
//           formats: [AUTO, WEBP]
//         )
//       }
//     }
//   }
// `;
