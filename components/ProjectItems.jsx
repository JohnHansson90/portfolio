import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItems = ({ title, tech, backgroundImage, url }) => {
  return (
    <div className="relative flex items-center justify-center rounded-xl h-[80%] w-[80%] group hover:bg-gradient-to-b from-black">
      <Image
        className="group-hover:opacity-10 ease-out duration-500 rounded-xl h-[100%] w-[100%]"
        src={backgroundImage}
        alt="images_of_projects"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h2 className="tracking-widest uppercase ">{title}</h2>
        <p className="pt-2 pb-8">{tech}</p>

        <Link legacyBehavior href="https://www.github.com/JohnHansson90" >
          <a target="_blank" rel="noopener noreferrer">
            More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
