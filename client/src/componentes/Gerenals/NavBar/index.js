import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';

function Nav() {
  const { weather, location } = useSelector(state => state);
  const [nav, setNav] = useState(false);

  let transitionNavBar = () => {

    if (window.scrollY >= 300) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <nav className={nav ? styles.navbar2 : styles.navbar1}>

      <section className={styles.linkSection}>
        <ul className={styles.list}>
          <Link className={styles.link} to="#Landing" >{`<Alejandro />`}</Link>
          <Link className={styles.link} to="#About" > About me</Link>
          <Link className={styles.link} to="#Projects" > Projects</Link>
          <Link className={styles.link} to="#Footer" > Footer</Link>
        </ul>
      </section>

      <section className={styles.tempSection}>
        <div className={styles.temp}>
          <p className={styles.wordsTemp}>Min {parseInt(weather.temp_min)}
            °c - Máx
            {parseInt(weather.temp_max)}°c</p>
        </div>
        <div className={styles.location}>
          <p className={styles.wordsLocation}>{location.city}, {location.country_code_iso3}</p>
        </div>
      </section>

    </nav>
  )
}

export default Nav