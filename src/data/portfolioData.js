export const projects = [
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
];

export const techLogos = {
    Javascript: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    React: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Node.js': 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
    'Express.js': 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    MySQL: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
    HTML: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    CSS: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'Next.js': 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white',
    Tailwind: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
    Git: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
    PostgreSQL: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
};

export const education = [
    {
        titulo: 'Tecnica en Desarrollo de Aplicaciones Informáticas',
        instituto: 'Instituto Universitario Aeronáutico (IUA)',
        fecha: '2023 - 2025',
        tipo_comprobante: 'Diploma en proceso',
        terminado: true
    }
];

export const navigation = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#educacion', label: 'Educación' },
    { href: '#tecnologias', label: 'Tecnologías' },
    { href: '#contacto', label: 'Contacto' },
];

export const personalInfo = {
    nombre: 'Celina Fioretti',
    titulo: 'Desarrolladora Fullstack Junior',
    edad: 29,
    residencia: 'Argentina, Mendoza',
    correo: 'celinainesfioretti@gmail.com',
    telefono: '2612525080',
    disponible: true,
    avatar: '/img/avatar.jpg',
    cv: '/CV-CelinaFioretti.pdf',
    social: {
        github: 'https://github.com/CeliFioretti',
        linkedin: 'https://www.linkedin.com/in/celina-fioretti/',
        discord: 'https://discordapp.com/users/778703131978366976'
    }
};

export const hero = {
    title: "Desarrolladora Fullstack Junior",
    name: "Celina Fioretti",
    available: "Disponible para trabajar",
    cvUrl: "/01-CV-CelinaFioretti-ES.pdf"
};

export const aboutMe = {
    title: "Sobre mí",
    details: [
        { label: "Edad", value: "30", icon: "faUser" },
        { label: "Residencia", value: "Argentina, Mendoza", icon: "faLocationDot" },
        { label: "Correo", value: "celinainesfioretti@gmail.com", icon: "faEnvelope", link: "mailto:celinainesfioretti@gmail.com" },
        { label: "Teléfono", value: "(+54) 2612525080", icon: "faPhone" }
    ],
    description: [
        "Comencé hace ya unos años con interés por este fantástico mundo de la programación.",
        "Realicé algunos cursos y al final decidí iniciar una carrera profesional.",
        "En esos años logré afianzar diversos conceptos que abrieron mi mente para mejorar en el desarrollo de aplicaciones.",
        "También obtuve experiencia trabajando en equipo con mis compañeros y desarrollando pequeños y grandes proyectos.",
        "Actualmente sigo instruyéndome en otras tecnologías mientras busco mi primer trabajo profesional."
    ]
};
