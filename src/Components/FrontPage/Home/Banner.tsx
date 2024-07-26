"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import img from "../../../../public/Photo/pro.png";
import { DivideIcon, Download, Facebook, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const handleDownload = () => {
    const url =
      "https://drive.google.com/file/d/1pq2efND3zo_igsRc4WRX59qE5h_qhDJj/view?usp=sharing";
    const link = document.createElement("a");
    link.href = url;
    //@ts-ignore
    link.setAttribute("download", true);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen w-full bg-white dark:bg-gray-800 ">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between md:px-24 px-8 md:pt-0 pt-20">
        <motion.div
          className="md:w-1/2 w-full flex flex-col space-y-2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-4xl text-2xl font-exotwo font-medium text-gray-800 dark:text-white leading-tight">
            <TypeAnimation
              sequence={[
                "Font-End Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              className="py-5 "
              repeat={Infinity}
            />
          </h1>
          <div>
            <h2 className="text-3xl md:text-6xl vigaRegular text-gray-800 dark:text-gray-200">
              Hello, I&apos;m
            </h2>
            <h2 className="text-3xl md:text-6xl vigaRegular text-[#0C9463] dark:text-[#0C9463]">
              Prasanjit Sarker
            </h2>
          </div>
          <p className="text-xl font-exotwo font-medium">
            My enthusiasm for technology and problem solving motivates me to
            create innovative contributions to the web technology sector.
          </p>
          <div className="flex md:justify-start justify-center gap-3 py-3">
            <a
              href="https://github.com/prasanjitsarker3"
              target="_blank"
              className="p-2 inline-block rounded-full shadow cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#0C9463] hover:text-white border border-[#0C9463]"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/prasanjit.sarker.56"
              target="_blank"
              className="text-gray-800 dark:text-white p-2 inline-block rounded-full shadow cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#0C9463] hover:text-white border border-[#076D49]"
            >
              <Facebook className="h-6 w-6 " />
            </a>
            <a
              href="https://www.linkedin.com/in/prasanjit-sarker-49a0b7220/"
              target="_blank"
              className="text-gray-800 dark:text-white p-2 inline-block rounded-full shadow cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#0C9463] hover:text-white border border-[#0C9463]"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button
              onClick={handleDownload}
              className="border border-[#0C9463] bg-[#0C9463] px-5 my-1 rounded-md transition duration-300 ease-in-out transform hover:bg-[#076D49] text-white flex items-center"
            >
              <span className="mr-2">Resume</span>
              <Download size={15} />{" "}
            </button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 md:mt-0 -mt-6 w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={img}
            alt="Prasanjit Sarker"
            height={400}
            width={400}
            className=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
