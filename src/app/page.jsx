import React from 'react'
import Navbar from '@/components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className='animate-fade-in'>

      {/** Navbar y Presentación */}
      <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800'>
        {/** Contenido principal */}
        <Navbar />

        <main className='p-8 md:flex items-center justify-between'>
          {/** Información personal */}
          <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-4xl fuente-blanca italic mb-6'>Desarrolladora Fullstack Web Junio</h2>
            <h1 className='text-6xl mb-8 color-fuente-naranja font-[900]'>Celina Fioretti</h1>

            <div className='flex gap-6 mb-6'>

              <a
                href="#"
                className="py-2 px-5 text-sm text-white rounded-full bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 animate-pulse-glow transition-all duration-300"
              >
                Descargar CV
              </a>

              <div className='flex items-center justify-center gap-2'>
                <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></span>
                <p className='text-sm text-amber-50'>Disponible para trabajar</p>
              </div>

            </div>

            <div className='flex gap-8 text-amber-50 text-3xl mb-8'>
              <a href="https://github.com/CeliFioretti" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="hover:text-amber-500 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/celina-fioretti/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-amber-500 transition-colors duration-300" />
              </a>
              <a href="https://discordapp.com/users/778703131978366976" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} className="hover:text-amber-500 transition-colors duration-300" />
              </a>

            </div>
          </div>

          {/** Imagen Avatar */}
          <div className='w-full flex justify-center items-center'>
            <img
              src="/img/imagen-avatar.jpg" alt="Imagen propia" className="w-80 h-80 rounded-full shadow-xl shadow-black/40"
            />
          </div>
        </main>
      </div>
      {/** Sobre mí */}

      <div className='flex flex-col items-center justify-center font-bold fondo-blanco'>
        <h2 className='text-5xl my-8'>Sobre mí</h2>

        <div>
            <div className='text-zinc-950 text-sm flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faUser} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
              <div className='data-box text-lg rounded-lg p-1.5'>
                Edad: 29
              </div>
            </div>

            <div className='text-zinc-950 text-sm flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faEnvelope} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
              <div className='data-box text-lg rounded-lg p-1.5'>
                Correo: <span className='text-blue-600 underline hover:text-blue-500'>celinainesfioretti@gmail.com</span>
              </div>
            </div>

            <div className='text-zinc-950 text-sm flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faLocationDot} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
              <div className='data-box text-lg rounded-lg p-1.5'>
                Residencia: Argentina, Mendoza
              </div>

            </div>
            <div className='text-zinc-950 text-sm flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faPhone} className="hover:text-amber-500 transition-colors duration-300 text-2xl" />
              <div className='data-box text-lg rounded-lg p-1.5'>
                Teléfono: 2612525080
              </div>
            </div>
        </div>

        {/**
         * 
         * <div>
          <p>Comencé hace ya unos años con interés por este fantástico mundo de la programación.
            Realicé algunos cursos y al final decidí iniciar una carrera profesional.
            En esos años logré afianzar diversos conceptos que abrieron mi mente para mejorar en el desarrollo de aplicaciones.
            También obtuve experiencia trabajando en equipo con mis compañeros y desarrollando pequeños y grandes proyectos.
            Actualmente sigo instruyéndome en otras tecnologías mientras busco mi primer trabajo profesional.
            <span>Actualmente sigo instruyéndome en otras tecnologías mientras busco mi primer trabajo profesional.</span></p>
        </div>
         * 
         */}

      </div>
      {/** Proyectos */}


      {/** Educación */}


      {/** Tecnologías */}


      {/** Hablamos */}

    </div>
  )
}

export default Home