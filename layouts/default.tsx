import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				{/* <Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link> */}
				<Link isExternal href={siteConfig.links.linkedin}>
						<LinkedInIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.instagram}>
						<InstagramIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
			</footer>
		</div>
	);
}
