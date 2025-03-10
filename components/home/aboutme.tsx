import React, { useContext } from 'react'
import { subtitle, title } from '../primitives';
import { AiOutlineRight } from "react-icons/ai";
import { LanguageContext } from '@/context/language/LanguageContext';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';

export const AboutMe = () => {
    const { language } = useContext(LanguageContext)
    const { texts } = siteConfig;
    return (
        <>

            <div className="flex-1 flex flex-col justify-center items-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut"
                    }}
                >
                    {
                        language == "ES" ?
                            <div className="text-center">
                                <h1 className={title({ color: "cyan" })}>Conóceme</h1>
                            </div>
                            :
                            <div className="text-center">
                                <h1 className={title({ color: "cyan" })}>Get to know me</h1>
                            </div>
                    }
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut"
                    }}
                >
                    <div className='text-left'>
                        <h4 className={subtitle({ class: "mt-4 max-w-[900px] flex items-center" })}>
                            <div className='flex items-center'>🖥️ <AiOutlineRight className='mx-3' style={{ fontSize: "20px" }} /></div>
                            {texts.aboutMe.one[language]}
                        </h4>
                        <h4 className={subtitle({ class: "max-w-[900px] flex items-center" })}>
                            <div className='flex items-center'>🔎 <AiOutlineRight className='mx-3' style={{ fontSize: "20px" }} /></div>
                            {texts.aboutMe.two[language]}
                        </h4>
                        <h4 className={subtitle({ class: "max-w-[900px] flex items-center" })}>
                            <div className='flex items-center'>🔝 <AiOutlineRight className='mx-3' style={{ fontSize: "20px" }} /></div>
                            {texts.aboutMe.three[language]}
                        </h4>
                        <h4 className={subtitle({ class: "max-w-[900px] flex items-center" })}>
                            <div className='flex items-center'>🕹️ <AiOutlineRight className='mx-3' style={{ fontSize: "20px" }} /></div>
                            {texts.aboutMe.four[language]}
                        </h4>
                    </div>
                </motion.div>
            </div>

        </>
    )
}
