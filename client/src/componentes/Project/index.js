import React from 'react'
import { infoCards } from './infoCards';
// import styles from './styles.module.css';

function Projects() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-[#f6f7f8]" id='Projects'>{/*principal*/}
            <div>{/*subPrincipal_uno*/}
                <h2 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl mt-4 md:mt-8 py-4">Mis Proyectos</h2>
            </div>
            <div className="w-full min-h-full md:w-4/5 md:min-h-full flex flex-wrap md:flex-wrap justify-center items-center">{/*subPrincipal_dos*/}
                {
                    infoCards && infoCards?.map((app, index) => {
                        return (
                            <div key={index} className="max-h-auto w-80 m-6 lg:my-6 lg:mx-10 rounded-xl md:w-96 shadow-2xl transition duration-1000 hover:shadow-[black] border border-gray-300">{/*divProject*/}
                                <div className="h-40 w-full md:h-48" >{/*imgApp*/}
                                    <img className='max-h-full w-full rounded-tl-xl rounded-tr-xl' src={app?.image} alt={app?.title} />
                                </div>
                                <div className="max-h-1/2 w-full px-2" >{/*info*/}
                                    <h2 className='text-center text-base sm:text-sm lg:text-xl md:py-2 font-bold my-1 ' >{app?.title}</h2>
                                    <p className='text-base sm:text-sm md:text-lg text-justify md:px-4 my-1' >{app?.description}</p>
                                </div>
                                <hr className='w-4/5 mx-auto my-2' />
                                <div className="h-14 w-full flex justify-evenly items-center " >{/*info*/}
                                    <button className='h-8 w-24 border text-base sm:text-sm md:text-lg mb-2 border-gray-500 rounded-sm hover:bg-gray-400 hover:text-white transition duration-1000' >Deploy</button>
                                    <button className='h-8 w-24 border text-base sm:text-sm md:text-lg mb-2 border-gray-500 rounded-sm hover:bg-gray-400 hover:text-white transition duration-1000' >GitHub</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects