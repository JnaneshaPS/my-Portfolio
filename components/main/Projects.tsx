import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div  style={{paddingBottom:'20px',fontSize:'25px',paddingRight:'930px'}} className="cursor-pointer">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Projects can be seen on my github profile 

      </span>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/NextWebsite.png"
          title="Ecormmerce website"
          description="This is an ecommerce website using react.js which clone of amazon website."
        />
        <ProjectCard
          src="/CardImage.png"
          title="TextUtils"
          description="This is a textutils website using react.js which is used to manipulate text."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Personal Portfolio"
          description="This is personal portfolio website using next.js and three.js which is writtern in typescript."
        />
      </div>
    </div>
  );
};

export default Projects;
