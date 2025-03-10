import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { technologies } from "@/config/technologies";
import NextImage from "next/image";
import { motion } from 'framer-motion';

export default function GridTechs() {
  const { list } = technologies;

  return (
<motion.div
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                    >
      <div className="gap-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 my-10 flex justify-center">
        {
          list.map((item, index) => (
                <div className="flex" key={index}>
                  <Card shadow="sm" className="m-1 transition-transform duration-300 hover:scale-110">
                    <CardBody className="overflow-visible p-0 flex items-center justify-center">
                      <Image
                        as={NextImage}
                        shadow="none"
                        radius="lg"
                        alt={item.title}
                        className="w-[120px] p-2 pb-0 object-cover"
                        src={item.img}
                        width={300}
                        height={300}
                      />
                    </CardBody>
                    <CardFooter className="flex justify-center text-small">
                      <b>{item.title}</b>
                    </CardFooter>
                  </Card>
                </div>
          ))
        }
      </div>
      </motion.div>

  );
}