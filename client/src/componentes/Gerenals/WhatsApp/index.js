import React, { useEffect, useState } from 'react'
import wp from '../../../assets/wp.png';
// import styles from './styles.module.css';

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
        <div className={
            start
                ? `fixed right-4 bottom-4 md:right-16 md:bottom-16 z-10`
                : `hidden`
        }>
            <a className="no-underline"
                href='https://api.whatsapp.com/send?phone=573216141429' >
                <img className='
                h-16 w-16 md:h-22 md:w-22
                ' src={wp} alt='whatsapp' />
            </a>
        </div>
    )
}

export default WhatsApp