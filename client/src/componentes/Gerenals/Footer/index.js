import React from 'react'
import styles from './styles.module.css';
import face from '../../../assets/f.png';
import instagram from '../../../assets/i.png';
import twitter from '../../../assets/t.png';

function Footer() {
  return (
    <footer className={styles.footer} id='Footer'>

      <section className={styles.redes}>
        <a href='https://facebook.com' >

          <div className={styles.circle}>
            <img
              className={styles.redesImg}
              alt='facebook'
              src={face}
            />
          </div>
        </a>

        <a href='https://instagram.com' >
          <div className={styles.circle}>
            <img
              className={styles.redesImg}
              alt='instagram'
              src={instagram}
            />
          </div>
        </a>

        <a href='https://twitter.com' >
          <div className={styles.circle}>
            <img
              className={styles.redesImg}
              alt='twitter'
              src={twitter}
            />
          </div>
        </a>
      </section>

      <section className={styles.dev}>
        <a href='https://github.com/AlejandroColina'
          className={styles.devA}>
          Developed by AC
        </a>
      </section>

    </footer>
  )
}

export default Footer