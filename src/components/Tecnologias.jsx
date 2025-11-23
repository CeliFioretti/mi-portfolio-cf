import React from 'react';

const technologies = {
    languages: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
    frameworks: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', bgWhite: true },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', bgWhite: true },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/38B2AC' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
    tools: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Wordpress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', bgWhite: true },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg', bgWhite: true },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    ],
    learning: [
        { name: 'Csharp', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ]
};

const TechItem = ({ tech }) => (
    <div className="relative group w-20 h-20">
        {tech.bgWhite ? (
            <div className="p-2 bg-white rounded-full flex items-center justify-center w-full h-full">
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                />
            </div>
        ) : (
            <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
            />
        )}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
            {tech.name}
        </span>
    </div>
);

function Tecnologias() {
    return (
        <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800 pt-15 pb-8'>
            <h2 className='text-5xl mb-12 fuente-blanca flex flex-col items-center justify-center'>Tecnologías</h2>

            <div>

                {/* Lenguajes de Programación */}
                <div>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold md:w-2/5'>Lenguajes de programación</h3>
                    <div className='flex flex-wrap gap-8 my-8 ps-8'>
                        {technologies.languages.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Frameworks */}
                <div>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold md:w-3/5'>Frameworks y Librerías</h3>
                    <div className='flex flex-wrap gap-8 my-8 ps-8'>
                        {technologies.frameworks.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Softwares y Herramientas */}
                <div>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold md:w-4/5'>Softwares y Herramientas</h3>
                    <div className='flex flex-wrap gap-8 my-8 ps-8'>
                        {technologies.tools.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </div>
                </div>

                {/* Actualmente aprendiendo */}
                <div>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold'>Actualmente aprendiendo</h3>

                    <div className='flex flex-wrap gap-8 my-8 ps-8'>
                        {technologies.learning.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tecnologias;