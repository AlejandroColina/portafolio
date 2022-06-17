import React from 'react'
import styles from './styles.module.css';
import bh from '../../../assets/blackHeart.webp'

function Footer() {
  return (
    <footer className={styles.footer} id='Footer'>
      <div className={styles.container}>
        <h1 className={styles.sect1}>Póngase en contacto</h1>

        <p className={styles.sect2}>
          ¡Actualmente estoy buscando oportunidades en desarrollo de software! Si conoce algún puesto disponible, si tiene alguna pregunta o si solo quiere saludar, no dude en enviarme un correo electrónico a <a href='www.gmail.com'>alejo_9102@hotmail.com</a>
        </p>

        <p className={styles.sect3}><b>{`</>`}, con <img src={bh}alt='heart'/> por Alejandro Colina usando React JS</b></p>
      </div>
    </footer>
  )
}

export default Footer