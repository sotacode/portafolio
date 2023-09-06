import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import type { AppProps } from "next/app";
import LanguageProvider from "@/context/language/LanguageProvider";
import DefaultLayout from "@/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LanguageProvider>
			<NextUIProvider>
				<NextThemesProvider>
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				</NextThemesProvider>
			</NextUIProvider>
		</LanguageProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
