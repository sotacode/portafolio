import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import { BsListTask } from "react-icons/bs";
import { CgChevronLeftR } from "react-icons/cg";
import { Tabs, Tab } from "@nextui-org/react";
import { technologies } from "@/config/technologies";
import { subtitle, title } from "../primitives";
import TableTechs from "./tabletechs";


export default function GridTechs() {
  const { list, types } = technologies;

  const { theme = 'dark' } = useTheme();

  return (

      <div className="gap-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 my-10 flex justify-center">
        {
          list.map((item, index) => (
                <div className="flex">
                  <Card shadow="sm" key={index} isPressable className="m-1">
                    <CardBody className="overflow-visible p-0 flex items-center justify-center">
                      <Image
                        shadow="none"
                        radius="lg"
                        alt={item.title}
                        className="w-[120px] p-2 pb-0 object-cover"
                        src={item.img}
                        width={300}
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

  );
}