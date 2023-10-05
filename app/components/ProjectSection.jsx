"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "Well,This is basically my portfolio site which I have created using Next.js and I have listed all my projects that I have worked on with the experience of technology on demand of the market.",
    image: "/image/projects/project1-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/my_portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ylite",
    description:
      "This is kind of youtube clone but I have implemented iframe links instead of api to load the youtube videos.I have used react as a frontend and node.js as backend for this.",
    image: "/image/projects/project2-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/Ylite",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Toolkit Movie App",
    description:
      "This project is basically a learning phase of a toolkit with a movie clone app where people can search movies and shows they want to watch.",
    image: "/image/projects/project3-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/Toolkit-Movie-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Bookshelf frontend App",
    description:
      "This project is a e-commerce site where I have used react.js as a frontend technology.It is full functional e-commerce site with features of recommendation of books based on user ratings,wishlist,cart,payment gateway,book listing,blog site  ",
    image: "/image/projects/project4-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/Bookshelf_frontend",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bookshelf backend api",
    description:
      "All the api for the bookshelf site are done here with node.js",
    image: "/image/projects/project5-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/manojbastakoti/Bookshelf_backend",
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
