import Image from 'next/image'
import React from 'react'
import { subtitle, title } from '../primitives'
import { useContext } from 'react';
import { LanguageContext } from '@/context/language/LanguageContext';

export const Presentation = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div className="flex flex-col justify-center items-center h-screen">
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
				</div>
				<div className="flex-1 flex-col items-center justify-center">
					<div className="max-w-900px">
						<img
							src="/home/bottomimagebg.png"
							alt="Picture of the author"
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
