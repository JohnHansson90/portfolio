import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/Bs";

// rafce shortcut for arrowfunction

const Navbar = (props) => {
  const [menu, setMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < 0)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex justify-between items-center w-full h-20 px-2 2xl:px-16">
        <div className="z-10">
          <Image
            src="/../public/assets/jh_logo.jpeg"
            alt="/"
            width="60"
            height="80"
          />
        </div>
        <div className={scrollDirection === "down" ? "hidden" : "up"}>
          <ul className="hidden md:flex pr-5 uppercase">
            <Link href="/#home ">
              <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                About
              </li>
            </Link>
            <Link href="/#tech">
              <li className="ml-10 text-sm border-b py-1 hover:border-none hover:font-bold hover:scale-150 ease-in duration-200">
                Tech Stack
              </li>
            </Link>
            <Link href="/#projects">
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

      <div
        className={
          menu
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black"
            : "bg-[#000000]"
        }
      >
        <div
          className={
            menu
              ? "fixed right-0 bottom-1 w-full h-screen p-5 ease-out duration-1000"
              : "fixed right-[-100%] bottom-1 w-full h-screen p-5 ease-in duration-500"
          }
        >
          <div>
            <div className="w-full">
              <div className="flex justify-end p-3 pr-2 cursor-pointer">
                <AiOutlineClose size={25} onClick={handleMenu} />
              </div>
            </div>
            <div className="border-b border-gray-300 mt-10 mb-24 text-center">
              <p className="w-[100%] pt-8 pb-10">Explore and enjoy.</p>
            </div>
            <div className="flex flex-col text-center">
              <ul className="uppercase">
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Home</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">About</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Tech Stack</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Projects</li>
                </Link>
              </ul>
              <div className="flex flex-col items-center pt-[6rem] gap-8">
                <p className="uppercase tracking-widest text-[#ffffff]">
                  Meet me on
                </p>
                <div className="flex items-center justify-evenly mb-4 w-full  ">
                  <div className="rounded-full border-2 border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full border-2  border-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
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
