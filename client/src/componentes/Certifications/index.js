import React, { useState } from 'react'
import styles from './styles.module.css';
import { certificados } from '../Project/infoCards';

function Certificacions() {
    let [index, setIndex] = useState(0);

    const handlePrev = () => {
        index > 1
            ? setIndex(index - 1)
            : setIndex(0)
    }
    const handleNext = () => {
        index >= certificados?.length - 1
            ? setIndex(certificados.length - 1)
            : setIndex(index + 1)
    }

    return (
        <div id='Certifications' className={styles.principal}>
            <div className={styles.div_title}>
                <h2>Certificaciones</h2>
            </div>
            <div className={styles.div_slider}>
                <img className={styles.imgs}
                    alt='certificados'
                    src={certificados[index]}
                />
            </div>
            <div className={styles.div_btns}>
                <button
                    onClick={handlePrev}
                    disabled={index <= 0 ? true : false}
                    className={styles.btnImg}
                >
                    {'<'}

                </button>
                <button
                    onClick={handleNext}
                    disabled={index >= certificados.length - 1 ? true : false}
                    className={styles.btnImg}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Certificacions;