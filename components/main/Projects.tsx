import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const driveLink = "https://drive.google.com"; 

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Projects can be seen in my{" "}
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline cursor-pointer hover:text-gray-300"
        >          Google Drive
        </a>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Ecormmerce website"
          description="This is an ecommerce website using react.js which is a clone of the Amazon website."
        />
        <ProjectCard
          src="/CardImage.png"
          title="TextUtils"
          description="This is a textutils website using react.js which is used to manipulate text."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Personal Portfolio"
          description="This is a personal portfolio website using next.js and three.js which is written in TypeScript."
        />
      </div>
    </div>
  );
};

export default Projects;
