import React from 'react'
import ProyectosMovil from '@/components/ProyectosMovil';
import Carrusel from '@/components/Carrusel';

function Proyectos() {
    return (
        <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800 flex flex-col items-center justify-center py-15'>
            <h2 className='text-5xl mb-8 fuente-blanca'>Proyectos</h2>

            {/** Carrusel de proyectos */}
            <div className='flex justify-center items-center mb-10 px-4'>
                <div className='hidden lg:block w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-xl shadow-lg text-white'>
                    <Carrusel />
                </div>
                <div className='block lg:hidden w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-xl shadow-lg text-white'>
                    <ProyectosMovil />
                </div>
            </div>


        </div>
    )
}

export default Proyectos