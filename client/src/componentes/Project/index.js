import React from 'react'
import styles from './styles.module.css';

function Projects() {
    return (
        <section className={styles.principal} id='Projects'>
            <div className={styles.divProject}>
                <div className={styles.video} ></div>
                <div className={styles.info} >
                    <h2>Nombre Projecto</h2>
                    <p>
                        Aquí va la descripción del proyecto.
                        Todo lo necesario para dejar claro lo que
                        se hizo. De qué manera lo llevé a cabo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects