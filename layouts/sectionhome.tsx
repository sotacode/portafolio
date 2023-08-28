import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function SectionHome({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col">
				{children}
		</div>
	);
}
