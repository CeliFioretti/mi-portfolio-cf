import React from 'react'
import SobreMi from '@/components/SobreMi';
import Proyectos from '@/components/Proyectos';
import Educacion from '@/components/Educacion';
import Tecnologias from '@/components/Tecnologias';
import Hablamos from '@/components/Hablamos';
import NavbarMain from '@/components/NavbarMain';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className='animate-fade-in'>

      {/** Navbar y Presentación */}
      <section id='inicio'>
        <NavbarMain />
      </section>

      {/** Sobre mí */}
      <section id='sobre-mi'>
        <SobreMi />
      </section>

      {/** Proyectos */}
      <section id='proyectos'>
        <Proyectos />
      </section>

      {/** Educación */}
      <section id='educacion'>
        <Educacion />
      </section>

      {/** Tecnologías */}
      <section id='tecnologias'>
        <Tecnologias />
      </section>

      {/** Hablamos */}
      <section id='contacto'>
        <Hablamos />
      </section>

      {/** Footer */}
      <Footer />

    </div>
  )
}

export default Home


