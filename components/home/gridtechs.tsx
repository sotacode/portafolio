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

  const { theme } = useTheme();

  return (
    <div className="w-1/6 sm:w-1/6 md:w-2/6 lg:w-2/6 xl:w-3/6 mx-auto mt-8 mb-10">
      <div className="flex flex-col justify-center items-center mt-5 gap-2 z-20" style={{ marginTop: "-33px" }}>
        <Marquee gradient gradientWidth={50} gradientColor={theme === "dark" ? [0, 0, 0] : [255, 255, 255]} style={{ pointerEvents: "none" }} className="z-10 relative">
          <div className="flex py-10">
            {list.map((item, index) => (
              <Card shadow="sm" key={index} isPressable className="m-2 mt-0 mb-0">
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
                  {/* <p className="text-default-500">{item.price}</p> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="max-w-2xl flex flex-col justify-start mt-4 mx-auto">
        <div className="flex-1 flex flex-col w-90">
            <TableTechs/>
        </div>
      </div>
    </div>
  );
}