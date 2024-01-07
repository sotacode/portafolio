import Image from 'next/image'
import React from 'react'
import { subtitle, title } from '../primitives'
import { useContext } from 'react';
import { LanguageContext } from '@/context/language/LanguageContext';
import { Button, Link, Snippet } from '@nextui-org/react';
import NextLink from 'next/link';
import { GithubIcon, InstagramIcon, LinkedInIcon } from '../icons';
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from '@/config/site';

export const Presentation = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div className="flex flex-col justify-center items-center">
			{/* Contenedor superior */}
			<div className='pb-20'>
				<div className="flex-1 flex flex-col justify-center items-center">
					{
						language == "ES" ?
							<div className="text-center">
								<h1 className={title({ size: "md" })}>Hola!, soy&nbsp;</h1>
								<h1 className={title({ size: "lg", color: "cyan" })}>Nelson Rivera</h1>
								<h1 className={title({ size: "md" })}>,</h1>
								<br />
								<h1 className={title({ size: "md" })}>desarrollador&nbsp;</h1>
								<h1 className={title({ color: "cyan", size: "md" })}>Full-Stack&nbsp;</h1>
								<h4 className={subtitle({ class: "mt-4" })}>
									Un apasionado del desarrollo software en todas sus áreas.
								</h4>
							</div>
							:
							<div className="text-center">
								<h1 className={title({ size: "md" })}>Hello, I&apos;m&nbsp;</h1>
								<h1 className={title({ size: "lg", color: "cyan" })}>Nelson Rivera</h1>
								<h1 className={title({ size: "md" })}>,</h1>
								<br />
								<h1 className={title({ size: "md" })}>Full-Stack&nbsp;</h1>
								<h1 className={title({ color: "cyan", size: "md" })}>developer&nbsp;</h1>
								<h4 className={subtitle({ class: "mt-4" })}>
									A passionate software developer in all its aspects.
								</h4>
							</div>

					}
					<div className="flex mt-4 justify-center">
						<Image
							src="/home/sotacode.png"
							alt="Picture of the"
							width={650}
							height={650}
						/>
					</div>
					<div className='gap-2 w-full justify-center text-center items-center flex flex-col mt-4'>
						<div className='w-full max-w-md mx-2 w-full justify-center text-center items-center flex flex-row'>
							<Snippet variant="bordered" color='primary' className='mx-2 w-full'>sotacodework@gmail.com</Snippet>
						</div>
						<div className='w-full max-w-md flex flex-row'>
							<Link
								isExternal
								as={NextLink}
								href={siteConfig.links.linkedin}
								className='mx-2 basis-1/2 w-full justify-center text-center items-center flex flex-row'
							>
								<Button color="primary" variant="bordered" className='w-full' startContent={<LinkedInIcon size={20} />}>
									LinkedIn
								</Button>
							</Link>
							<Link
								isExternal
								as={NextLink}
								href={siteConfig.links.github}
								className='mx-2 basis-1/2 w-full justify-center text-center items-center flex flex-row'
							>
								<Button color="primary" variant="bordered" className='w-full' startContent={<GithubIcon size={20} />}>
									GitHub
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
