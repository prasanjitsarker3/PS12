"use client";
import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" dark:bg-slate-800">
      <div className=" w-[80%] mx-auto  py-8 ">
        <div className=" border-b "></div>
        <div className=" mx-auto md:px-24 pt-5 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-[#009277] dark:text-white">
            {" "}
            &copy; {currentYear} Prasanjit Sarker. All Rights Reserved.
          </h1>
          <div className="flex items-center gap-4 text-[#009277] dark:text-white">
            <a
              href="https://www.facebook.com/prasanjit.sarker.56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/prasanjit-sarker-49a0b7220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/prasanjitsarker3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
