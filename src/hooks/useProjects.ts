import { useState } from "react";
import { Project } from "../types/types";

// Photo imports
import northStar from "../assets/images/northstar.png";
import duoWidget from "../assets/images/duo-badge.gif";
import streamflix from "../assets/images/streamflix.png";

/**
 * Custom hook to handle the projects state
 * @returns {object} - The selected project, setSelectedProject, and projects
 */
const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "NorthStar",
      description:
        "A beautifully designed space-themed question/answer forum for curious coders!",
      thumbnail: northStar,
      color: "from-purple-500 to-pink-400",
      tools: [
        { name: "MongoDB", duration: "Database" },
        { name: "Express.js", duration: "Backend Framework" },
        { name: "React", duration: "Frontend Framework" },
        { name: "Node.js", duration: "Runtime Environment" },
        { name: "TypeScript", duration: "Type Safety" },
        { name: "Mongoose", duration: "Database ORM" },
        { name: "Mockingoose", duration: "Testing Framework" },
        { name: "Jest", duration: "Testing Framework" },
        { name: "Axios", duration: "HTTP Client" },
        { name: "Render", duration: "Hosting" },
      ],
      collaborators: ["Jacob Kline", "Grace Theobald", "Ken Borrero"],
      github: "https://github.com/jekhi5/NorthStar",
    },
    {
      id: 2,
      title: "Github Duolingo Widget",
      description: "Dynamically generated Duolingo stats for Github READMEs ",
      thumbnail: duoWidget,
      color: "from-purple-500 to-pink-400",
      tools: [
        { name: "React", duration: "Frontend Framework" },
        { name: "Express.js", duration: "Backend Framework" },
        { name: "Node.js", duration: "Styling" },
        { name: "TypeScript", duration: "Type Safety" },
        { name: "Axios", duration: "HTTP Client" },
        { name: "Render", duration: "Hosting" },
        { name: "Cronjob", duration: "Automation" },
      ],
      github: "https://github.com/ashleytdavis/github-duolingo-widget",
    },
    {
      id: 3,
      title: "Streamflix",
      description:
        "Database replicating that of a large-scale streaming service",
      thumbnail: streamflix,
      color: "from-purple-500 to-pink-400",
      tools: [
        { name: "MySQL", duration: "Database" },
        { name: "Docker", duration: "Containerization" },
        { name: "Python", duration: "Data Generation" },
      ],
      github: "https://github.com/ashleytdavis/streamflix-database",
    },
  ];

  return { selectedProject, setSelectedProject, projects };
};

export default useProjects;
