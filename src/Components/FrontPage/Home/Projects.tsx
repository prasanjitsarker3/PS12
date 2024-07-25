/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Link2 } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/project.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="md:px-24 px-8 py-12 bg-white dark:bg-gray-800">
      <div className=" text-center pb-12">
        <h1 className=" text-3xl vigaRegular text-[#009277] ">Projects</h1>
        <h2 className=" text-xl font-exotwo ">
          {" "}
          Explore the Technologies I've Used to Build Impactful Solutions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:px-14">
        {projects?.map((project: any, index: any) => (
          <motion.div
            key={project.id}
            className={`rounded-lg shadow-lg h-full relative `}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                // layout="fill"
                // objectFit="cover"
                className="w-full h-64 rounded-lg"
              />
              <motion.div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300">
                <h1 className=" text-[#009277] font-exotwo text-lg px-3 brightness-100">
                  {project.name}
                </h1>
                <p className="px-8 text-center text-sm text-white">
                  {project.title.slice(0, 100)}
                </p>
                <div className=" flex items-center gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3   font-semibold py-2 px-4 rounded-md text-sm border-2 border-[#0C9463] text-white hover:bg-[#0C9463]  mt-2"
                  >
                    Live <Link2 size={15} />
                  </a>
                  <Link href={`/project/${project.id}`}>
                    <button className="flex items-center gap-3 text-white font-semibold py-2 px-4 rounded-md text-sm border-2 border-[#0C9463] hover:bg-[#0C9463] focus:outline-none focus:ring-2  mt-2">
                      See <Eye size={15} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
