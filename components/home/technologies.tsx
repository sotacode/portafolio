import React from 'react'
import { subtitle, title } from '../primitives'
import GridTechs from './gridtechs'


export const Technologies = () => {

    return (
        <>
            <div>
                <div className="flex-1 flex flex-col justify-center items-center ">
                    <div className="text-center">
                        <h1 className={title({ size: "sm" })}>Mi&nbsp;</h1>
                        <h1 className={title({ color: "cyan" })}>Stack&nbsp;</h1>
                        <h1 className={title({ size: "sm" })}>Tecnológico</h1>
                    </div>
                </div>
            </div>
           <GridTechs />
        </>
    )
}
