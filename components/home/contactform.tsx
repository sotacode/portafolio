import { LanguageContext } from '@/context/language/LanguageContext';
import { Input, Textarea } from '@nextui-org/react';
import React, { useContext } from 'react'
import { title } from '../primitives';
import { Form } from '../form';

export const ContactForm = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="w-full flex flex-col gap-4">
            {
                        language == "ES" ?
                            <div className="text-center">
                                <h1 className={title({ color: "cyan" })}>Contáctame&nbsp;</h1>
                            </div>
                            :
                            <div className="text-center">
                                <h1 className={title({ size: "sm" })}>Contact&nbsp;</h1>
                                <h1 className={title({ color: "cyan" })}>Me&nbsp;</h1>
                            </div>
                    }
                    <Form />
        </div>
    )
}
