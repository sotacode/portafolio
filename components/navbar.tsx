import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
	Select,
	SelectItem,
} from "@nextui-org/react";




import NextLink from "next/link";


import { ThemeSwitch } from "@/components/theme-switch";


import { Logo } from "@/components/icons";
import { LogoSotaCode } from "./logosotacode";
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/language/LanguageContext";
import { setLocalStorageLanguage } from "@/utils/localStorage";

export const Navbar = () => {
	const { language: ctxLanguage, changeLanguage } = useContext(LanguageContext)
	const [languageSelected, setLanguageSelected] = useState(new Set<string>(["EN"]));
	const handleSelectionChange = (e: any) => {
		//console.log(e.target.value)
		if (e.target.value !== "") {
			changeLanguage(e.target.value)
			setLanguageSelected(new Set<string>([e.target.value]));
			setLocalStorageLanguage(e.target.value);
		}
	};

	return (
		<NextUINavbar maxWidth="xl" shouldHideOnScroll>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						{/* <SotaCodeIcon /> */}
						<LogoSotaCode />
					</NextLink>
				</NavbarBrand>
				{/* <div className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div> */}
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">

				<NavbarItem className="hidden sm:flex gap-2">
					<Select
						className="min-w-[70px]"
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
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{/* <Link isExternal href={siteConfig.links.github}>
					<GithubIcon className="text-default-500" />
				</Link> */}
				<Select
					className="max-w-[130px]"
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
				<ThemeSwitch />
				{/* <NavbarMenuToggle /> */}
			</NavbarContent>

			{/* <NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					<NavbarMenuItem>
						<Link
							color={"foreground"}
							href="#"
							size="lg"
						>
							algo1
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							color={"foreground"}
							href="#"
							size="lg"
						>
							algo2
						</Link>
					</NavbarMenuItem>
				</div>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu> */}
		</NextUINavbar>
	);
};
