import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Presentation } from "@/components/home/presentation";
import { Divider } from "@nextui-org/react";
import SectionHome from "@/layouts/sectionhome";
import { Technologies } from "@/components/home/technologies";
import { Works } from "@/components/home/works";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center">
				
				<Presentation />

				<div className="w-1/3 pb-4">
					<Divider />
				</div>

				<SectionHome>
					<Technologies />
				</SectionHome>


				<div className="w-2/3 py-5">
					<Divider />
				</div>

				<SectionHome>
					<Works />
				</SectionHome>
				

				{/* <div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div> */}
			</section>
		</DefaultLayout>
	);
}
