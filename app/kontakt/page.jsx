'use client'
import React, { useState, useEffect, memo } from 'react';
import MotionHoc from '@/components/animations/MotionHoc';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';
import filipImg from '@/public/assets/filip.jpg';
import davidImg from '@/public/assets/david.jpg';
import carlImg from '@/public/assets/carl.jpg';
import pontusImg from '@/public/assets/pontus.jpg';
import emilImg from '@/public/assets/emil.jpg';
import { FaCode, FaPaintBrush, FaProjectDiagram, FaBrain } from 'react-icons/fa'; // Import relevant icons


const teamMembers = [
  { name: 'Filip', img: filipImg, role: 'Fullstack utvecklare' },
  { name: 'David', img: davidImg, role: 'Fullstack utvecklare' },
  { name: 'Carl', img: carlImg, role: 'Visuell Designer' },
  { name: 'Pontus', img: pontusImg, role: 'UX Designer' },
  { name: 'Emil', img: emilImg, role: 'Projektledare' },
];


const circleColors = [
  'bg-[#f81570]',
  'bg-[#ff2e90]',
  'bg-purple-300',
  'bg-purple-400',
  'bg-yellow-200',
  'bg-yellow-300',
]

const teamInfo = [
  { big: '2021', small: 'Grundades' },
  { big: '5', small: 'Grundare' },
  { big: 'UX', small: 'Designers' },
  { big: 'UI', small: 'Designers' },
  { big: 'DEV', small: 'Utvecklare' },
]

const predefinedPositions = [
  { top: '5%', left: '17%' },
  { top: '10%', left: '60%' },
  { top: '3%', left: '85%' },
  { top: '28%', left: '2%' },
  { top: '24%', left: '42%' },
  { top: '35%', left: '72%' },
  { top: '45%', left: '26%' },
  { top: '65%', left: '55%' },
  { top: '52%', left: '87%' },
  { top: '70%', left: '4%' },
]

const mobilePredefinedPositions = [
  { top: '0%', left: '10%' },
  { top: '5%', left: '65%' },
  { top: '29%', left: '10%' },
  { top: '33%', left: '65%' },
  { top: '58%', left: '10%' },
  { top: '62%', left: '65%' },
  { top: '87%', left: '10%' },
  { top: '91%', left: '65%' },
  { top: '116%', left: '10%' },
  { top: '120%', left: '65%' },
]

const Circle = memo(({ content, size, style, color, variants }) => {
  const isImage = typeof content === 'object' && content.img;
  const isTeamInfo = content && content.big;

  return (
    <motion.div
      className={`rounded-full p-4 ${size} flex items-center justify-center relative ${!isImage ? color : ''}`}
      style={style}
      variants={variants}
    >
      {isImage ? (
        <Image className="rounded-full absolute top-0 left-0 w-full h-full border-[2px] border-[#f81570]" src={content.img} alt={content.name} />
      ) : isTeamInfo ? (
        <div className="flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{content.big}</span>
          <span className="text-sm">{content.small}</span>
        </div>
      ) : (
        content
      )}
    </motion.div>
  )
});

Circle.displayName = 'Circle';


const containerVariants = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const teamMemberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const getRoleIcon = (role) => {
  switch (role) {
    case 'Fullstack utvecklare':
      return <FaCode className="text-white text-xl" />; // Increased icon size
    case 'Visuell Designer':
      return <FaPaintBrush className="text-white text-xl" />; // Increased icon size
    case 'UX Designer':
      return <FaBrain className="text-white text-xl" />; // Increased icon size
    case 'Projektledare':
      return <FaProjectDiagram className="text-white text-xl" />; // Increased icon size
    default:
      return null;
  }
};
const ContactComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined to avoid issues with SSR
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, []);

  const allCircleContents = [...teamMembers, ...teamInfo]
  const positions = isMobile ? mobilePredefinedPositions : predefinedPositions

  return (
    <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center p-4 md:p-8">
      <div className="container mx-auto max-w-5xl space-y-12 md:z-10">
      <section className="flex flex-col-reverse md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-light text-white mb-4">
            Kontakta oss
          </h1>
          <p className="text-base md:text-lg text-white leading-relaxed mt-4">
            Har du frågor eller vill inleda ett samarbete med oss? Använd de
            tillgängliga kontaktuppgifterna.
          </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-2 text-base md:text-lg text-white">
                <FaMapMarkerAlt className="text-pink-600" />
                <p>Larsbergsvägen 23, 181 38 Lidingö</p>
              </div>
              <div className="flex items-center space-x-2 text-base md:text-lg text-white">
                <FaPhoneAlt className="text-pink-600" />
                <p>+46 7038 77 519</p>
              </div>
              <div className="flex items-center space-x-2 text-base md:text-lg text-white">
                <FaEnvelope className="text-pink-600" />
                <p>kontakt@tierset.se</p>
              </div>
            </div>
            </div>
              <div className="mb-6 md:mb-0">
                <Image
                  src={logo}
                  alt="Company Logo"
                  className="w-20 h-20 md:w-32 md:h-32 mb-6"
                />
              </div>
            </section>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-0.5 bg-pink-600 w-full mb-4"
        />
      <section className="space-y-8 relative">
        <h1 className="text-2xl md:text-3xl font-light text-white mb-4">
          Vårt team
        </h1>
        <motion.div
          className="flex flex-row flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={teamMemberVariants}
              className="flex flex-col items-center justify-center pt-6 relative"
            >
              <div className="rounded-full p-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative bg-[#f81570]">
                <Image
                  className="rounded-full absolute top-0 left-0 w-full h-full border-[2px] border-[#f81570]"
                  src={member.img}
                  alt={member.name}
                />
                <div className="rounded-full bg-[#14213d] p-2 absolute bottom-0 left-0 border-[1px] border-[#f81570]"> {/* Icon container */}
                  {getRoleIcon(member.role)} {/* Role-specific icon */}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white pt-4">{member.name}</h3>
              <p className="text-sm text-white pt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      </div>
    </div>
  )
}

const Contact = MotionHoc(ContactComponent)

export default Contact