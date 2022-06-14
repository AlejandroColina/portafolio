import React from 'react'
// import Nav from '../Gerenals/NavBar';
// import Footer from './../Gerenals/Footer/index';
import styles from './styles.module.css';
import me from '../../assets/me.jpeg';

function About() {
  return (
    <div className={styles.principal} id='About'>
      <section className={styles.container}>
        <div className={styles.info}>
          <h1>About me</h1>
          <p>
            {/* Soy una persona ilusionada por aprender,
          entender cómo funcionan las cosas y hacer.
        Soy una persona analítica y cautelosa. */}
            My name is Alejandro Colina. I’m a graduate of 2022 from Universidad Católica de Pereira
            a degree in Technology in Software Developer. I'm most passionate about giving back to the community, and my goal is to pursue this
            passion within the field of software developer. In my free time I like working on
            open source projects.
          </p>
        </div>
        <div className={styles.photo}>
          <img src={me} alt='alejo' />
        </div>
      </section>
    </div>
  )
}

export default About


