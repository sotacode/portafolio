import React from 'react'
import { subtitle, title } from '../primitives';
import { AiOutlineRight } from "react-icons/ai";

export const AboutMe = () => {
    return (
        <>
            <div className="flex-1 flex flex-col justify-center items-center mb-12">
                <div className="text-center">
                    <h1 className={title({ color: "cyan" })}>Conóceme</h1>
                </div>
                <div className='text-left'>
                    <h4 className={subtitle({ class: "mt-4 max-w-[900px] flex items-center" })}>
                    <div className='flex items-center'>🖥️ <AiOutlineRight className='mx-3' style={{fontSize: "20px"}}/></div> Soy un apasionado desarrollador full-stack con 2 años de experiencia 
                    profesional en el mundo del desarrollo de software.
                    </h4>
                    <h4 className={subtitle({ class: "max-w-[900px] flex items-center" })}>
                    <div className='flex items-center'>🔎 <AiOutlineRight className='mx-3' style={{fontSize: "20px"}}/></div> Siempre me he considerado una persona a la que le encanta explorar 
                    diferentes áreas y herramientas dentro de este emocionante 
                    campo.
                    </h4>
                    <h4 className={subtitle({ class: "max-w-[900px] flex items-center" })}>
                    <div className='flex items-center'>🔝 <AiOutlineRight className='mx-3' style={{fontSize: "20px"}}/></div>
                     tengo la capacidad de adaptarme con facilidad a 
                    distintos entornos, siempre con el objetivo de seguir creciendo.
                    </h4>
                    <h4 className={subtitle({ class: "max-w-[900px] flex items-center" })}>
                    <div className='flex items-center'>🕹️ <AiOutlineRight className='mx-3' style={{fontSize: "20px"}}/></div>
                     Cuando no estoy 
                    inmerso en líneas de código, me gusta desconectar 
                    haciendo ejericicio, jugando videojuegos y disfrutar con mis 
                    amigos. ¡Después de todo, el equilibrio es clave!
                    </h4>
                </div>
            </div>
        </>
    )
}
