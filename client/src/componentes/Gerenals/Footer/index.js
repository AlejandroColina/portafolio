import React from 'react'
import bh from '../../../assets/blackHeart.webp'

function Footer() {
  return (
    <footer className="
    border-t border-gray-200  
    flex justify-center items-center flex-col
    px-4 mt-6
    bg-gradient-to-b from-white to-gray-400
    "
      id='Footer'>

      <h1 className="
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
        mt-4 md:mt-8
        font-light py-4 mx-auto">
        Póngase en contacto
      </h1>

      <p className="
        text-base sm:text-sm lg:text-lg xl:text-xl
        text-center
        
        md:mx-8
        "
      >
        ¡Actualmente estoy buscando oportunidades en desarrollo de software!
        Si conoce algún puesto disponible, si tiene alguna pregunta o si solo quiere saludar,
        no dude en enviarme un correo electrónico a
        <a className='hover:font-bold' href='www.gmail.com'> alejo_9102@hotmail.com</a>
      </p>

      <p className="
        text-base sm:text-sm text-center
        my-8
        ">
        <b>
          {`</>`}  Con {<img className='h-6 w-6 inline' src={bh} alt='heart' />} por Alejandro Colina usando React JS
        </b>
      </p>

    </footer >
  )
}

export default Footer

