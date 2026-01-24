'use client'

import React from 'react'
import Image from 'next/image';
import { projects, techLogos } from '@/data/portfolioData';

function ProyectosMovil() {

    return (
        <div>
            {projects.map((proyecto, i) => (
                <div key={i} className={`rounded-xl p-5 mb-8 text-center flex flex-col items-center justify-center ${proyecto.terminado ? 'bg-neutral-900' : 'bg-neutral-900 opacity-60'}`}>
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
                    <p className="text-xl text-justify leading-relaxed mt-2 mb-2">{proyecto.descripcion}</p>

                    <div className="flex flex-wrap gap-2 justify-center my-5">
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
    )
}

export default ProyectosMovil