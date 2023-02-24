import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Contact from "../components/Contact";
import { Modal } from "@mui/material";

const Main = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);

  return (
    <div
      id="home"
      className="w-full h-screen text-center flex flex-col justify-center items-center bg-gradient-to-b from-black"
    >
      <div className="max-w-[1240px] w-full h-full p-2 flex flex-col justify-center items-center">
        <div>
          <h1 className="m-auto text-[1.7rem] sm:pb-2 sm:text-6xl">
            Hi, I'm <span className="text-[#49ff49]">John</span>
          </h1>
          <h2 className="m-auto text-[1.3rem] sm:pb-4 sm:text-4xl">
            A junior Web Developer
          </h2>
          <p className="pt-6 m-auto max-w-[20rem] sm:max-w-[29rem]">
            I think Web Development is really fun, especially the design aspect
            of it and the animations when pixels align perfectly. User friendly
            environments is something I strive for and having fun creating
            fantastic web applications.
          </p>
          <h3 className="pt-4 sm:pt-10">Feel free to explore</h3>
        </div>

        <div className="flex items-center justify-center w-full max-w-[380px] gap-8 absolute bottom-40 left-100 sm:bottom-[13rem]">
          <div className="rounded-full border-2 border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
            <a href="https://www.linkedin.com/in/johnhansson90" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
            <a href="https://www.github.com/JohnHansson90" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div
            className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200"
            onClick={toggleActive}
          >
            <AiOutlineMail />
          </div>
        </div>
      </div>

      <Modal open={active}>
        <div>
          <div  className="flex justify-end pr-6 pt-[1.8rem] w-full bg-black">
            <AiOutlineClose size={20} className="cursor-pointer" onClick={toggleActive}/>
          </div>
          <Contact />
        </div>
      </Modal>
    </div>
  );
};

export default Main;
