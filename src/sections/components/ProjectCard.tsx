import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/types';
  
  type ProjectCardProps = {
    project: Project;
    setSelectedProject: (project: Project) => void;
  };

const ProjectCard: React.FC<ProjectCardProps> = ({ project, setSelectedProject }) => {
  return (
    <motion.div 
      key={project.id}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-[#dcb116]/80 hover:bg-black/20 p-4 rounded-lg group transition-all duration-200 z-100"
    >
      <div className="relative mb-4">
        <div className="aspect-square w-full">
          <div className={`w-full h-full rounded-md bg-gradient-to-br from-[#FFD700] to-[#FF6B6B] flex items-center justify-center overflow-hidden`}>
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button 
          className="w-12 h-12 bg-[#34c065] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedProject(project);
          }}
        >
          <span className="text-black text-xl">▶</span>
        </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-black font-bold text-base">{project.title}</h3>
        {project.collaborators && project.collaborators.length > 0 && (
          <p className="text-black/60 text-sm line-clamp-2">
            featuring {project.collaborators.join(', ')}
          </p>
        )}
      </div>
      <div className="mt-4">
        <span className="px-2 py-1 rounded-full bg-black/10 text-xs text-black/60">
          {project.tools.length} tools
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
