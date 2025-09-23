import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function SobreMi() {
    return (
        <div className='flex flex-col items-center justify-center font-bold fondo-blanco py-15'>
            <h2 className='text-5xl mb-8 text-neutral-900'>Sobre mí</h2>

            <div className='md:flex items-center justify-center pb-10'>
                {/** Box 1 */}
                <div className='md:me-4'>
                    <div className='text-zinc-950 text-sm flex items-center justify-center gap-2 p-2'>
                        <FontAwesomeIcon icon={faUser} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
                        <div className='data-box text-lg rounded-lg p-1.5 w-96 font-normal'>
                            <span className='font-medium'>Edad</span>: 29
                        </div>
                    </div>

                    <div className='text-zinc-950 text-sm flex items-center justify-center gap-2 p-2'>
                        <FontAwesomeIcon icon={faLocationDot} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
                        <div className='data-box text-lg rounded-lg p-1.5 w-96 font-normal'>
                            <span className='font-medium'>Residencia</span>: Argentina, Mendoza
                        </div>
                    </div>
                </div>
                {/** Box 2 */}
                <div>
                    <div className='text-zinc-950 text-sm flex items-center justify-center gap-2 p-2'>
                        <FontAwesomeIcon icon={faEnvelope} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
                        <div className='data-box text-lg rounded-lg p-1.5 w-96 font-normal'>
                            <span className='font-medium'>Correo</span>: <span className='text-blue-600 underline hover:text-blue-500'>celinainesfioretti@gmail.com</span>
                        </div>
                    </div>

                    <div className='text-zinc-950 text-sm flex items-center justify-center gap-2 p-2'>
                        <FontAwesomeIcon icon={faPhone} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
                        <div className='data-box text-lg rounded-lg p-1.5 w-96 font-normal'>
                            <span className='font-medium'>Teléfono</span>: 2612525080
                        </div>
                    </div>

                </div>
            </div>

            {/** Detalles Sobre mí */}
            <div className='w-3/4 flex items-center justify-center'>
                <div className='text-2xl font-normal text-sobre-mi text-justify'>

                    <div className='py-1.5'>Comencé hace ya unos años con interés por este fantástico mundo de la programación.</div>

                    <div className='py-1.5'>
                        Realicé algunos cursos y al final decidí iniciar una carrera profesional.
                    </div>

                    <div className='py-1.5'>
                        En esos años logré afianzar diversos conceptos que abrieron mi mente para mejorar en el desarrollo de aplicaciones.
                    </div>

                    <div className='py-1.5'>
                        También obtuve experiencia trabajando en equipo con mis compañeros y desarrollando pequeños y grandes proyectos.
                    </div>

                    <div className='py-1.5 text-sobre-mi-detalle font-medium'>
                        Actualmente sigo instruyéndome en otras tecnologías mientras busco mi primer trabajo profesional.
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SobreMi