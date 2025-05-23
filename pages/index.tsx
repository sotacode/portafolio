import { Presentation } from "@/components/home/presentation";
import { Divider } from "@nextui-org/react";
import SectionHome from "@/layouts/sectionhome";
import { Technologies } from "@/components/home/technologies";
import { Works } from "@/components/home/works";
import { AboutMe } from "@/components/home/aboutme";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { ContactForm } from "@/components/home/contactform";
import { TimelineExperience } from "@/components/timelineexperience";

export default function IndexPage() {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setTheme("dark");
	}, [])
	
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				
				<Presentation />

				<div className="w-1/3 pb-4">
					<Divider />
				</div>

				<SectionHome>
					<Works />
				</SectionHome>

				<div className="w-1/3 pb-4">
					<Divider />
				</div>

				
				<SectionHome>
					<AboutMe />
				</SectionHome>


				<div className="w-1/3 pt-5 pb-10">
					<Divider />
				</div>

				<SectionHome>
					<Technologies />
				</SectionHome>

				<div className="w-1/3 pt-5 pb-10">
					<Divider />
				</div>
				
				<SectionHome>
					<TimelineExperience />
				</SectionHome>	

				<div className="w-1/3 pt-5 pb-10">
					<Divider />
				</div>

				<SectionHome>
					<ContactForm />
				</SectionHome>				
			</section>
		</>
	);
}
