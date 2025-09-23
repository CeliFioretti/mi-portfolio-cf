import React from 'react'

function Tecnologias() {
    return (
        <div className='bg-gradient-to-br from-black via-gray-900 to-neutral-800 pt-15 pb-8'>
            <h2 className='text-5xl mb-12 fuente-blanca flex flex-col items-center justify-center'>Tecnologías</h2>

            <div className=''>

                {/** Lenguajes de Programación */}
                <div className=''>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold w-2/5'>Lenguajes de programación</h3>
                    <div className='flex gap-8 my-8 ps-8'>
                        {/** Javascript */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="JavaScript"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                JavaScript
                            </span>
                        </div>
                        {/** Java */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                alt="Java"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Java
                            </span>
                        </div>
                    </div>
                </div>

                {/** Frameworks */}
                <div className=''>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold w-3/5'>Frameworks y Librerías</h3>
                    <div className='flex gap-8 my-8 ps-8'>
                        {/** React */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="React"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                React.js
                            </span>
                        </div>

                        {/** Next.js */}
                        <div className="relative group w-20 h-20">
                            <div className="p-2 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                    alt="Next.js"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Next.js
                            </span>
                        </div>

                        {/** Express.js */}
                        <div className="relative group w-20 h-20">
                            <div class="p-2 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                    alt="Express.js"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Express.js
                            </span>
                        </div>

                        {/** Tailwind CSS */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.simpleicons.org/tailwindcss/38B2AC"
                                alt="Tailwind Css"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Tailwind CSS
                            </span>
                        </div>

                        {/** Bootstrap */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                alt="Bootstrap"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Bootstrap
                            </span>
                        </div>
                    </div>
                </div>

                {/** Softwares y Herramientas */}
                <div className=''>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold w-4/5'>Softwares y Herramientas</h3>
                    <div className='flex gap-8 my-8 ps-8'>
                        {/** HTML */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="HTML"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                HTML
                            </span>
                        </div>

                        {/** CSS */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                alt="CSS"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                CSS
                            </span>
                        </div>

                        {/** Wordpress */}
                        <div className="relative group w-20 h-20">
                            <div class="p-3 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                                    alt="Wordpress"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Wordpress
                            </span>
                        </div>

                        {/** Git */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                alt="Git"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Git
                            </span>
                        </div>

                        {/** MySQL */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                alt="MySQL"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                MySQL
                            </span>
                        </div>

                        {/** Markdown */}
                        <div className="relative group w-20 h-20">
                            <div class="p-2 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
                                    alt="Markdown"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Markdown
                            </span>
                        </div>

                        {/** Node.js */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                alt="Node.js"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Node.js
                            </span>
                        </div>

                        {/** NPM */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                                alt="NPM"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                npm
                            </span>
                        </div>
                    </div>
                </div>

                {/** Actualmente aprendiendo */}
                <div className=''>
                    <h3 className='bg-gradient-to-r from-red-500 to-yellow-400 text-4xl text-amber-50 ps-8 py-2 font-semibold'>Actualmente aprendiendo</h3>

                    <div className='flex gap-8 my-8 ps-8'>
                        {/** Csharp */}
                        <div className="relative group w-20 h-20">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                                alt="Csharp"
                                className="w-full h-full object-contain"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Csharp
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias