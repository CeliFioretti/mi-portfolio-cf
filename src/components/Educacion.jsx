import React from 'react'
import { education } from '@/data/portfolioData';

function Educacion() {
    return (
        <div className='flex flex-col items-center justify-center font-bold fondo-blanco py-15'>
            <h2 className='text-5xl text-neutral-900'>Educación</h2>

            <div className='w-3/4 flex items-center justify-center'>
                <div className='text-center'>
                    {education.map((estudio, i) => (
                        <div key={i}>
                            <h3 className='py-1.5 text-sobre-mi-detalle font-semibold text-3xl mt-8'>{estudio.titulo}</h3>
                            <h4 className='text-xl italic font-light'>{estudio.instituto}</h4>
                            <p className='text-sobre-mi-detalle font-light mb-5'>{estudio.fecha}</p>
                            <a
                                href="#"
                                className={`py-2 px-5 text-sm text-white rounded-full ${estudio.terminado ? 'fondo-sobre-mi-detalle' : 'fondo_boton_disabled cursor-not-allowed'}`}
                            >
                                {estudio.tipo_comprobante}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Educacion