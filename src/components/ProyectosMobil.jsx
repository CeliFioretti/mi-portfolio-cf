'use client'

import React from 'react'

const proyectos = [
    {
        titulo: 'Sistema de Gestión de Freezers',
        descripcion: 'Gestión de carga, envío y préstamos con autenticación por token, roles y vistas personalizadas',
        imagen: '/img/freezer-app.png',
        tecnologias: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express.js', 'MySQL', 'Git'],
        github: 'https://github.com/CeliFioretti/logirefrigeracion',
        terminado: true
    },
    {
        titulo: 'Chat App',
        descripcion: 'Aplicación de mensajería online con registro, login y envío de mensajes en tiempo real. Enfocada en seguridad, escalabilidad y experiencia de usuario.',
        imagen: '/img/no-disponible.png',
        tecnologias: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express.js', 'Next.js', 'Tailwind', 'PostgreSQL', 'Git'],
        github: 'https://github.com/CeliFioretti/chaty-app',
        terminado: false
    }
]
const logos = {
    Javascript:
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    React:
        'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Node.js':
        'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
    'Express.js':
        'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    MySQL:
        'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
    HTML:
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    CSS:
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'Next.js':
        'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white',
    Tailwind:
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
    Git:
        'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
    PostgreSQL:
        'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',

};

function ProyectosMobil() {

    return (
        <div>
            {proyectos.map((proyecto, i) => (
                <div key={i} className={`rounded-xl p-5 mb-8 text-center flex flex-col items-center justify-center ${proyecto.terminado ? 'bg-neutral-900' : 'bg-neutral-900 opacity-60'}`}>
                    <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-4" />

                    <h3 className="text-3xl font-semibold">{proyecto.titulo}</h3>
                    <p className="text-xl text-justify leading-relaxed mt-2 mb-2">{proyecto.descripcion}</p>

                    <div className="flex flex-wrap gap-2 justify-center my-5">
                        {proyecto.tecnologias.map((tech, i) => (
                            <img key={i} src={logos[tech]} alt={tech} className="h-8" />
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

export default ProyectosMobil