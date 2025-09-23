import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function NavbarMain() {
    return (
        <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800'>
            {/** Contenido principal */}
            <Navbar />

            {/** Información personal */}
            <Main />
        </div>
    )
}

export default NavbarMain