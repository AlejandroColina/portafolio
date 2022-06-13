import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function LandingP() {
    return (
        <section className={styles.gif} id='Landing'>
            <div className={styles.opacity}>
               
                <div className={styles.principal}>                    
                    <div className={styles.principal1}>
                        <div className={styles.name}>
                            <h1>Alejandro Colina</h1>
                        </div>
                        <div className={styles.text}>
                            <p>Apasionado sobre cambiar el mundo con tecnología.</p>
                        </div>
                    </div>
                    
                    <div className={styles.principal2}>
                        <div className={styles.redes}>
                            redes sociales
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