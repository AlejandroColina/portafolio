import React from 'react'
import { infoCards } from './infoCards';
import styles from './styles.module.css';

function Projects() {
    return (
        <section className={styles.principal} id='Projects'>
            <div className={styles.subPrincipal_uno} >
                <h2 >{'Mis Proyectos'}</h2>
            </div>
            <div className={styles.subPrincipal_dos}>
                {
                    infoCards && infoCards?.map((app, index) => {
                        return (
                            <div key={index} className={styles.divProject}>
                                <div className={styles.imgApp} >
                                    <img src={app?.image} alt={app?.title} />
                                </div>
                                <div className={styles.info} >
                                    <h2>{app?.title}</h2>
                                    <p>{app?.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects