'use client'
import React from 'react'
import {
  FaCloud,
  FaPalette,
  FaCode,
  FaDesktop,
  FaServer,
  FaObjectGroup,
  FaUserCheck,
  FaChartLine,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Fullstack Utveckling',
    description:
      'Vi erbjuder helhetslösningar för webbutveckling, vilket garanterar en sömlös integration mellan frontend och backend-delarna av din applikation.',
    subDescriptions: [
      {
        title: 'Frontend Utveckling',
        desc: 'Omvandla visioner till digital verklighet',
        icon: FaDesktop,
      },
      {
        title: 'Backend Utveckling',
        desc: 'Digital transformation',
        icon: FaServer,
      },
    ],
    icon: FaCode,
  },
  {
    title: 'UI/UX Design',
    description:
      'Användarupplevelse och gränssnittsdesign ligger i hjärtat av vad vi gör. Vi skapar visuellt slående gränssnitt med användarcentrerade design som fångar och engagerar din publik.',
    subDescriptions: [
      {
        title: 'UX Design',
        desc: 'Skapa digitala upplevelser',
        icon: FaObjectGroup,
      },
      {
        title: 'UI Design',
        desc: 'Kombinerar skönhet med funktion för optimal användning',
        icon: FaUserCheck,
      },
    ],
    icon: FaPalette,
  },
  {
    title: 'Moln/Infrastruktur',
    description:
      'Bygg starka digitala grunder för framgång. Våra plattforms- och infrastrukturtjänster lägger grunden för din digitala resa.',
    subDescriptions: [
      {
        title: 'Skalbar arkitektur',
        desc: 'Bygg för framtida expansion',
        icon: FaChartLine,
      },
      {
        title: 'Molnoptimering',
        desc: 'Maximera prestanda och håll dig säker i molnet',
        icon: FaCloud,
      },
    ],
    icon: FaCloud,
  },
]

type ServiceProps = {
  title: string
  description: string
  subDescriptions: Array<{
    title: string
    desc: string
    icon: React.ComponentType
  }>
  icon: React.ComponentType
}

const ServiceItem: React.FC<ServiceProps> = ({
  title,
  description,
  subDescriptions,
  icon: Icon,
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#2c3e50] to-[#14213d] p-6 rounded-lg shadow-md space-y-4 text-white"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-center items-center bg-[#244584] p-4 rundad-full mb-4">
        <Icon size={48} color="#FFFFFF" />
      </div>
      <h2 className="text-2xl font-semibold border-b-2 border-[#f81570] pb-2">
        {title}
      </h2>
      <p>{description}</p>
      <ul className="space-y-2">
        {subDescriptions.map((sub, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <sub.icon className="text-white" />
            <span>{sub.desc}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen text-white p-4 md:p-8 z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-2xl md:text-3xl font-light text-white text-center mb-4">
        Våra Tjänster
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-4">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </motion.div>
  )
}

export default ServicesPage
