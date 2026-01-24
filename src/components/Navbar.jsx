'use client'

import { useState } from 'react'
import React from 'react'
import { navigation } from '@/data/portfolioData';

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className='text-amber-50 p-4 '>
            <div className='flex justify-between items-center md:hidden'>
                <button onClick={() => { setOpen(!open) }} className='text-amber-50 focus:outline-none cursor-pointer' aria-label='Menú'>
                    ☰
                </button>
            </div>

            {/** Menú desplegable en sm */}
            <nav className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden  ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } mt-4 space-y-2 `}>
                {navigation.map((item, i) => (
                    <a key={i} className='block hover:text-amber-500 px-4 py-2 text-center' href={item.href}>{item.label}</a>
                ))}
            </nav>

            {/** Menú horizontal en md+ */}
            <div className='flex items-center justify-center '>
                <nav className='hidden md:grid md:max-w-6xl md:w-full p-3 md:grid-cols-6 text-amber-50 md:divide-x md:divide-amber-50 text-sm'>
                    {navigation.map((item, i) => (
                        <a key={i} className='block hover:text-amber-500 px-4 py-2 text-center' href={item.href}>{item.label}</a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar