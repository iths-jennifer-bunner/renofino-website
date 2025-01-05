import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faGlobe,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
      file(relativePath: { eq: "image9.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 100)
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;
  const logoImage = getImage(data.file);

  return (
    <footer>
      <section className="logo">
        <div>
          <GatsbyImage image={logoImage} alt="Logo" 

            
          />
          <p>
            Vi är städfirman med målsättningen att skapa livskvalitet med
            professionell städservice
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faPhone} /> tel
          </p>
          <p>
            <FontAwesomeIcon icon={faGlobe} /> web
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> email
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> adress
          </p>
        </div>
      </section>
      <section>
        <div className="footerLinks">
          <p>{copyright}</p>
          <Link to="/about">Cookie policy</Link>
          <Link to="/blog">Integritetspolicy</Link>
          <Link to="/companys">Användarvillkor</Link>
        </div>
      </section>
    </footer>
  );
}
