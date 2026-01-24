import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { aboutMe } from '@/data/portfolioData';

const iconMap = {
    faUser: faUser,
    faEnvelope: faEnvelope,
    faLocationDot: faLocationDot,
    faPhone: faPhone
};

function SobreMi() {
    return (
        <div className='flex flex-col items-center justify-center font-bold fondo-blanco py-15'>
            <h2 className='text-5xl mb-8 text-neutral-900'>{aboutMe.title}</h2>

            <div className='md:flex items-center justify-center pb-10'>
                {/** Details Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {aboutMe.details.map((detail, index) => (
                        <div key={index} className='text-zinc-950 text-sm flex items-center justify-start gap-2 p-2'>
                            <FontAwesomeIcon icon={iconMap[detail.icon]} className="hover:text-amber-500 transition-colors duration-300 text-2xl w-8" />
                            <div className='data-box text-lg rounded-lg p-1.5 w-80 font-normal'>
                                <span className='font-medium'>{detail.label}</span>: {detail.link ? (
                                    <a href={detail.link} className='text-blue-600 underline hover:text-blue-500 cursor-pointer'>
                                        {detail.value}
                                    </a>
                                ) : (
                                    detail.value
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/** Detalles Sobre mí */}
            <div className='w-3/4 flex items-center justify-center'>
                <div className='text-2xl font-normal text-sobre-mi text-justify'>
                    {aboutMe.description.map((paragraph, index) => (
                        <div key={index} className={`py-1.5 ${index === aboutMe.description.length - 1 ? 'text-sobre-mi-detalle font-medium' : ''}`}>
                            {paragraph}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SobreMi