import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import { debounce } from "../utilities/helpers";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Contact from "../components/Contact";
import { Modal } from "@mui/material";

const Navbar = (props) => {
  const [menu, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  // const [scrollDirection, setScrollDirection] = useState(null);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setShow(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 50) ||
        currentScrollPos < 1
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, show, handleScroll]);

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex flex-col-reverse items-center">
        <div
          className={
            !show
              ? "transition-opacity duration-100 ease-out opacity-[.1] w-full h-20"
              : "transition-opacity duration-1000 ease-in opacity-100  w-full h-20"
          }
        >
          <div className="flex justify-between items-center w-full h-20 px-2 2xl:px-16">
            <div className="z-10">
              <Link href="#home">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto z-[-1]"
                />
              </Link>
            </div>

            <ul className="hidden md:flex pr-5 uppercase">
              <Link href="#home ">
                <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                  About
                </li>
              </Link>
              <Link href="#tech">
                <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                  Tech Stack
                </li>
              </Link>
              <Link href="#projects">
                <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                  Projects
                </li>
              </Link>
            </ul>
            <div onClick={handleMenu} className="md:hidden pr-5">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          menu ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black" : ""
        }
      >
        <div
          className={
            menu
              ? "fixed right-0 bottom-1 w-full h-screen p-5 ease-out duration-1000"
              : "fixed right-[-100%] bottom-1 w-full h-screen p-5 ease-in-out duration-500"
          }
        >
          <div>
            <div className="w-full">
              <div className="flex justify-end p-3 pr-2 cursor-pointer">
                <AiOutlineClose size={20} onClick={handleMenu} />
              </div>
            </div>
            <div className="border-b border-gray-300 mt-10 mb-24 text-center">
              <p className="w-[100%] pt-8 pb-10">Explore and enjoy.</p>
            </div>
            <div className="flex flex-col text-center">
              <ul className="uppercase">
                <Link href="#home">
                  <li className="my-4 py-2 text-sm ">Home</li>
                </Link>
                <Link href="#about">
                  <li className="my-4 py-2 text-sm ">About</li>
                </Link>
                <Link href="#tech">
                  <li className="my-4 py-2 text-sm ">Tech Stack</li>
                </Link>
                <Link href="#projects">
                  <li className="my-4 py-2 text-sm ">Projects</li>
                </Link>
              </ul>
              <div className="flex flex-col items-center pt-[6rem] gap-8">
                <p className="uppercase tracking-widest text-[#ffffff]">
                  Meet me on
                </p>
                <div className="flex items-center justify-evenly mb-4 w-full">
                  <div className="rounded-full border-2 border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <AiOutlineMail onClick={toggleActive} />
                  </div>
                  <Modal open={active}>
                    <div>
                      <div className="flex justify-end pr-6 pt-[1.8rem] w-full bg-black">
                        <AiOutlineClose
                          size={20}
                          className="cursor-pointer"
                          onClick={toggleActive}
                        />
                      </div>
                      <Contact />
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
