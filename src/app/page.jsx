import React from 'react'
import SobreMi from '@/components/SobreMi';
import Proyectos from '@/components/Proyectos';
import Educacion from '@/components/Educacion';
import Tecnologias from '@/components/Tecnologias';
import Hablamos from '@/components/Hablamos';
import Footer from '@/components/Footer';
import NavbarMain from '@/components/NavbarMain';
import ScrollToTop from '@/components/ScrollToTop';

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

      <ScrollToTop />

    </div>
  )
}

export default Home


