"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Technology = () => {
  const technologies = [
    {
      id: 1,
      name: "JavaScript",
      level: "Intermediate",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      id: 2,
      name: "TypeScript",
      level: "Intermediate",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    },
    {
      id: 3,
      name: "React.js",
      level: "Intermediate",
      icon: "https://cdn-icons-png.flaticon.com/128/3334/3334886.png",
    },
    {
      id: 4,
      name: "Next.js",
      level: "Intermediate",
      icon: "https://www.svgrepo.com/show/342062/next-js.svg",
    },
    {
      id: 5,
      name: "PostgreSQL",
      level: "Intermediate",
      icon: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png",
    },
    {
      id: 6,
      name: "Node.js",
      level: "Intermediate",
      icon: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
    },
    {
      id: 7,
      name: "Express",
      level: "Intermediate",
      icon: "https://img.icons8.com/?size=48&id=SDVmtZ6VBGXt&format=png",
    },
    {
      id: 8,
      name: "Prisma",
      level: "Intermediate",
      icon: "https://img.icons8.com/?size=48&id=YKKmRFS8Utmm&format=png",
    },
    {
      id: 9,
      name: "Redux",
      level: "Intermediate",
      icon: "https://pics.freeicons.io/uploads/icons/png/9818154791551942292-64.png",
    },
    {
      id: 10,
      name: "MongoDB",
      level: "Intermediate",
      icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      id: 11,
      name: "GitHub",
      level: "Intermediate",
      icon: "https://pics.freeicons.io/uploads/icons/png/10412341841540553610-64.png",
    },
    {
      id: 12,
      name: "GraphQL",
      level: "Intermediate",
      icon: "https://img.icons8.com/?size=48&id=H1KbyT4SuFDe&format=png",
    },
  ];
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: scrollPosition > 100 ? 0 : 100,
      transition: { duration: 0.5 },
    });
  }, [scrollPosition, controls]);

  return (
    <div className="md:px-24 px-8 py-16 bg-white dark:bg-gray-800">
      <div className=" text-center pb-12">
        <h1 className=" text-3xl vigaRegular text-[#0C9463] ">Technologies</h1>
        <h2 className=" text-xl font-exotwo ">
          I&apos;ve worked with a range of technologies in the web development
          world. From design to backend.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-16 gap-8 md:px-40">
        {technologies?.slice(0, 3).map((item: any) => (
          <motion.div
            key={item.id}
            className=" rounded-full text-slate-800 hover:text-white dark:text-white flex justify-center items-center py-1 mb-3"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#009277",
              transition: { duration: 1 },
            }}
            animate={controls}
          >
            <div>
              <Image src={item.icon} width={48} height={48} alt={item.name} />
            </div>
            <div className="ml-4">
              <h1 className="md:text-lg text-base font-semibold">
                {item.name}
              </h1>
              <h1 className="md:text-sm  text-xs">{item.level}</h1>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 md:gap-3 md:px-10 py-10">
        {technologies?.slice(3, 9).map((item: any) => (
          <motion.div
            key={item.id}
            className=" text-slate-800 hover:text-white dark:text-white flex justify-center items-center gap-3  py-1 mb-3 rounded-full"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0C9463",
              transition: { duration: 1 },
            }}
            animate={controls}
          >
            <div>
              <Image src={item.icon} width={48} height={48} alt={item.name} />
            </div>
            <div className="">
              <h1 className="md:text-lg text-base font-semibold">
                {item.name}
              </h1>
              <h1 className="md:text-sm  text-xs ">{item.level}</h1>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-16 gap-8 md:px-40">
        {technologies?.slice(9, 12).map((item: any) => (
          <motion.div
            key={item.id}
            className="rounded-full text-slate-800 hover:text-white dark:text-white flex justify-center  items-center py-1  "
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0C9463",
              transition: { duration: 1 },
            }}
            animate={controls}
          >
            <div>
              <Image src={item.icon} width={48} height={48} alt={item.name} />
            </div>
            <div className="ml-4">
              <h1 className="md:text-lg text-base font-semibold">
                {item.name}
              </h1>
              <h1 className="md:text-sm  text-xs">{item.level}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
