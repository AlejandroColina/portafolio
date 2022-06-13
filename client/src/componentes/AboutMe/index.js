import React from 'react'
// import Nav from '../Gerenals/NavBar';
// import Footer from './../Gerenals/Footer/index';
import styles from './styles.module.css';

function About() {
  return (
    <div className={styles.principal} id='About'>

      <section className={styles.information}>
        <h1>Qué tal, soy Alejandro Colina</h1>
        <p> Soy una persona ilusionada por aprender,
          entender cómo funcionan las cosas y hacer.
          Soy una persona analítica y cautelosa.</p>

      </section>

      <section className={styles.infoData}>
      </section>
    </div>
  )
}

export default About


