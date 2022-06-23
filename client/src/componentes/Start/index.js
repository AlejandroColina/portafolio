import React from 'react';
import { Link } from 'react-router-dom';
import linkedIn from '../../assets/linked.ico';
import gitHub from '../../assets/git.ico';
import TypeWriterEffect from 'react-typewriter-effect';
import pic from '../../assets/starPc.gif';

function LandingP() {
    let urlLinkedIn = 'https://www.linkedin.com/in/alejandro-colina-18b84671/';
    let urlGitHub = 'https://github.com/AlejandroColina';
    return (
        <section className="h-screen w-screen" id='Landing'>
            <img src={pic} alt='pics' className="
            absolute resize-x 
            w-full h-screen 
            bg-contain
            object-cover"
            />
            <div className="h-screen w-full relative bg-gif flex justify-center items-center">
                <div className="grid grid-rows-2 py-8 justify-center gap-8 max-h-96">
                    <div className="flex flex-col justify-center items-center">
                        <div className=" flex justify-center items-center mb-4 sm:mb-5">
                            <h1 className="text-4xl text-white font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl">Alejandro Colina</h1>
                        </div>
                        <div className=" flex justify-center items-center">
                            <TypeWriterEffect
                                textStyle={{ fontWeight: 'lighter', color: 'white', fontFamily: 'Barlow', textAlign: 'center', fontSize: '1.2rem' }}
                                typeSpeed={50}
                                startDelay={100}
                                cursorColor="white"
                                text={'Apasionado en comprender el mundo de la tecnología.'}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="h-24 w-64 flex justify-evenly sm:justify-around md:mb-4 items-center">
                            <a href={urlLinkedIn}>
                                <img src={linkedIn} alt='linkedIn' className="h-10 sm:h18 lg:20" />
                            </a>
                            <a href={urlGitHub} >
                                <img src={gitHub} alt='git' className="h-10 sm:h18 lg:20" />
                            </a>
                        </div>
                        <div className="w-30 h-10 sm:w-50 sm:h-50 lg:w-50 mt-4 md:mt-8 rounded-md hover:bg-white transition duration-1000">
                            <Link to={''} className=" h-10 w-30 text-sm text-white px-4 sm:text-xl border-2 border-white rounded-md flex justify-center items-center hover:text-black">{/* btnPrincipal */}
                                More About Me
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LandingP