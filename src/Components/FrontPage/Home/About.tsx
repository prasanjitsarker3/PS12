"use client";
import { Avatar } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../../../../public/Photo/Frame 7 (1).png";
import React, { useEffect } from "react";

const About = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: rightRef, inView: rightInView } = useInView();

  useEffect(() => {
    if (leftInView) {
      controlsLeft.start("visible");
    }
    if (rightInView) {
      controlsRight.start("visible");
    }
  }, [controlsLeft, controlsRight, leftInView, rightInView]);

  const boxVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const boxVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const borderHover = {
    hover: {
      borderColor: "#0C9463",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="about"
      className="md:px-24 md:pt-3 md:pb-12 w-full py-12 bg-white dark:bg-gray-800"
    >
      <div className="text-center pb-12">
        <h1 className="text-3xl vigaRegular text-[#0C9463]">About Us</h1>
        <h2 className="text-xl font-exotwo">
          I&apos;am Prasanjit Sarker, a Full Stack Developer who specialises in
          both design and backend programming.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:px-0 px-6 mx-auto">
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={controlsLeft}
          variants={boxVariantsLeft}
          whileHover={borderHover.hover}
          className="border border-slate-500 p-5 rounded"
        >
          <div className="flex items-center gap-3 pb-3">
            <Avatar
              src="https://i.ibb.co/H2cxkyT/photo.jpg"
              size="lg"
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-xl font-semibold font-exotwo text-[#0C9463]">
                Prasanjit Sarker
              </h1>
              <h1 className="md:text-lg text-sm">
                sarkerprasanjit379@gmail.com
              </h1>
              <h1 className="md:text-lg text-sm">Dhaka,Bangladesh</h1>
            </div>
          </div>
          <h1 className="text-justify">
            Driven Information Technology student with a passion for building
            innovative web solutions. Skilled in React JS, Redux, and possesses
            a strong foundation in JavaScript, Java, and database management.
          </h1>
        </motion.div>

        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={controlsRight}
          variants={boxVariantsRight}
          whileHover={borderHover.hover}
          className="border border-slate-500 p-5 rounded"
        >
          <h1 className="text-xl font-semibold font-exotwo text-[#0C9463]">
            Work Experience (Internship)
          </h1>
          <h1>Front End Developer (React JS, Redux).</h1>
          <h1>Digicon Technologies Ltd, (Mirpur-12, Dhaka)</h1>
          <p className="text-justify pt-3">
            During my internship, I worked with my team to create the BREB Web
            CRMS (Customer Relationship Management System), which uses React.js
            and Redux on the client side.
          </p>
        </motion.div>

        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={controlsRight}
          variants={boxVariantsRight}
          whileHover={borderHover.hover}
          className="border border-slate-500 p-5 rounded"
        >
          <h1 className="text-xl text-[#0C9463] font-semibold font-exotwo">
            Education Background
          </h1>
          <h1 className="text-base font-medium">
            Haldia Institute of Technology, WB-India (2019-2023)
          </h1>
          <li>B.Tech. Information Technology (CGPA: 8.60)</li>
          <li>Final Project: Twitter Sentiment Analysis</li>
          <li>Proficient in: JavaScript, Java, DBMS</li>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
