import React, { useState } from 'react'
import { certificados } from '../Project/infoCards';
// import styles from './styles.module.css';

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
        <div id='Certifications' className="w-full min-h-full ">{/*principal*/}

            <h2 className='
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
                text-center font-light
                mx-auto mt-4 md:mt-8 py-4'
            >Certificaciones</h2>

            <div className="
            h-2/6 w-4/6 lg:h-4/6 lg:w-4/6 mt-4 
            mx-auto
            ">
                <img className="w-full h-full rounded-lg "
                    alt='certificados'
                    src={certificados[index]}
                />{/*imgs*/}

                <div className="
                h-12 w-full 
                z-10 -translate-y-[25vh] sm:-translate-y-[40vh] md:-translate-y-[55vh] lg:-translate-y-[75vh]
                flex justify-between items-center 
                mx-auto
                "
                >
                    <button
                        onClick={handlePrev}
                        disabled={index <= 0 ? true : false}
                        className="
                        h-10 w-10 bg-gray-400 text-black border text-base sm:text-sm md:text-lg mb-2 
                        border-gray-300 rounded-full 
                        hover:bg-gray-800 hover:text-white 
                        transition duration-1000"
                    >{/*btnImg*/}
                        {'<'}

                    </button>
                    <button
                        onClick={handleNext}
                        disabled={index >= certificados.length - 1 ? true : false}
                        className="
                        h-10 w-10 bg-gray-400 text-black border text-base sm:text-sm md:text-lg mb-2 
                        border-gray-300 rounded-full 
                        hover:bg-gray-800 hover:text-white 
                        transition duration-1000"
                    >{/*btnImg*/}
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Certificacions;