import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/Bs";

// rafce shortcut for arrowfunction
const Navbar = (props) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-20 px-2 2xl:px-16">
        <Image src="/../public/favicon.ico" alt="/" width="50" height="70" />
        <div className="">
          <ul className="hidden md:flex pr-5 uppercase">
            <Link href="/">
              <li className="ml-10 text-sm  hover:border-b border-green-400">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm  hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm  hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm  hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm  hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleMenu} className="md:hidden pr-5">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={menu ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div className={
          menu
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Image
                src="/../public/favicon.ico"
                alt="/"
                width="40"
                height="50"
              />
              <div
                onClick={handleMenu}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-6">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something awesome together
              </p>
            </div>
            <div className="flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Home</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">About</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Skills</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Projects</li>
                </Link>
                <Link href="/">
                  <li className="my-4 py-2 text-sm ">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#30bb30]">
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-200">
                    <BsFillPersonLinesFill />
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
