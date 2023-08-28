import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import { title } from "../primitives";

export default function GridTechs() {
  const list = [
    {
      title: "Nextjs",
      img: "/home/nextjs.png",
      price: "$5.50",
    },
    {
      title: "Nestjs",
      img: "/home/nestjs.png",
      price: "$3.00",
    },
    {
      title: "Flask",
      img: "/home/flask.png",
      price: "$10.00",
    },
    {
      title: "Golang",
      img: "/home/golang.png",
      price: "$5.30",
    },
    {
      title: "LangChain",
      img: "/home/langchain.png",
      price: "$15.70",
    },
    {
      title: "AngularJS",
      img: "/home/angularjs.png",
      price: "$8.00",
    },
    {
      title: "Linux",
      img: "/home/linux.png",
      price: "$7.50",
    },
    {
      title: "AWS",
      img: "/home/aws.png",
      price: "$12.20",
    },
    {
      title: "AWS",
      img: "/home/aws.png",
      price: "$12.20",
    },
    {
      title: "AWS",
      img: "/home/aws.png",
      price: "$12.20",
    },
    {
      title: "AWS",
      img: "/home/aws.png",
      price: "$12.20",
    },
  ];

  const { theme } = useTheme();

  return (
    <div className="w-1/6 sm:w-1/6 md:w-2/6 lg:w-3/6 xl:w-4/6 mx-auto">
      <Marquee pauseOnHover gradient gradientWidth={100} gradientColor={theme === "dark" ? [0, 0, 0] : [255, 255, 255]}>
        <div className="flex py-10">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="m-1">
              <CardBody className="overflow-visible p-0 flex items-center justify-center">
                <Image
                  shadow="none"
                  radius="lg"
                  alt={item.title}
                  className="w-full h-[100px] p-2 pb-0 object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small text-center md:text-left">
                <b>{item.title}</b>
                {/* <p className="text-default-500">{item.price}</p> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Marquee>
    </div>
  );
}