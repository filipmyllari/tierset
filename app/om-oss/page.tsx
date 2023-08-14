"use client";

import React from 'react';
import MotionHoc from '@/components/animations/MotionHoc';
import Logo from '@/public/assets/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaReact, FaNodeJs, FaDocker, FaVuejs, FaWordpress
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiGraphql, SiAmazonaws,
  SiTailwindcss, SiPostgresql, SiMysql, SiKubernetes, SiFirebase
} from 'react-icons/si';

const skillsIcons = [
  ['React', FaReact],
  ['Next', SiNextdotjs],
  ['Vue', FaVuejs],
  ['Typescript', SiTypescript],
  ['Javascript', SiJavascript],
  ['GraphQL', SiGraphql],
  ['AWS', SiAmazonaws],
  ['Tailwind', SiTailwindcss],
  ['Node.js', FaNodeJs],
  ['Wordpress', FaWordpress],
  ['PostgreSQL', SiPostgresql],
  ['MySQL', SiMysql],
  ['Docker', FaDocker],
  ['Kubernetes', SiKubernetes],
  ['Firebase', SiFirebase]
].map(([name, Icon]) => ({
  name,
  icon: <Icon className="w-10 h-10 md:w-14 md:h-14" />
}));

const containerVariants = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1 },
  },
};

const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const TeamComponent = () => (
  <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center p-4 md:p-8">
    <div className="container mx-auto max-w-5xl space-y-12 z-10 md:z-10">
      <section className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
        <div className="mb-6 md:mb-0 md:order-2 w-full md:w-auto flex justify-center">
          <Image src={Logo} alt="Company Logo" className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div className="md:order-1 w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-light text-white mb-4">Om oss</h1>
          <p className="text-base md:text-lg text-white leading-relaxed mt-4">
            Vi på Tierset är en ambitiös digitalbyrå med säte i Stockholm.
            Vårt mål är att skapa unika digitala lösningar som gynnar företag
            och hjälper dem växa och blomstra i den digitala världen.
          </p>
          <p className="text-base md:text-lg text-white leading-relaxed mt-4">
            Vi håller oss till ett transparent arbetssätt och samarbetar nära
            våra kunder för att säkerställa högsta kvalitet. Tierset är
            dedikerade till hållbar design som är tillgänglig för alla. Våra
            grundläggande värderingar kretsar kring tillgänglighet,
            förstklassiga lösningar och lönsamhet.
          </p>
        </div>
      </section>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#f81570',
          height: '2px',
          width: '100%',
          marginBottom: '16px',
        }}
      />

      <section className="space-y-12">
        <h1 className="text-2xl md:text-3xl font-light text-white text-center">
          Vi kan bland annat
        </h1>
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-2 md:z-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsIcons.map((skill, index) => (
            <motion.div
              key={index}
              className="text-white skill-circle m-2 flex items-center justify-center border-[2px] border-[#f81570] rounded-full w-17 h-17 md:w-24 md:h-24"
              variants={itemVariants}
            >
              {skill.icon}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  </div>
);

export default MotionHoc(TeamComponent);
