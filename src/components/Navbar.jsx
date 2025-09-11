'use client'

import { useState } from 'react'
import React from 'react'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className='fondo-negro text-amber-50 p-4'>
            <div className='flex justify-between items-center md:hidden'>
                <button onClick={() => { setOpen(!open) }} className='text-amber-50 focus:outline-none'>
                    ☰
                </button>
            </div>

            {/** Menú desplegable en sm */}
            <nav className={`${open ? 'block' : 'hidden'} md:hidden mt-4 space-y-2`}>
                <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Inicio</a>
                <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Sobre mí</a>
                <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Proyectos</a>
                <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Educación</a>
                <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Tecnologías</a>
                <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Contacto</a>
            </nav>

            {/** Menú horizontal en md+ */}
            <div className='flex items-center justify-center'>
                <nav className='hidden md:grid md:max-w-6xl md:w-full p-3 md:grid-cols-6 text-amber-50 md:divide-x md:divide-amber-50 text-sm'>
                    <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Inicio</a>
                    <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Sobre mí</a>
                    <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Proyectos</a>
                    <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Educación</a>
                    <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Tecnologías</a>
                    <a className='block hover:text-amber-500 px-4 py-2 text-center' href="#">Contacto</a>
                </nav>
            </div>


        </header>
    )
}

export default Navbar