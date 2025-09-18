import React from 'react'
import Navbar from '@/components/Navbar'
import Carrusel from '@/components/Carrusel';
import ProyectosMobil from '@/components/ProyectosMobil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const estudios = [
  {
    titulo: 'Tecnica en Desarrollo de Aplicaciones Informáticas',
    instituto: 'Instituto Universitario Aeronáutico (IUA)',
    fecha: '2023 - 2025',
    tipo_comprobante: 'Diploma',
    terminado: true
  },
  {
    titulo: 'Ciberseguridad de Google (8 cursos)',
    instituto: 'Coursera',
    fecha: '2025 - En curso',
    tipo_comprobante: 'Certificado',
    terminado: false
  },
]

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

      {/** Proyectos */}
      <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800 flex flex-col items-center justify-center py-15'>
        <h2 className='text-5xl mb-8 fuente-blanca'>Proyectos</h2>

        {/** Carrusel de proyectos */}
        <div className='flex justify-center items-center mb-10 px-4'>
          <div className='hidden lg:block w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-xl shadow-lg text-white'>
            <Carrusel />
          </div>
          <div className='block lg:hidden w-full max-w-4xl mx-auto p-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-xl shadow-lg text-white'>
            <ProyectosMobil />
          </div>
        </div>


      </div>

      {/** Educación */}
      <div className='flex flex-col items-center justify-center font-bold fondo-blanco py-15'>
        <h2 className='text-5xl text-neutral-900'>Educación</h2>

        <div className='w-3/4 flex items-center justify-center'>
          <div className='text-center'>
            {estudios.map((estudio, i) => (
              <div key={i}>
                <h3 className='py-1.5 text-sobre-mi-detalle font-semibold text-3xl mt-8'>{estudio.titulo}</h3>
                <h4 className='text-xl italic font-light'>{estudio.instituto}</h4>
                <p className='text-sobre-mi-detalle font-light mb-5'>{estudio.fecha}</p>
                <a
                  href="#"
                  className={`py-2 px-5 text-sm text-white rounded-full ${estudio.terminado ? 'fondo-sobre-mi-detalle' : 'fondo_boton_disabled'}`}
                >
                  {estudio.tipo_comprobante}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/** Tecnologías */}
      <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800 py-15'>
        <h2 className='text-5xl mb-12 fuente-blanca flex flex-col items-center justify-center'>Tecnologías</h2>

        <div className=''>
          <div className=''>
            <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold'>Lenguajes de programación</h3>
            <div className='flex gap-8 my-8 ps-8'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="80" />
            </div>
          </div>

          <div className=''>
            <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold'>Frameworks y Librerías</h3>
            <div className='flex gap-8 my-8 ps-8'>
              <img alt='react-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="80" />
              <div class="p-2 bg-white rounded-full flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="60" />
              </div>

              <div class="p-2 bg-white rounded-full flex items-center justify-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" />
              </div>

              
              <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" width="80" alt="Tailwind CSS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="80" />
            </div>
          </div>

          <div className=''>
            <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold'>Softwares y Herramientas</h3>
            <div className='flex gap-8 my-8 ps-8'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="80" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="80" />
            </div>
          </div>

          <div className=''>
            <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold'>Actualmente aprendiendo</h3>
            <div className='flex gap-8 my-8 ps-8'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width="80" />
            </div>
          </div>
        </div>
      </div>

      {/** Hablamos */}

    </div>
  )
}

export default Home


