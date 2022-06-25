import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import menu from '../../../assets/menu.png'

function Nav() {
  const { weather, location } = useSelector(state => state);
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  let transitionNavBar = () => {

    if (window.scrollY >= 50) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <nav className={
      `
      ${open ? 'h-1/6 bg-[#e9ecefd5]' : 'h-8 bg-transparent'}
      ${nav ? 'md:bg-[#e9ecefd5]' : 'md:bg-transparent'}
      transition-all duration-300 md:duration-1000 ease-in-out md:delay-700
      fixed top-0 z-20
      w-screen md:h-12
      md:flex md:justify-center md:items-center        
       md:pl-4 lg:pl-8
      `
    }
    >
      <img src={menu} alt='*menu*'
        className='
      h-10 w-10 top-1 right-1 fixed flex md:hidden hover:shodow-xl z-3
      ' onClick={handleClick} />

      <section className="w-1/2 flex md:justify-center md:items-center">
        <ul className={`
       md:flex md:flex-row md:justify-center md:items-center
       transition-all duration-200 
        ${open
            ? "flex flex-col my-1 md:my-0"
            : "hidden"
          }
        `}>
          <Link className="text-base md:text-sm mb-1 
          lg:text-xl no-underline 
          font-light hover:underline mx-4 md:mx-2"
            to="#Landing" ><b>{`<Alejandro />  `}</b></Link>
          <Link className="text-base md:text-sm mb-1 
          lg:text-xl no-underline 
          font-light hover:underline mx-4 md:mx-2"
            to="#Projects" >Proyectos</Link>
          <Link className="text-base md:text-sm
          mb-1 lg:text-xl no-underline 
          font-light hover:underline mx-4 md:mx-2"
            to="#Certifications" >Certificaciones</Link>
        </ul>
      </section>

      <section className="w-1/2 h-full hidden sm:hidden md:flex justify-center md:items-center md:flex-row">
        <p className="
        text-base sm:text-sm lg:text-xl
        text-center font-light md:mr-2"
        >{`Min ${parseInt(weather.temp_min)}
          °c - Máx ${parseInt(weather.temp_max)}°c`}
        </p>

        <p className="
        text-base sm:text-sm lg:text-xl 
        text-center font-light md:ml-2"
        >{location.city}, {location.country_code_iso3}
        </p>
      </section>

    </nav>
  )
}
export default Nav