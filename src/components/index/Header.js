import * as React from 'react';
import * as styles from '../../styles/index/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDownLong, faArrowDown, faLongArrowAltDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Header({ data }) {

  const { title, description } = data.site.siteMetadata;

  return (
    <section className={styles.header}>
      <h2 >{title}</h2>
      <p>{description}</p>
      <div className={styles.btns}>
        <Link className={styles.btn} to="/private">
          Företagsstädning
        </Link>
        <Link className={styles.btn} to="/companys">
          Privatstädning
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          // icon={faArrowDown}
        icon={faAnglesDown }
          // icon={faLongArrowAltDown}
          color="#ffff"
          className={styles.iconBounce}
          bounce
          // style={{
          //   '--fa-animation-duration': '3s',
          //   '--fa-animation-delay': '5s',
          //   '--fa-animation-iteration-count': '3',
          // }}
        />
      </div>
    </section>
  );
}
