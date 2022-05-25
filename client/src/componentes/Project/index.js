import React from 'react'
import Nav from './../Gerenals/NavBar/index';
import styles from './styles.module.css';
import Footer from './../Gerenals/Footer/index';

function Projects() {
    return (
        <section className={styles.principal}>
            <Nav
                nombre1='Sobre mí'
                nombre2='Contactar'
                link1='/about'
                link2='/contact'
            />
            <Footer />
        </section>
    )
}

export default Projects