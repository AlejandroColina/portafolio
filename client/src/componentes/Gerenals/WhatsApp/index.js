import React, { useEffect, useState } from 'react'
import wp from '../../../assets/wp.png';
import styles from './styles.module.css';

function WhatsApp() {
    const [start, setStart] = useState(false);

    let transitionNavBar = () => {

        if (window.scrollY >= 700) {
            setStart(true)
        } 
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div>
            <a className={styles.a_wp}
                href='https://api.whatsapp.com/send?phone=573216141429' >
                <img className={start ? styles.icon_wp : styles.none} src={wp} alt='whatsapp' />
            </a>
        </div>
    )
}

export default WhatsApp