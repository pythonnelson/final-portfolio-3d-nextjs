import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center tracking-wider">
        <h1 className="text-3xl font-bold font-kaushan pb-4">
            Isaac NSB. Kargbo
        </h1>
        <h3 className="text-sm font-normal font-kaushan pb-4">
            A Full Stack Web Developer
        </h3>
        <button className="p-2 w-[180px] text-md font-kaushan">
            Hire Me
        </button>
      </div>
    </div>
  )
}

export default Hero
