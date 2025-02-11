import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import useProjects from '../hooks/useProjects';

import squiggle4 from '../assets/images/squiggle4.png';
import squiggle5 from '../assets/images/squiggle5.png';
import squiggle6 from '../assets/images/squiggle6.png';
import useAnimatedSection from '../hooks/useAnimatedSection';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { selectedProject, setSelectedProject, projects } = useProjects();
  const { sectionRef, showText, showContent } = useAnimatedSection('projects');

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#F5C518] flex items-center justify-center px-4 py-16 relative overflow-hidden"
      id="projects"
    >
      <AnimatePresence>
        {showText && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-black z-10 text-center w-full px-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl"
          >
            Ashley worked on a dozen projects this year, <br />but there were a few that stuck out...
          </motion.h2>
        )}
      </AnimatePresence>

      {showContent && (
        <>
          {/* Decorative Squiggles */}
          <motion.img
            src={squiggle4}
            className="absolute left-10 top-1/2 w-96 opacity-60 -rotate-12"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src={squiggle5}
            className="absolute right-10 bottom-20 w-80 opacity-70"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src={squiggle6}
            className="absolute right-1/4 top-10 w-72 opacity-50 rotate-45"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-[1500px] w-full relative z-10"
          >
            <div className="flex justify-between items-center mb-8">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-black ml-[4rem] mb-[0.5rem]"
              >
                Projects on Repeat
              </motion.h2>
              <a
                href="https://github.com/ashleytdavis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black/60 hover:text-black cursor-pointer font-bold transition-colors duration-200 mr-8"
              >
                Show all
              </a>
            </div>

            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-6xl">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {selectedProject && (
              <ProjectModal
                key={selectedProject.id}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-100"
          >
            <Link to='/timeline'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-black animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Projects;
