import React from 'react'

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-black via-gray-900 to-neutral-800 text-gray-300 py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-lg font-medium mb-2">✨ Gracias por visitar mi portfolio ✨</p>
                <p className="text-sm">© 2025 Celina Fioretti</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a
                        href="https://github.com/CeliFioretti"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/celina-fioretti/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:celinainesfioretti@gmail.com"
                        className="hover:text-white transition"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
