import React, { useState } from 'react';
import styles from './styles.module.css'

function Menu() {
    const [openNav, setOpenNav] = useState(false);
    const handleOpen = () => { setOpenNav(!openNav) }
    return (
        <nav className={styles.navBar}>
            <button onClick={handleOpen} className={styles.btnNav}>{openNav ? 'CERRAR' : 'ABRIR'}</button>
            <ul className={!openNav ? styles.ulNav1 : styles.ulNav2} >
                <li>{'ALEJO'}</li>
                <li>{'ALEJO'}</li>
                <li>{'ALEJO'}</li>
                <li>{'ALEJO'}</li>
            </ul>
        </nav>
    )
}

export default Menu