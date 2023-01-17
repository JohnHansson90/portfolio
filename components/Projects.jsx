import React from "react";
import constructionImg from "../public/assets/projects/constructionImg.jpg";
import johns_portfolio from "../public/assets/projects/johns_portfolio.png";
import emmas_portfolio from "../public/assets/projects/emmas_portfolio.png";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div className="w-full lg:h-screen flex flex-col justify-center items-center p-2 bg-gradient-to-t from-black">
      <div className="max-w-[1240px] h-screen flex flex-col justify-center items-center ">
        <h1 className="uppercase pt-20 pb-10">creativity time</h1>
        <div className="grid md:grid-cols-2 h-screen w-full place-items-center">
          <ProjectItems
            title="emma's portfolio"
            tech="HTML with Sass"
            backgroundImage={emmas_portfolio}
            projectUrl="/emmas_portfolio "
          />
          <ProjectItems
            title="my portfolio"
            tech="NextJS with Tailwind"
            backgroundImage={johns_portfolio}
            projectUrl="/my_portfolio"
          />
          <ProjectItems
            title="js game"
            tech="Vanilla Javascript with Css"
            backgroundImage={constructionImg}
            projectUrl="/js_game "
          />
          <ProjectItems
            title="movie app"
            tech="React with Css components"
            backgroundImage={constructionImg}
            projectUrl="/movie_app "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
