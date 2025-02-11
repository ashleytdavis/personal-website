/**
 * Interface represents a project.
 * @property {number} id - The project id
 * @property {string} title - The project title
 * @property {string} description - The project description
 * @property {string} thumbnail - The project thumbnail
 * @property {object[]} tools - The project tools
 * @property {string} tools[].name - The tool name
 * @property {string} tools[].duration - The tool duration
 * @property {string} color - The project color
 * @property {string[]} collaborators - The project collaborators
 * @property {string} github - The project github link
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tools: {
    name: string;
    duration: string;
  }[];
  color: string;
  collaborators?: string[];
  github: string;
}

/**
 * Interface represents a skill.
 * @property {string} name - The skill name
 * @property {string} experience - The skill experience
 * @property {string} [rank] - The skill rank
 * @property {string} [icon] - The skill icon
 * @property {string} audio - The skill audio
 */
export interface Skill {
  name: string;
  experience: string;
  rank?: string;
  icon?: string;
  audio: string;
}

export interface GitHubStats {
  totalCommits: number;
  totalLinesChanged: number;
}

export interface Experience {
  title: string;
  company: string;
  description: string;
  logo: string;
  location: string;
  duration: string;
}
