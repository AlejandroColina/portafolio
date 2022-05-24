import React from 'react'
import styles from './styles.modules.css';

function Footer() {
  return (
    <footer className={styles.footer}>

      <section className={styles.redes}>
        <div className={styles.circle}>F</div>
        <div className={styles.circle}>I</div>
        <div className={styles.circle}>T</div>
      </section>

      <section className={styles.dev}>
        <p className={styles.devP}>Developed by AC</p>
      </section>
      
    </footer>
  )
}

export default Footer