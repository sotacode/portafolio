import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import { title } from "../primitives";
import { works } from "@/config/works";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";


export const Works = () => {
    const { list } = works;

    return (
        <>
            <div className="flex-1 flex flex-col justify-center items-center ">
                <div className="text-center">
                    <h1 className={title({ size: "sm" })}>Mis&nbsp;</h1>
                    <h1 className={title({ color: "cyan" })}>Trabajos&nbsp;</h1>
                </div>
            </div>
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-8 flex justify-center">
                {list.map((item, index) => (
                    <Card isFooterBlurred key={index} className="bg-black/10 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 w-[350px]">
                        <CardHeader className="bg-black/60 absolute z-10 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold blur-none">{item.technologies}</p>
                            <h4 className="text-white/90 font-medium text-xl blur-none">{item.title}</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 "
                            src={item.img}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">{item.resumen}</p>
                                </div>
                            </div>
                            <div className="flex flex-grow gap-2 items-center">
                                <div className="flex gap-3 ml-1">
                                    {
                                        item.url != "" && <Link isExternal href={item.url} >
                                            <AiOutlineLink size="35px" />
                                        </Link>
                                    }
                                    {
                                        item.github != "" && <Link isExternal href={item.github} >
                                            <AiFillGithub size="35px" />
                                        </Link>
                                    }
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}
