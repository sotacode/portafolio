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
			<main className="container max-w-7xl px-6 flex-grow my-8 mx-auto">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-4">
				<div className="sm:flex sm:flex-col lg:flex mt-20 justify-center items-center">
					<div className="">
						<Link
							isExternal
							as={NextLink}
							className={buttonStyles({ variant: "bordered", radius: "full",})}
							style={{ marginLeft: '5px', marginRight: '5px', width: '130px', marginBottom: '10px' }}
							href={siteConfig.links.linkedin}
						>
							<LinkedInIcon size={20} />
							LinkedIn
						</Link>
						<Link
							isExternal
							as={NextLink}
							className={buttonStyles({ variant: "bordered", radius: "full" })}
							style={{ marginLeft: '5px', marginRight: '5px', width: '130px', marginBottom: '10px' }}
							href={siteConfig.links.youtube}
						>
							<YouTubeIcon style={{ color: '#FF0000' }} size={20} />
							Youtube
						</Link>
					</div>
					<div>
						<Link
							isExternal
							as={NextLink}
							className={buttonStyles({ variant: "bordered", radius: "full" })}
							style={{ marginLeft: '5px', marginRight: '5px', width: '130px', marginBottom: '10px' }}
							href={siteConfig.links.instagram}
						>
							<InstagramIcon size={20} style={{ color: '#E4405F' }} />
							Instagram
						</Link>
						<Link
							isExternal
							as={NextLink}
							className={buttonStyles({ variant: "bordered", radius: "full" })}
							style={{ marginLeft: '5px', marginRight: '5px', width: '130px', marginBottom: '10px' }}
							href={siteConfig.links.github}
						>
							<GithubIcon size={20} />
							GitHub
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
