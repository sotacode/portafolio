import Image from 'next/image'
import React from 'react'
import { subtitle, title } from '../primitives'

export const Presentation = () => {
	return (
	  <div className="flex flex-col justify-center items-center h-screen">
		{/* Contenedor superior */}
		<div className='pb-20'>
			<div className="flex-1 flex flex-col justify-center items-center">
			<div className="text-center">
				<h1 className={title({ size: "sm" })}>Hola!, soy&nbsp;</h1>
				<h1 className={title({ color: "cyan" })}>Nelson Rivera</h1>
				<h1 className={title({ size: "sm" })}>,</h1>
				<br />
				<h1 className={title({ size: "sm" })}>desarrollador&nbsp;</h1>
				<h1 className={title({ color: "cyan", size: "sm" })}>Full-Stack&nbsp;</h1>
				<h4 className={subtitle({ class: "mt-4" })}>
				Un apasionado del desarrollo software en todas sus áreas.
				</h4>
			</div>
			<div className="flex mt-4 justify-center">
				<Image
				src="/home/sotacode.png"
				alt="Picture of the"
				width={500}
				height={500}
				/>
			</div>
			</div>
			<div className="w-full flex-1 flex-col items-center justify-center">
			<div className="max-w-768px">
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
