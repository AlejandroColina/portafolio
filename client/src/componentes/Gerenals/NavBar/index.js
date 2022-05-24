import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

function Nav({ nombre1, nombre2, link1, link2 }) {
  const { weather, location } = useSelector(state => state);
  return (
    <nav className={styles.navbar}>

      <section className={styles.linkSection}>
        <ul className={styles.list}>
          <Link className={styles.link} to={link1} > <li>{nombre1}</li></Link>
          <Link className={styles.link} to={link2} > <li>{nombre2}</li></Link>
        </ul>
      </section>

      <section className={styles.tempSection}>
        <div className={styles.temp}>
          <p className={styles.wordsTemp}>Min {parseInt(weather.temp_min)}°c - Máx {parseInt(weather.temp_max)}°c</p>
        </div>
        <div className={styles.location}>
          <p className={styles.wordsLocation}>{location.city}, {location.country_code_iso3}</p>
        </div>
      </section>
      
    </nav>
  )
}

export default Nav