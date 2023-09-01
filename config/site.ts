export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "SotaCode",
	description: "Hola!, Soy Nelson Rivera, aquí encontrarás mi perfil profesional donde muestro mis trabajos personales.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/sotacode",
		twitter: "https://twitter.com/getnextui",
		//docs: "https://nextui-docs-v2.vercel.app",
		//discord: "https://discord.gg/9b6yyZKmH4",
		instagram: "https://www.instagram.com/sotacod/",
		linkedin: "https://www.linkedin.com/in/nelson-rivera-navarrete/",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
