import { React, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Contact from "./Contact";
import Spinner from "../utilities/Spinner";
import { Modal } from "@mui/material";

const Main = () => {
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);

  const toggleActive = () => {
    setActive(!active);
    setShowCloseButton(false);
  };

  useEffect(() => {
    let timeoutId = null;
    if (active) {
      setShowContact(false);
      setIsLoading(true);

      timeoutId = setTimeout(() => {
        setShowContact(true);
        setIsLoading(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [active]);

  return (
    <div
      id="home"
      className="w-full h-full text-center flex flex-col justify-center items-center bg-gradient-to-b from-black"
    >
      <div className="max-w-[1240px] w-full h-screen flex flex-col justify-center items-center p-2 sm:pb-[3rem]">
        <div>
          <h1 className="m-auto text-2xl sm:text-4xl sm:pb-2">
            Hi, I&apos;m <span className="text-[#49ff49]">John</span>
          </h1>
          <h2 className="m-auto text-2xl sm:text-4xl sm:pb-4">
            A junior Web Developer
          </h2>
          <p className="pt-6 m-auto max-w-[20rem] sm:max-w-[29rem]">
            I think Web Development is really fun, especially the design aspect
            of it and the animations when pixels align perfectly. User friendly
            environments is something I strive for and having fun creating web
            applications.
          </p>
          <h3 className="pt-10 sm:pt-10">Feel free to explore</h3>
        </div>

        <div className="flex items-center justify-center w-full gap-8 relative top-[3.4rem] mb-10 sm:mb-14">
          <div className="rounded-full border-2 border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
            <a
              href="https://www.linkedin.com/in/johnhansson90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
            <a
              href="https://www.github.com/JohnHansson90"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          <div className="flex justify-end pr-6 pt-[1.8rem] w-full bg-black">
            {showCloseButton && (
              <AiOutlineClose
                size={25}
                className="cursor-pointer hover:scale-125 ease-in duration-200"
                onClick={toggleActive}
              />
            )}
          </div>
          {showContact ? (
            <Contact toggleActive={toggleActive} />
          ) : isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <Spinner />
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default Main;
