import { AnimatePresence, motion } from "framer-motion";
import useExperiences from "../hooks/useExperiences";
import { Link } from "react-router-dom";


const Timeline = () => {
  const { experiences, sectionRef, showFirstText, showSecondText, showContent, squiggles } = useExperiences();

  return (
    <section
      ref={sectionRef}
      className="h-screen flex flex-col items-center px-4 py-12 bg-[#fd5b46] relative overflow-y-auto"
      id="timeline"
    >
      <AnimatePresence>
        {showFirstText && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-black z-10 text-center w-full px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl"
          >
            Oh... looks like we've got company!
          </motion.h2>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSecondText && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-black z-10 text-center w-full px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl"
          >
            or should I say... companies?
          </motion.h2>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showContent && (
          <>
            <div className="flex-1 w-full max-w-6xl relative">
              {squiggles.map((squiggle, index) => (
                <img
                  key={index}
                  src={squiggle.src}
                  alt={`squiggle-${index + 1}`}
                  className="absolute w-24 h-24 opacity-20"
                  style={{
                    top: squiggle.top,
                    left: squiggle.left,
                    right: squiggle.right,
                    bottom: squiggle.bottom,
                    transform: `rotate(${squiggle.rotate})`,
                  }}
                />
              ))}
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-white">Timeline</h1>
                <p className="text-white/80">A short summary of my work experience..</p>
              </div>

              {/* Timeline Container */}
              <div className="max-w-6xl w-full relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/30" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center relative ${index === experiences.length - 1 ? 'mb-16' : 'mb-32'}`}
                  >
                    {/* Left Content - Only show on even indexes */}
                    <div className={`flex-1 pr-16 text-right ${index % 2 === 1 ? 'invisible' : ''}`}>
                      <h2 className="text-2xl font-bold">
                        <span className="text-navy">{exp.company}</span>
                        {exp.location && <span className="text-white">, {exp.location}</span>}
                      </h2>
                      <p className="text-white/80">{exp.title}</p>
                      <p className="text-white mt-2">{exp.duration}</p>
                      <p className="text-white/80 mt-4">{exp.description}</p>
                    </div>

                    {/* Circle with Logo */}
                    <div className="z-10">
                      <div className="w-32 h-32 rounded-full bg-white shadow-lg overflow-hidden">
                        <div className="w-full h-full relative">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] object-contain rounded-[50%]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Only show on odd indexes */}
                    <div className={`flex-1 pl-16 ${index % 2 === 0 ? 'invisible' : ''}`}>
                      <h2 className="text-2xl font-bold">
                        <span className="text-navy">{exp.company}</span>
                        {exp.location && <span className="text-white">, {exp.location}</span>}
                      </h2>
                      <p className="text-white/80">{exp.title}</p>
                      <p className="text-white mt-2">{exp.duration}</p>
                      <p className="text-white/80 mt-4">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
            >
              <Link to='/wrap-around'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-navy animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;