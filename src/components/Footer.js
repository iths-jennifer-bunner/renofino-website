import { Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;

  return (
    <footer>
      <section className="logo">
        <div>
          <p>..logo..</p>
          <p>
            Vi är städfirman med målsättningen att skapa livskvalitet med
            professionell städservice
          </p>
        </div>
        <div>
          <p>tel</p>
          <p>web</p>
          <p>email</p>
          <p>adress</p>
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
