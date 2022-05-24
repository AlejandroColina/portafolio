import React from 'react'
import Nav from './../Gerenals/NavBar/index';

function Contact() {
  return (
    <section>
      <Nav
        nombre1='Sobre mí'
        nombre2='Proyectos'
        link1='/about'
        link2='/projects'
      />
    </section>
  )
}

export default Contact