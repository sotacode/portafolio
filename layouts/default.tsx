import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { GithubIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { tektur } from "@/components/fonts/fonts";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={`${tektur.className} antialiased flex flex-col`}>
			<Head />
			<Navbar />
			<main className="container max-w-7xl px-6 flex-grow my-8">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-4">
				<div className="flex gap-3 mt-20">
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.linkedin}
					>
						<LinkedInIcon size={20} />
						LinkedIn
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.youtube}
					>
						<YouTubeIcon style={{ color: '#FF0000' }} size={20} />
						Youtube
					</Link>
					 <Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.instagram}
					>
						<InstagramIcon size={20} style={{ color: '#E4405F' }} />
						Instagram
					</Link> 
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
			</footer>
		</div>
	);
}
