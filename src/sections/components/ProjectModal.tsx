import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/types';

type ProjectModalProps = {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, setSelectedProject }) => {
  if (!selectedProject) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-start justify-center p-4 z-50 overflow-y-auto"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-[#121212] rounded-lg w-full max-w-4xl shadow-xl mt-8 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xl p-2"
        >
          ✕
        </button>

        {/* Header Section */}
        <div className="p-6 flex items-center gap-6">
          <div className="w-48 h-48 flex-shrink-0">
            <div className={`w-full h-full rounded-md bg-gradient-to-br ${selectedProject.color} flex items-center justify-center overflow-hidden`}>
              <img 
                src={selectedProject.thumbnail} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white/60 text-sm">Project</span>
            <h3 className="text-5xl font-bold text-white mb-4">{selectedProject.title}</h3>
            <p className="text-white/60">{selectedProject.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-white/60 text-sm">{selectedProject.tools.length} tools</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1ed760] text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <span className="text-xl">▶</span>
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Tools List */}
        <div className="px-6 pb-6">
          {/* Table Header */}
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 px-4 py-2 border-b border-white/10 text-white/60 text-sm">
            <span>#</span>
            <span>Tool</span>
            <span>Purpose</span>
          </div>

          {/* Tools */}
          {selectedProject.tools.map((tool, index) => (
            <motion.div 
              key={tool.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-[auto,1fr,auto] gap-4 px-4 py-3 hover:bg-white/10 rounded-md group cursor-default"
            >
              <span className="text-white/60 group-hover:text-white w-6">
                {index + 1}
              </span>
              <span className="text-white font-medium">
                {tool.name}
              </span>
              <span className="text-white/60 text-sm">
                {tool.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
