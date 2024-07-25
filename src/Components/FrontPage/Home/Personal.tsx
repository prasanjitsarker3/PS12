"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Personal = () => {
  return (
    <div className="w-full md:px-36 px-8 bg-white dark:bg-gray-800 md:py-16 py-12">
      <h1 className=" text-2xl font-exotwo font-semibold pb-12 text-center text-[#009277]">
        Personal Accomplishments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {[
          { number: 3, label1: "Years", label2: "Experience" },
          { number: 8, label1: "Complete", label2: "Projects" },
          { number: 12, label1: "Technologies", label2: "Known" },
          { number: 940, label1: "Core", label2: "Commits" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center border p-5 rounded"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center relative overflow-hidden gap-6">
              <h1 className="text-4xl md:text-5xl font-exotwo font-semibold text-[#009277]">
                {item.number}
              </h1>
              <div>
                <h2 className="text-lg font-exotwo font-medium">
                  {item.label1}
                </h2>
                <h2 className="text-lg font-exotwo font-medium">
                  {item.label2}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
