import { technologies } from './technologies';
export type SiteConfig = typeof works;

export const works = {
    list: [
        {
            key: "Osmoz",
            technologies: ["Nextjs","NextUI", "Tailwind"],
            title: "Osmoz - MechanicProblem Solver",
            resumen: {
                ES: "Pagina que despliega servicios, booking y contacto para un taller mecánico.",
                EN: "Website that displays services, booking and contact for a mechanic workshop."
            },
            detail: "",
            url: "https://osmoz.vercel.app/",
            github: "https://github.com/sotacode/oscarfront",
            img: "/home/osmoz.png",
        },
        {
            key: "ValorantInfo",
            technologies: ["Nextjs","NextUI", "Tailwind"],
            title: "Valorant Info",
            resumen: {
                ES: "Visualización de información del juego Valorant de Riot Games consumiendo VALORANT-API.",
                EN: "Visualization of Valorant game information from Riot Games using the VALORANT-API."
            },
            detail: "",
            url: "https://sotacode-valorantinfo.vercel.app/",
            github: "https://github.com/sotacode/valorantinfo",
            img: "/home/valoinfo.png",
        },
        // {
        //     key: "portfolio",
        //     technologies: ["Nextjs","NextUI", "Tailwind"],
        //     title: "SotaCode Web",
        //     resumen: {
        //         ES: "Es básicamente esta misma página, aquí muestro mis habilidades.",
        //         EN: "It's basically this same page where I showcase my skills."
        //     },
        //     detail: "",
        //     url: "https://www.nelsota.com/",
        //     github: "https://github.com/sotacode/portafolio",
        //     img: "/home/webpagesotacode.png",
        // },
        {
            key: "heroesapp",
            technologies: ["Reactjs", "Vite"],
            title: "Heroes App",
            resumen: {
                ES: "Visualización de héroes y sitio con enrutamiento.",
                EN: "Heroes visualization and routing website."
            },
            detail: "",
            url: "https://heroesaplicationsotacode.netlify.app/",
            github: "https://github.com/sotacode/heroesapp",
            img: "/home/heroesbg.jpg",
        },
        {
            key: "sotagiphy",
            technologies: ["Reactjs", "Vite"],
            title: "Sota Giphy",
            resumen: {
                ES: "Despliegue de GIF's consumiendo API Giphy.",
                EN: "Display GIFs consuming Giphy API."
            },
            detail: "",
            url: "https://sotagiphy.netlify.app/",
            github: "https://github.com/sotacode/sota-giphy",
            img: "/home/giphy.jpg",
        },
        {
            key: "localbd",
            technologies: ["Docker Compose", "Postgres", "pgAdmin"],
            title: "Postgres+pgAdmin Local",
            resumen: {
                ES: "Levantamiento de base de datos Postgres y administrador de base de datos local en 1 linea de comando.",
                EN: "Local deployment of Postgres database and admin using a single command line."
            },
            detail: "",
            url: "",
            github: "https://github.com/sotacode/postgres-pgadmin-docker-compose",
            img: "/home/dockercompose.jpg",
        },
        {
            key: "learnreact",
            technologies: ["Reactjs", "Vite"],
            title: "Learn React Hooks",
            resumen: {
                ES: "Web donde se implementaron todos los hooks y algunos personalizados.",
                EN: "Website where all the React hooks, including some custom ones, were implemented."
            },
            detail: "",
            url: "https://sotageneralhooks.netlify.app/",
            github: "https://github.com/sotacode/react-hooks",
            img: "/home/reacthooks.png",
        },
    ]
}