import React from 'react'
import Nav from '../Gerenals/NavBar';
import Footer from './../Gerenals/Footer/index';
import styles from './styles.module.css';
import face from '../../assets/face.jpg'

function About() {
  return (
    <div className={styles.principal}>
      <Nav
        nombre1='Proyectos'
        nombre2='Contactar'
        link1='/projects'
        link2='/contact'
      />

      <section className={styles.information}>
        <div className={styles.imgs}>
          <img 
            src={face}
            alt='face'
          />
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default About


