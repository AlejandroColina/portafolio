import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import linkedIn from '../../assets/linked.ico';
import gitHub from '../../assets/git.ico';
import TypeWriterEffect from 'react-typewriter-effect';

function LandingP() {
    let urlLinkedIn = 'https://www.linkedin.com/in/alejandro-colina-18b84671/';
    let urlGitHub = 'https://github.com/AlejandroColina';
    return (
        <section className={styles.gif} id='Landing'>
            <div className={styles.opacity}>

                <div className={styles.principal}>
                    <div className={styles.principal1}>
                        <div className={styles.name}>
                            <h1>Alejandro Colina</h1>
                        </div>
                        <div className={styles.text}>
                        <TypeWriterEffect
                        textStyle={{ fontFamily: 'Barlow', textAlign:'center', fontSize:'1rem' }}
                        typeSpeed={50}
            startDelay={100}
            cursorColor="white"
                        text={'Apasionado sobre cambiar el mundo con tecnología.'}
                        />
                        </div>
                    </div>

                    <div className={styles.principal2}>
                        <div className={styles.redes}>
                            <a href={urlLinkedIn}>
                                <img src={linkedIn} alt='linkedIn' className={styles.reds} />
                            </a>
                            <a href={urlGitHub} >
                                <img src={gitHub} alt='git' className={styles.reds} />
                            </a>
                        </div>
                        <div className={styles.btn}>
                            <Link to={''} className={styles.btnPrincipal}>
                                More About Me
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LandingP