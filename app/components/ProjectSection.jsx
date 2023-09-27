"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Project 1 Description",
    image: "/image/projects/project1-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/my_portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ylite",
    description: "Project 2 Description",
    image: "/image/projects/project2-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/Ylite",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Toolkit Movie App",
    description: "Project 3 Description",
    image: "/image/projects/project3-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/Toolkit-Movie-app",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section className="text-white" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <div>
        <ul className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
