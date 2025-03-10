import React, { useContext } from "react";
import { Button, Card, CardFooter, CardHeader, Chip, Image, Link, CardBody } from '@nextui-org/react';
import { title } from "../primitives";
import { works } from "@/config/works";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { LanguageContext } from "@/context/language/LanguageContext";
import NextImage from "next/image";
import { motion } from "framer-motion";


export const Works = () => {
    const { language } = useContext(LanguageContext);
    const { list } = works;

    return (
        <>
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
                            <h1 className={title({ size: "sm" })}>Mis&nbsp;</h1>
                            <h1 className={title({ color: "cyan" })}>Trabajos&nbsp;</h1>
                        </div>
                        :
                        <div className="text-center">
                            <h1 className={title({ size: "sm" })}>My&nbsp;</h1>
                            <h1 className={title({ color: "cyan" })}>Work&nbsp;</h1>
                        </div>
                }
            </motion.div>

            <div className="gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 my-8 flex justify-center">
                {list.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 0.2,
                            //delay: index * 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <Card
                            isBlurred
                            className="border-none bg-background/60 dark:bg-default-100/50 max-w-5xl"
                            shadow="sm"
                        >
                            <CardBody>
                                <div className="grid grid-cols-2 gap-6 items-center justify-center justify-items-start">
                                    <div className="relative">
                                        <Image
                                            as={NextImage}
                                            className="z-0 transition-transform duration-300"
                                            src={item.img}
                                            width={600}
                                            height={400}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="flex flex-col justify-start h-full">
                                        <h4 className="text-primary font-medium text-2xl blur-none">{item.title}</h4>
                                        <div className="flex flex-grow gap-2 items-start">
                                            <div className="flex flex-col">
                                                <p className="text-lg text-[#ecedee]">{item.resumen[language]}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div>
                                                {item.technologies.map((item, index) => (
                                                    <Chip color="primary" key={index} size="sm" className="mr-2 text-sm" variant="flat">{item}</Chip>
                                                ))}
                                            </div>
                                            <div className="flex gap-2 items-start">
                                                <div className="flex gap-3 ml-1">
                                                    {item.url != "" && (
                                                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                                                            <Link isExternal href={item.url}>
                                                                <AiOutlineLink size="35px" />
                                                            </Link>
                                                        </motion.div>
                                                    )}
                                                    {item.github != "" && (
                                                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                                                            <Link isExternal href={item.github}>
                                                                <AiFillGithub size="35px" />
                                                            </Link>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                    </motion.div>
                ))}
            </div >
        </>
    );
}
