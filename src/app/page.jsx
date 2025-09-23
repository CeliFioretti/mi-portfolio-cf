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
      <NavbarMain/>

      {/** Sobre mí */}
      <SobreMi />

      {/** Proyectos */}
      <Proyectos />

      {/** Educación */}
      <Educacion />

      {/** Tecnologías */}
      <Tecnologias />

      {/** Hablamos */}
      <Hablamos />

      {/** Footer */}
      <Footer />

    </div>
  )
}

export default Home


