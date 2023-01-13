import React from "react";
import Image from "next/image";

const Tech = () => {
  return (
    <div className="w-full lg:h-screen flex flex-col justify-center items-center p-2 bg-gradient-to-b from-black">
      <div className="max-w-[1240px] flex flex-col justify-center gap-8 h-full items-center">
        <h1 className="uppercase pt-32">tech stack</h1>
        <p className="tracking-wide">
          My Current tech that i'm focusing on
        </p>
        <div className="grid pt-20 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="m-auto ">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>JS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="m-auto ">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="m-auto ">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="m-auto ">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>REACT</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="m-auto ">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>NODE</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>GITHUB</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/../public/assets/skills/typeScript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>TYPESCRIPT</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="py-4 flex flex-col justify-center items-center">
                  <h3>TAILWIND</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
