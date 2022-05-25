import React from 'react'
import Nav from './../Gerenals/NavBar/index';
import styles from './styles.module.css';
import Footer from './../Gerenals/Footer/index';

function Contact() {
  return (
    <section className={styles.principal}>
      <Nav
        nombre1='Sobre mí'
        nombre2='Proyectos'
        link1='/about'
        link2='/projects'
      />
      <Footer />
    </section>
  )
}

export default Contact