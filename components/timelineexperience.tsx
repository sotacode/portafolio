import React, { useContext } from 'react'
import { FaCalendarMinus } from "react-icons/fa6";
import { experience } from '../config/experience';
import { LanguageContext } from '@/context/language/LanguageContext';
import { Chip, Link } from '@nextui-org/react';
import { FaAngleRight } from "react-icons/fa";
import { title } from './primitives';
import { RxDividerHorizontal } from "react-icons/rx";

export const TimelineExperience = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className='max-w-5xl'>
            <div className="flex-1 flex flex-col justify-center items-center mb-10">
                {
                    language == "ES" ?
                        <div className="text-center">
                            <h1 className={title({ color: "cyan" })}>Experiencia&nbsp;</h1>
                        </div>
                        :
                        <div className="text-center">
                            <h1 className={title({ color: "cyan" })}>Experience&nbsp;</h1>
                        </div>
                }
            </div>
            <ol className="relative border-s border-cyan-500 mx-1">
                {
                    experience[language].map((work, index) => (
                        <li className="mb-10 ms-6" key={index}>
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full -start-3 ring-8 ring-cyan-500">
                                <FaCalendarMinus color='#F5F5F5' size={20} />
                            </span>
                            <div className='flex text-center items-center'>
                                <h3 className="flex items-center mb-1 text-lg font-semibold pl-3">{work.position}</h3>
                                <FaAngleRight className='mx-3' />
                                <Link
                                    isExternal
                                    href={work.linkToCompany}
                                    showAnchorIcon
                                    className='mb-1 text-lg font-semibold'
                                >
                                    {work.company}
                                </Link>
                            </div>
                            <div className='flex text-center items-center'>
                                <time className="block mb-2 text-sm font-normal leading-none pl-3">{work.place}</time>
                                <RxDividerHorizontal className='mb-2 mx-3'/>
                                <time className="block mb-2 text-sm font-normal leading-none">{work.period}</time>
                            </div>
                            
                            {
                                work.description.map((item, index) => (
                                    <p className="mb-4 text-base font-normal pl-4" key={index}>{item}</p>
                                ))
                            }
                            {
                                work.technologies.length > 0 && <div className="flex flex-wrap gap-2 pl-3">
                                    {
                                        work.technologies.map((item, index) => (
                                            <Chip key={index} color='primary' size='sm' variant='flat'>{item}</Chip>
                                        ))
                                    }
                                </div>
                            }
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}
