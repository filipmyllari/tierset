"use client";

import React from "react";
import MotionHoc from "@/components/animations/MotionHoc";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import mockProjects from "@/data/data.js";

const containerVariants = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ProjectsComponent = () => (
  <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center p-4 md:p-8">
    <div className="container mx-auto max-w-7xl space-y-12">
      <h1 className="text-2xl md:text-3xl font-light text-white text-center">
        Tidigare projekt
      </h1>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6" // Changed to lg:grid-cols-2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {mockProjects.map(({ id, title, img, services }) => (
          <motion.div
            key={id}
            className="bg-[#14213d] p-4 rounded shadow-lg relative overflow-hidden md:w-[450px]"
            variants={itemVariants}
          >
            <div className="w-full h-48 mb-4 overflow-hidden rounded relative">
              <Image
                src={img}
                alt={title}
                width={500}
                height={500}
                className="w-full absolute top-50% transform -translate-y-50% object-cover"
              />
            </div>
            <h2 className="text-xl font-medium mb-3 text-white">{title}</h2>
            <div className="flex space-x-2 mb-4 flex-wrap">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="bg-[#1b2f5a] border-[#f81570] text-white px-2 py-1 rounded whitespace-nowrap my-1" // Added my-1 for vertical margin
                >
                  {service}
                </span>
              ))}
            </div>
            <Link href={`/projekt/${id}`} passHref>
              <button className="bg-[#1b2f5a] border-2 border-[#f81570] hover:bg-[#14213d] text-white py-2 px-6 md:px-8 rounded-full font-semibold transition duration-300 w-[10rem] md:w-auto">
                Läs mer
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
