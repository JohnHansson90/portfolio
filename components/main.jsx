import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/Bs";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            *Welcoming Text goes here*
          </p>

          <h1 className="py-4 text-white">
            Hi, I'm <span className="text-[#49ff49]">John</span>
          </h1>
          <h2 className="py-2 text-white max-w-[100%] m-auto">
            A junior Frontend developer
          </h2>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, quasi cumque, distinctio repudiandae quae qui eum
            officia tempora placeat aliquid amet omnis sunt soluta. Assumenda,
            quas modi. Alias, laboriosam commodi. Et ipsa iste eaque, dolores
            sunt odit sequi, omnis debitis tenetur accusamus quo! Obcaecati
            culpa quo expedita a atque tenetur doloribus sunt cumque. Quod
      
          </p>
        </div>
        <div className="flex flex-col items-center pt-[3rem] gap-12">
          <div className="flex items-center justify-evenly my-4 w-full  ">
            <div className="rounded-full border-2 border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
              <FaGithub />
            </div>
            <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
              <AiOutlineMail />
            </div>
            <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
