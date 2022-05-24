import React from 'react'
import { useSelector } from 'react-redux';
import Nav from '../Gerenals/NavBar';

function About() {
  const { location } = useSelector(state => state);
  return (
    <>
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
    </>
  )
}

export default About


