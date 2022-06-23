import React from 'react'
import me from '../../assets/me.jpeg';

function About() {
  return (
    <div className="h-full abosulute bg-[#e9ecef] flex flex-col justify-center items-center" id='About'>{/*principal*/}
      <section className="flex flex-col md:grid md:grid-cols-3 justify-center items-center px-4 md:mx-16">{/*container*/}
        <div className="flex flex-col items-center justify-center px-6 md:col-span-2 lg:h-48">{/*info*/}
          <h1 className='text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl py-4'>Sobre mí</h1>
          <p className='text-justify text-sm sm:text-lg sm:text-center md:mb-6 lg:h-64'>
            {/* Soy una persona ilusionada por aprender,
          entender cómo funcionan las cosas y hacer.
        Soy una persona analítica y cautelosa. */}
            {/* My name is Alejandro Colina. I’m a graduate of 2022 from Universidad Católica de Pereira
            a degree in Technology in Software Developer. I'm most passionate about giving back to the community, and my goal is to pursue this
            passion within the field of software developer. In my free time I like working on
            open source projects. */}
            Mi nombre es Alejandro Colina. Soy egresado de la Universidad Católica de Pereira
            en Tecnología en Desarrollo de Software del año 2022. Me apasiona retribuir a la comunidad,
            y mi objetivo es lograr tener actividades con pasión dentro del campo del desarrollo de software.
            En mi tiempo libre me gusta trabajar en proyectos de código abierto.
          </p>
        </div>
        <div className="w-24 h-32 md:h-40 md:w-24 lg:h-48 lg:w-32 flex justify-center items-center lg:my-12 md:col-span-1 mx-auto"> {/*photo*/}
          <img src={me} className="h-28 w-16 md:h-40 md:w-24 lg:h-48 lg:w-32 rounded-md object-cover" alt='alejo' />
        </div>
      </section>
    </div>
  )
}

export default About


