import { technologies } from './technologies';
export type SiteConfig = typeof works;

export const works = {
    list: [
        {
            key: "Osmoz",
            technologies: ["Nextjs","NextUI", "Tailwind"],
            title: "Osmoz - MechanicProblem Solver",
            resumen: {
                ES: "Aplicación web moderna para un taller mecánico que optimiza la gestión de servicios automotrices. Implementa un sistema de reservas en tiempo real, seguimiento de servicios y comunicación directa con los clientes. Desarrollada con las últimas tecnologías web para garantizar una experiencia de usuario fluida y responsiva.",
                EN: "Modern web application for an automotive workshop that optimizes service management. Features real-time booking system, service tracking, and direct customer communication. Built with cutting-edge web technologies to ensure a smooth and responsive user experience."
            },
            detail: "",
            url: "https://osmoz.vercel.app/",
            github: "https://github.com/sotacode/oscarfront",
            img: "/home/osmoz-layouts.webp",
        },
        {
            key: "ValorantInfo",
            technologies: ["Nextjs","NextUI", "Tailwind"],
            title: "Valorant Info",
            resumen: {
                ES: "Plataforma web interactiva que consume la API oficial de Valorant para proporcionar estadísticas detalladas, información de agentes y análisis de juego en tiempo real. Implementa una interfaz moderna y atractiva con animaciones fluidas y diseño responsivo, demostrando habilidades avanzadas en integración de APIs y manejo de datos dinámicos.",
                EN: "Interactive web platform that consumes the official Valorant API to provide detailed statistics, agent information, and real-time game analysis. Features a modern and engaging interface with smooth animations and responsive design, demonstrating advanced skills in API integration and dynamic data handling."
            },
            detail: "",
            url: "https://sotacode-valorantinfo.vercel.app/",
            github: "https://github.com/sotacode/valorantinfo",
            img: "/home/valorant-layouts.webp",
        },
        // {
        //     key: "heroesapp",
        //     technologies: ["Reactjs", "Vite"],
        //     title: "Heroes App",
        //     resumen: {
        //         ES: "Aplicación web sofisticada que implementa un sistema de enrutamiento complejo y gestión de estado avanzada en React. Presenta una interfaz de usuario dinámica con animaciones personalizadas, búsqueda en tiempo real y filtrado de héroes. Demuestra sólidos conocimientos en arquitectura de aplicaciones SPA y mejores prácticas de React.",
        //         EN: "Sophisticated web application implementing complex routing system and advanced state management in React. Features dynamic UI with custom animations, real-time search, and hero filtering. Demonstrates solid understanding of SPA architecture and React best practices."
        //     },
        //     detail: "",
        //     url: "https://heroesaplicationsotacode.netlify.app/",
        //     github: "https://github.com/sotacode/heroesapp",
        //     img: "/home/heroesbg.webp",
        // },
        // {
        //     key: "sotagiphy",
        //     technologies: ["Reactjs", "Vite"],
        //     title: "Sota Giphy",
        //     resumen: {
        //         ES: "Aplicación web que demuestra integración avanzada con la API de Giphy, implementando búsqueda en tiempo real, paginación infinita y optimización de rendimiento. Incluye características como almacenamiento en caché, gestión de estados complejos y manejo eficiente de recursos multimedia.",
        //         EN: "Web application showcasing advanced integration with Giphy API, implementing real-time search, infinite scrolling, and performance optimization. Includes features like caching, complex state management, and efficient media resource handling."
        //     },
        //     detail: "",
        //     url: "https://sotagiphy.netlify.app/",
        //     github: "https://github.com/sotacode/sota-giphy",
        //     img: "/home/giphy.webp",
        // },
        {
            key: "localbd",
            technologies: ["Docker Compose", "Postgres", "pgAdmin"],
            title: "Postgres+pgAdmin Local",
            resumen: {
                ES: "Solución DevOps automatizada que simplifica el despliegue de entornos de desarrollo de bases de datos. Utiliza Docker Compose para orquestar contenedores de PostgreSQL y pgAdmin, implementando mejores prácticas de seguridad y configuración. Incluye scripts de inicialización y respaldo automático.",
                EN: "Automated DevOps solution that simplifies database development environment deployment. Uses Docker Compose to orchestrate PostgreSQL and pgAdmin containers, implementing security and configuration best practices. Includes initialization scripts and automatic backup."
            },
            detail: "",
            url: "",
            github: "https://github.com/sotacode/postgres-pgadmin-docker-compose",
            img: "/home/pgadmin-layout.webp",
        },
        // {
        //     key: "learnreact",
        //     technologies: ["Reactjs", "Vite"],
        //     title: "Learn React Hooks",
        //     resumen: {
        //         ES: "Proyecto educativo completo que demuestra el dominio avanzado de React Hooks, incluyendo implementaciones personalizadas y patrones de diseño complejos. Presenta casos de uso prácticos, optimización de rendimiento y gestión de efectos secundarios, ideal para mostrar comprensión profunda de React.",
        //         EN: "Comprehensive educational project demonstrating advanced mastery of React Hooks, including custom implementations and complex design patterns. Features practical use cases, performance optimization, and side-effect management, ideal for showcasing deep React understanding."
        //     },
        //     detail: "",
        //     url: "https://sotageneralhooks.netlify.app/",
        //     github: "https://github.com/sotacode/react-hooks",
        //     img: "/home/reacthooks.webp",
        // },
    ]
}