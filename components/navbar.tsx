import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
	Select,
	SelectItem,
	Button,
	Link,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";




import NextLink from "next/link";


import { ThemeSwitch } from "@/components/theme-switch";


import { Logo } from "@/components/icons";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/language/LanguageContext";
import { setLocalStorageLanguage } from "@/utils/localStorage";
import { IoMdDownload } from "react-icons/io";
import { siteConfig } from "@/config/site";
import Image from "next/image";


export const Navbar = () => {
	const { language: ctxLanguage, changeLanguage } = useContext(LanguageContext)
	const [languageSelected, setLanguageSelected] = useState(new Set<string>(["EN"]));
	const handleSelectionChange = (e: any) => {
		if (e.target.value !== "") {
			changeLanguage(e.target.value)
			setLanguageSelected(new Set<string>([e.target.value]));
			setLocalStorageLanguage(e.target.value);
		}
	};

	return (
		<NextUINavbar maxWidth="xl" shouldHideOnScroll className="pt-2">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image src="/sotacodeicon.png" alt="nelsota" width={100} height={200}/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">

				<NavbarItem className="hidden sm:flex gap-2">
					<Link href="https://9imqujjq1g.execute-api.us-east-1.amazonaws.com/get-resume" isExternal>
						<Button color="primary" startContent={<IoMdDownload />}>
							<p>{siteConfig.download[ctxLanguage]}</p>
						</Button>
					</Link>
					<Select
						className="min-w-[70px] max-w-[70px]"
						aria-label="idioma"
						labelPlacement="outside-left"
						defaultSelectedKeys={["enUS"]}
						selectedKeys={languageSelected}
						onChange={handleSelectionChange}
					>
						<SelectItem
							key="ES"
							textValue="ES"
						>
							ES
						</SelectItem>
						<SelectItem
							key="EN"
							textValue="EN"
						>
							EN
						</SelectItem>

					</Select>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					<div className="w-full flex justify-center items-center">
						<div className="basis-1/2 text-center">
							<Link href="https://wixb9n2fa4.execute-api.us-east-1.amazonaws.com/get-resume" isExternal>
								<Button color="primary" startContent={<IoMdDownload />}>
									<p>{siteConfig.download[ctxLanguage]}</p>
								</Button>
							</Link>
						</div>
						<div className="basis-1/2 text-center">
							<Select
								className="min-w-[70px] max-w-[70px]"
								aria-label="idioma"
								labelPlacement="outside-left"
								defaultSelectedKeys={["US"]}
								selectedKeys={languageSelected}
								onChange={handleSelectionChange}
							>
								<SelectItem
									key="ES"
									textValue="ES"
								>
									ES
								</SelectItem>
								<SelectItem
									key="EN"
									textValue="EN"
								>
									EN
								</SelectItem>

							</Select>
						</div>
					</div>
					<NavbarMenuItem>

					</NavbarMenuItem>
					<NavbarMenuItem>

					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
