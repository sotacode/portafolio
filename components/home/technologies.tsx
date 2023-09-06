import React from 'react'
import { subtitle, title } from '../primitives'
import GridTechs from './gridtechs'
import { useContext } from 'react';
import { LanguageContext } from '@/context/language/LanguageContext';


export const Technologies = () => {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <div>
                <div className="flex-1 flex flex-col justify-center items-center ">
                    {
                        language == "ES" ?
                            <div className="text-center">
                                <h1 className={title({ size: "sm" })}>Mi&nbsp;</h1>
                                <h1 className={title({ color: "cyan" })}>Stack&nbsp;</h1>
                                <h1 className={title({ size: "sm" })}>Tecnológico</h1>
                            </div>
                            :
                            <div className="text-center">
                                <h1 className={title({ size: "sm" })}>My&nbsp;</h1>
                                <h1 className={title({ size: "sm" })}>Technological&nbsp;</h1>
                                <h1 className={title({ color: "cyan" })}>Stack</h1>
                            </div>
                    }
                </div>
            </div>
            <GridTechs />
        </>
    )
}
