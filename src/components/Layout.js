import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children }) {
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
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>{copyright}</footer>
    </div>
  );
}
