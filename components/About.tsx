import React from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#1e293b] p-4 ml-[200px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-3xl font-bold">Get to Know Me</h2>
      </div>

      <p className="pl-10 text-normal tracking-wider font-inter">
        There are times in life when we fight hard to trace things that doesn't matter, but soon enough we realized 
        the path we took isn't right enough. Today, an aspiring web and mobile developer originated from Freetown, Sierra Leone; 
        based in the Kingdom of Morocco.
      </p>

      <div className="pt-10">
        <p className="uppercase tracking-widest text-[#5651e5]">
            {" "}
            Let's Connect
        </p>

        <div className="flex items-center justify-between my-3 w-full sm:w-[80%] gap-6">
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <FaLinkedinIn />
            </div>

            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <FaGithub />
            </div>

            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <AiOutlineMail />
            </div>

            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                <BsPersonLinesFill />
            </div>

        </div>
      </div>
    </div>
  )
}

export default About;
