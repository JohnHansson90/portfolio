import { React } from "react";
import "tailwindcss/tailwind.css";
import constructionImg from "../public/assets/projects/constructionImg.jpg";
import johns_portfolio from "../public/assets/projects/johns_portfolio.png";
import emmas_portfolio from "../public/assets/projects/emmas_portfolio.png";
import ProjectItems from "./ProjectItems";
import { BsFillArrowUpCircleFill } from "react-icons/Bs";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full lg:h-full flex flex-col justify-center items-center p-2 bg-gradient-to-t from-black"
    >
      <div className="max-w-[1240px] h-screen flex flex-col justify-center items-center ">
        <h1 className="uppercase pt-20 pb-10 sm:text-6xl">
          creativity <span className="text-[#49ff49]">time</span>
        </h1>
        <div className="grid md:grid-cols-2 h-screen w-full place-items-center">
          <ProjectItems
            title="emma's portfolio"
            tech="HTML with Sass"
            backgroundImage={emmas_portfolio}
            url="/emmas_portfolio "
          />
          <ProjectItems
            title="my portfolio"
            tech="NextJS with Tailwind"
            backgroundImage={johns_portfolio}
            url="/my_portfolio"
          />
          <ProjectItems
            title="js game"
            tech="Vanilla Javascript with Css"
            backgroundImage={constructionImg}
            url="/js_game "
          />
          <ProjectItems
            title="movie app"
            tech="React with Css components"
            backgroundImage={constructionImg}
            url="/movie_app "
          />
        </div>
      </div>

      <div className="flex w-full h-[10rem] justify-evenly items-center animate-pulse">
        <a href="#home">
          <div className="bg-gradient-to-r from-[#49ff49] to-[#00c853] h-10 w-10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
