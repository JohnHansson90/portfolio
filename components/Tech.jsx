import React from "react";
import Image from "next/image";

const Tech = () => {
  return (
    <div
      id="tech"
      className="w-full lg:h-screen flex flex-col justify-center items-center p-2 bg-gradient-to-b from-black"
    >
      <div className="max-w-[1240px] flex flex-col justify-center gap-8 h-full items-center">
        <h1 className="uppercase pt-32">tech stack</h1>
        <p className="tracking-wide">My Current tech that i'm focusing on</p>
        <div className="grid pt-20 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="javascript_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">3/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="css_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">4/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="html_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">4/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="react_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">3/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/node.png"
                  width="64"
                  height="64"
                  alt="node_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">2/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>NODE</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/github.png"
                  width="64"
                  height="64"
                  alt="github_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">3/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/typeScript.png"
                  width="64"
                  height="64"
                  alt="typescript_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">3/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>TYPESCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="m-auto relative group ">
                <Image
                  className="group-hover:opacity-10"
                  src="/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="tailwind_logo"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <h3>Rating</h3>
                  <p className="p-0 m-0 font-medium">2/5</p>
                </div>
              </div>
              <div className="py-4">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
