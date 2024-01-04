export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "SotaCode",
	description: "Hola!, Soy Nelson Rivera, aquí encontrarás mi perfil profesional donde muestro mis trabajos personales.",
	texts: {
		resume: {
			ES: "Un apasionado del desarrollo software en todas sus áreas.",
			EN: "A passionate software developer in all its aspects."
		},
		aboutMe: {
			one: {
				ES: "Soy un apasionado desarrollador full-stack con 2 años de experiencia profesional en el mundo del desarrollo de software.",
				EN: "I'm a passionate full-stack developer with 2 years of professional experience in the world of software development."
			},
			two: {
				ES: "Siempre me he considerado una persona a la que le encanta explorar diferentes áreas y herramientas dentro de este emocionante campo.",
				EN: "I've always considered myself a person who loves to explore different areas and tools within this exciting field."
			},
			three: {
				ES: "Tengo la capacidad de adaptarme con facilidad a distintos entornos, siempre con el objetivo de seguir creciendo.",
				EN: "I have the ability to easily adapt to different environments, always with the goal of continuous growth."
			},
			four: {
				ES: "Cuando no estoy inmerso en líneas de código, me gusta desconectar haciendo ejercicio, jugando videojuegos y disfrutar con mis amigos. ¡Después de todo, el equilibrio es clave!.",
				EN: "When I'm not immersed in lines of code, I like to unwind by exercising and enjoying time with my friends. After all, balance is key!"
			},
		},
		createdBy: {
			ES: "Creado por",
			EN: "Created by"
		}
	},
	links: {
		github: "https://github.com/sotacode",
		twitter: "https://twitter.com/getnextui",
		//docs: "https://nextui-docs-v2.vercel.app",
		//discord: "https://discord.gg/9b6yyZKmH4",
		instagram: "https://www.instagram.com/sotacod/",
		linkedin: "https://www.linkedin.com/in/nelson-rivera-navarrete/",
    sponsor: "https://patreon.com/jrgarciadev"
	},
	form: {
		ES: {
			name: "Nombre",
			namePlaceholder: "Escribe tu Nombre",
			errorName: "Nombre es requerido",
			email: "Correo",
			emailPlaceholder: "Escribe tu Correo",
			errorEmail: "Correo es requerido",
			subject: "Asunto",
			subjectPlaceholder: "Escribe tu Asunto",
			errorSubject: "Asunto es requerido",
			description: "Descripción",
			descriptionPlaceholder: "Escriba la razon de su contacto",
			errorDescription: "Descripción es requerido",
			send: "Enviar",
			errorToSend: "Error",
			modalMessage: "Mensaje enviado con éxito",
			modalDescription: "Me contactaré contigo lo antes posible.",
			modalErrorMesage: "Error al enviar mensaje",
			modalErrorDescription: "Por favor, inténtelo de nuevo más tarde o pruebe con otro medio de contacto.",
			buttonCloseModal: "Cerrar"
		},
		EN: {
			name: "Name",
			namePlaceholder: "Type your Name",
			errorName: "Name is required",
			email: "Email",
			emailPlaceholder: "Type your Email",
			errorEmail: "Email is required",
			subject: "Subject",
			subjectPlaceholder: "Type your Subject",
			errorSubject: "Subject is required",
			description: "Description",
			descriptionPlaceholder: "Type the reason for your contact",
			errorDescription: "Description is required",
			send: "Send",
			errorToSend: "Error",
			modalMessage: "Message sent successfully",
			modalDescription: "I will contact you as soon as possible.",
			modalErrorMesage: "Error sending message",
			modalErrorDescription: "Please try again later or try another means of contact.",
			buttonCloseModal: "Close"
		}
	},
	download: {
		ES: "Curriculum",
		EN: "Resume"
	},
};
