'use client'
import React from 'react'
import MotionHoc from '@/components/animations/MotionHoc'
import LogoLight from '@/public/assets/LogoLight.svg'
import Image from 'next/image'
import Link from 'next/link'

const HomeComponent = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Image
        width={500}
        height={500}
        src={LogoLight}
        alt="Your Company Logo"
        className="mb-4 md:mb-8 w-1/2 md:w-1/4"
      />
      <h1 className="text-xl md:text-3xl font-semibold text-white mb-3 md:mb-4 text-center">
        Vi skapar <span className="border-b-4 border-[#244584] mb-[-0.5rem]">unika</span> hemsidor <span className="border-b-4 border-[#244584] mb-[-0.5rem]">oavsett</span> bransch
      </h1>
      <div className="p-3 md:p-4 rounded-md w-full md:w-3/4 lg:w-1/2 mb-6 md:mb-8">
        <p className="text-base md:text-lg text-white text-center">
          Letar du efter en företags- eller personlig webbplats som verkligen
          sticker ut? Då har du kommit till rätt ställe. Vi på Tierset Studio
          skapar unika webbplatser oavsett bransch, storlek och produkt.
        </p>
      </div>
      <Link href="/kontakt">
        <button className="bg-[#1b2f5a] border-2 border-[#f81570] hover:bg-[#14213d] text-white py-2 px-6 md:px-8 rounded-full font-semibold transition duration-300 w-[10rem] md:w-auto inline-block">
          Kontakta oss
        </button>
      </Link>
    </div>
  )
}

const Home = MotionHoc(HomeComponent)

export default Home
