"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import mockProjects from "@/data/data.js";
import MotionHoc from "@/components/animations/MotionHoc";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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

const ProjectShowcase = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

  const project = mockProjects.find((proj) => proj.id === parseInt(id));

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const desktopImages =
    project.desktopImages?.map((imgSrc) => ({
      original: imgSrc,
      thumbnail: imgSrc,
    })) || [];

  return (
    <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center md:mt-16 p-4 md:p-8">
      <div className="container mx-auto max-w-5xl space-y-12 md:z-10 z-10">
        <section className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* Arrow button alongside the logo */}
          <div className="mb-6 md:mb-0 md:order-2 w-full md:w-auto flex justify-between items-center">
            <button
              onClick={() => router.back()}
              className="bg-transparent p-2 md:hidden"
              aria-label="Go back"
            >
              <FaArrowLeft size={32} color="white" /> {/* Increased the size */}
            </button>
            <Image
              src={project.logo}
              alt={project.title}
              width={500}
              height={500}
              className={`w-22 h-20 md:w-80 md:h-22 p-2 ${
                project.isLogoDark ? "bg-white rounded-[12px]" : ""
              }`}
            />
          </div>
          <div className="md:order-1 w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-light text-white mb-4">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-white leading-relaxed mt-4">
              {project.desc}
            </p>
          </div>
        </section>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "#f81570",
            height: "2px",
            width: "100%",
            marginBottom: "16px",
          }}
        />

        <section className="space-y-12">
          <h1 className="text-2xl md:text-3xl font-light text-white text-center">
            Tjänster som användes
          </h1>
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {project.skillsIcons &&
              project.skillsIcons.map(([name, Icon], index) => (
                <motion.div
                  key={index}
                  className="text-white skill-circle m-2 flex items-center justify-center border-[2px] border-[#f81570] rounded-full w-17 h-17 md:w-24 md:h-24 relative"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredSkill(name as string)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Icon className="w-10 h-10 md:w-14 md:h-14" />
                  <div
                    className={`absolute inset-0 flex items-center justify-center text-center rounded-full transition-opacity ${
                      hoveredSkill === name ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                  >
                    {/* @ts-ignore */}
                    <span className="text-white">{name}</span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </section>

        <section className="space-y-12">
          <h1 className="text-2xl md:text-3xl font-light text-white text-center">
            Galleri
          </h1>
          <ImageGallery items={desktopImages} />
        </section>
      </div>
    </div>
  );
};

const MotionProjectShowcase = MotionHoc(ProjectShowcase);

export default MotionProjectShowcase;
