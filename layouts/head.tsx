import React, { useContext } from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";
import { LanguageContext } from "@/context/language/LanguageContext";

export const Head = () => {
	const { language } = useContext(LanguageContext);
	return (
		<NextHead>
			<title>{siteConfig.name}</title>
			<meta key="title" content={siteConfig.name} property="og:title" />
			{
				language  == "ES" ?
				<>
					<meta content={siteConfig.texts.description.ES} property="og:description" />
					<meta content={siteConfig.texts.description.ES} name="description" />
				</>
				:
				<>
					<meta content={siteConfig.texts.description.EN} property="og:description" />
					<meta content={siteConfig.texts.description.EN} name="description" />
				</>

			}
			<meta
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				name="viewport"
			/>
			<link href="/sotacodeicon.webp" rel="icon" />
		</NextHead>
	);
};
