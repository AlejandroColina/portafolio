import React from 'react'
import { useSelector } from 'react-redux';
import Nav from '../Gerenals/NavBar';
import Footer from './../Gerenals/Footer/index';
import styles from './styles.module.css';

function About() {
  const { location } = useSelector(state => state);
  return (
    <section className={styles.principal}>
      <Nav
        nombre1='Proyectos'
        nombre2='Contactar'
        link1='/projects'
        link2='/contact'
      />

      <h1>DATOS SOBRE LA UBICACIÓN</h1>
      <h3>Pais:</h3>
      <p>{location.country_name}</p>
      <h3>Ciudad:</h3>
      <p>{location.city}</p>
      <h3>Indicativo Telefónico:</h3>
      <p>{location.country_calling_code}</p>
      <Footer />
    </section>
  )
}

export default About


