import React from 'react'
import me from '../../assets/me.jpeg';

function About() {
  let urlCV = 'https://drive.google.com/file/d/1UKYRXI2GjItfIhJQnmRJCogVm5x6UaKN/view?usp=sharing';
  return (
    <div className="
    h-full abosulute bg-[#e9ecef] 
    flex flex-col justify-center items-center"
      id='About'
    >
      <section className="
      flex flex-col justify-center items-center
      md:grid md:grid-cols-3
      px-4 md:mx-16"
      >
        <div className="
        flex flex-col items-center justify-center 
        md:col-span-2 
        px-6 
        lg:h-48"
        >
          <h1 className='
          text-4xl font-light 
          sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl
          py-4'
          >Sobre mí
          </h1>
          <p className='
          text-justify 
          text-sm sm:text-lg sm:text-center 
          md:mb-6 
          lg:h-64'
          >
            Mi nombre es Alejandro Colina. Soy egresado de la Universidad Católica de Pereira
            como Tecnólogo en Desarrollo de Software del año 2022. Me gusta entender cómo funcionan las cosas,
            mi objetivo es realizar actividades que me apasionen como lo es desarrollar software.
            En mi tiempo libre me gusta trabajar en proyectos de código abierto. 
            <a className='underline sm:hidden' href={urlCV}> 📝 CV</a>
          </p>

          <a href={urlCV}
            target="_blank" rel="noopener noreferrer"
            className='
        hidden
        sm:flex sm:justify-center sm:items-center
        h-8 w-24
        border 
        text-base text-center sm:text-sm md:text-lg mb-2 
        border-gray-500 rounded-sm 
        hover:bg-gray-400 hover:text-white
         transition duration-1000'
          > CV </a>
        </div>


        <div className="
            w-24 h-32 md:h-40 md:w-24 lg:h-48 lg:w-32
            flex justify-center items-center
            lg:my-12 mx-auto
            md:col-span-1"
        >
          <img src={me} className="
          h-28 w-16 md:h-40 md:w-24 lg:h-48 lg:w-32 
          rounded-md 
          object-cover"
            alt='alejo'
          />
        </div>
      </section>
    </div>
  )
}

export default About