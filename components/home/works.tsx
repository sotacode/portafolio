import React from 'react'
import { title } from '../primitives'

export const Works = () => {
    return (
        <div>
            <div className="flex-1 flex flex-col justify-center items-center ">
                <div className="text-center">
                    <h1 className={title({ size: "sm" })}>Mis&nbsp;</h1>
                    <h1 className={title({ color: "cyan" })}>Trabajos&nbsp;</h1>
                </div>
            </div>
        </div>
    )
}
