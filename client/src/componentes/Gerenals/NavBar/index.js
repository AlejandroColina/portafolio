import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.css';

function Nav() {
  const { weather, location } = useSelector(state => state);
  const [nav, setNav] = useState(false);

  let transitionNavBar = () => {

    if (window.scrollY >= 50) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <nav className={nav
      ? `transition-all duration-1000 ease-in-out delay-700
      fixed top-0 z-20
      w-screen h-12
      bg-[#e9ecefd5]
      hidden
      sm:flex sm:justify-center sm:items-center        
      pl-2 sm:pl-4 md:pl-8
      `
      : `hidden`}>

      <section className="w-1/2 flex justify-center items-center">
        <ul className={styles.list}>
          <Link className="text-base md:text-sm no-underline font-light hover:underline mx-4 md:mx-2" to="#Landing" ><b>{`<Alejandro />  `}</b></Link>
          <Link className="text-base md:text-sm no-underline font-light hover:underline mx-4 md:mx-2" to="#Projects" >Proyectos</Link>
          <Link className="text-base md:text-sm no-underline font-light hover:underline mx-4 md:mx-2" to="#Certifications" >Certificaciones</Link>
        </ul>
      </section>

      <section className="w-1/2 flex flex-col mr-8 md:mr-10 lg:mr-12">
        <p className="
        text-base sm:text-sm 
        text-center font-light"
        >Min {parseInt(weather.temp_min)}
          °c - Máx
          {parseInt(weather.temp_max)}°c</p>

        <p className="
        text-base sm:text-sm 
        text-center font-light"
        >{location.city}, {location.country_code_iso3}</p>
      </section>

    </nav>
  )
}

export default Nav