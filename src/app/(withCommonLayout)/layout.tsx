"use client";
import Header from "@/Components/Common/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextAnimation from "@/Components/UtlitiFunction/TextAnimation";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center py-8">
              <div className="text-3xl vigaRegular">
                <TextAnimation title=" Welcome to My Portfolio" />
              </div>
              <div className="text-3xl mt-6 vigaRegular text-white">
                <TextAnimation title="Explore my projects and skills in web development." />
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div>
          <Header />
          {children}
        </div>
      )}
    </>
  );
};

export default CommonLayout;
