import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { hero, personalInfo } from '@/data/portfolioData';

function Main() {
    return (
        <main className='p-8 md:flex items-center justify-between'>

            <div className='flex flex-col items-center justify-center w-full'>
                <h2 className='text-4xl fuente-blanca italic mb-6'>{hero.title}</h2>
                <h1 className='text-6xl mb-8 color-fuente-naranja font-[900]'>{hero.name}</h1>

                <div className='flex gap-6 mb-6'>

                    <a
                        href={hero.cvUrl}
                        download
                        className="py-2 px-5 text-sm text-white rounded-full bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 animate-pulse-glow transition-all duration-300"
                    >
                        Descargar CV
                    </a>

                    <div className='flex items-center justify-center gap-2'>
                        <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></span>
                        <p className='text-sm text-amber-50'>{hero.available}</p>
                    </div>

                </div>

                <div className='flex gap-8 text-amber-50 text-3xl mb-8'>
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="hover:text-amber-500 transition-colors duration-300" />
                    </a>
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-amber-500 transition-colors duration-300" />
                    </a>
                    <a href={personalInfo.social.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
                        <FontAwesomeIcon icon={faDiscord} className="hover:text-amber-500 transition-colors duration-300" />
                    </a>

                </div>
            </div>

            {/** Imagen Avatar */}
            <div className='w-full flex justify-center items-center'>
                <Image
                    src={personalInfo.avatar}
                    alt={`Imagen de ${personalInfo.nombre}`}
                    width={320}
                    height={320}
                    className="w-80 h-80 rounded-full shadow-xl shadow-black/40 object-cover"
                    priority
                />
            </div>
        </main>
    )
}

export default Main