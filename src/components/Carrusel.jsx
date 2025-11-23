'use client'

import React from 'react'
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { projects, techLogos } from '@/data/portfolioData';

function Carrusel() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: 'snap',
        slides: { perView: 1 },
        renderMode: "performance"
    });

    return (
        <div className='relative w-full max-w-4xl mx-auto'>
            {/**Carrusel */}
            <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
                {projects.map((proyecto, i) => (
                    <div key={i} className={`keen-slider__slide min-w-full flex flex-col items-center p-4 sm:p-6 rounded-xl text-white ${proyecto.terminado ? 'bg-neutral-900' : 'bg-neutral-900 opacity-60'}`}>
                        <div className="w-full h-auto max-h-[400px] relative mb-4">
                            <Image
                                src={proyecto.imagen}
                                alt={proyecto.titulo}
                                width={800}
                                height={400}
                                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                            />
                        </div>

                        <h3 className="text-3xl font-semibold">{proyecto.titulo}</h3>
                        <p className="text-xl text-justify leading-relaxed py-5">{proyecto.descripcion}</p>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {proyecto.tecnologias.map((tech, i) => (
                                <img key={i} src={techLogos[tech]} alt={tech} className="h-8" />
                            ))}
                        </div>

                        {proyecto.terminado ? (
                            <a
                                href={proyecto.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 text-amber-400 text-lg hover:scale-105 transition-transform duration-300"
                            >
                                Ver en Github
                            </a>
                        ) : (
                            <span className='mt-4 text-gray-400 text-lg cursor-not-allowed'>
                                En desarrollo
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/**Flechas */}
            <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute top-1/2 -translate-y-1/2 -left-20 bg-zinc-600/40 hover:bg-black/70 text-white p-2 rounded-full"
            >
                <FaChevronLeft size={20} />
            </button>

            <button
                onClick={() => instanceRef.current?.next()}
                className="absolute top-1/2 -translate-y-1/2 -right-20 bg-zinc-600/40 hover:bg-black/70 text-white p-2 rounded-full"
            >
                <FaChevronRight size={20} />
            </button>
        </div>
    )
}

export default Carrusel