import { AnimatePresence, motion } from "framer-motion";
import squiggle3 from '../assets/images/squiggle3.png'
import useSkills from "../hooks/useSkills";
import useAnimatedSection from "../hooks/useAnimatedSection";
import { Link } from "react-router-dom";

const Skills = () => {
  const {
    allSkills,
    getHeight,
    handlePreviousTrack,
    handlePlayPause,
    handleNextTrack,
    isPlaying,
    progress,
    queue,
    shuffleQueue,
    currentlyPlaying
  } = useSkills();

  const { sectionRef, showText, showContent } = useAnimatedSection('skills');

  return (
    <section className="min-h-screen bg-[#15cfa6] flex items-center justify-center px-4 relative overflow-hidden" id="skills" ref={sectionRef}>
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-[#15cfa6] z-20"
          >
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-white text-center"
            >
              Even on shuffle, <br />these skills had their moment to shine
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showContent && (
          <>
            <motion.img
              src={squiggle3}
              alt="decorative squiggle"
              className="absolute left-[-110px] top-[-95px] w-[300px] h-[400px]"
              initial={{ opacity: 0, rotate: -10, x: -100 }}
              animate={{ opacity: 0.9, rotate: 50, x: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl w-full relative z-10 pt- mx-auto"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold text-white mb-8 text-center"
              >
                My Skills on Shuffle
              </motion.h2>

              <div className="flex justify-between">
                {/* Audio Player */}
                <div className="relative w-full max-w-3xl mx-auto pl-8 pt-8 pr-8 flex-grow">
                  <div className="h-64 flex items-end gap-[3px] mb-12 relative overflow-visible">
                    {allSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative flex-1"
                        initial={{ height: 0 }}
                        animate={{ height: `${getHeight(index)}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className={`w-full h-full transition-colors bg-black hover:bg-black/80'
                  }`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Audio Progress Bar */}
                  <div className="relative w-full h-2 bg-black/20 mb-6">
                    <div
                      className="absolute left-0 h-full bg-red-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                    <div
                      className="absolute h-5 w-5 bg-red-500 rounded-full -top-1.5 transform -translate-x-1/2"
                      style={{ left: `${progress}%` }}
                    />
                  </div>

                  {/* Audio Controls */}
                  <div className="flex justify-center items-center gap-12 text-black">
                    <button className="p-3 text-2xl transition-transform hover:scale-110 hover:text-gray-700">↺</button>
                    <button
                      className="p-3 text-2xl transition-transform hover:scale-110 hover:text-gray-700"
                      onClick={handlePreviousTrack}
                    >
                      ⏮
                    </button>
                    <button
                      className="p-3 text-2xl transition-transform hover:scale-110 hover:text-gray-700"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? "⏸" : "▶️"}
                    </button>
                    <button
                      className="p-3 text-2xl transition-transform hover:scale-110 hover:text-gray-700"
                      onClick={handleNextTrack}
                    >
                      ⏭
                    </button>
                    <button
                      className="p-3 text-2xl transition-transform hover:scale-110 hover:text-gray-700"
                      onClick={shuffleQueue}>
                      ⤭
                    </button>
                  </div>
                </div>

                {/* Queue Section */}
                <div className="w-80 ml-12 mr-8 pl-8 self-start sticky top-32 max-h-[calc(100vh-200px)] overflow-y-auto overflow-hidden">
                  {/* Currently Playing Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 sticky top-0 bg-[#15cfa6]">Currently Playing</h3>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center w-full"
                    >
                      <span className="text-3xl mr-4">{currentlyPlaying.icon}</span>
                      <div className="flex-grow">
                        <span className="text-white text-sm font-bold block">{currentlyPlaying.name}</span>
                        <p className="text-white/70 text-xs">{currentlyPlaying.experience}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Up Next Section */}
                  <h3 className="text-xl font-bold text-white mb-4 sticky top-0 bg-[#15cfa6] py-2">Up Next</h3>
                  <ul className="space-y-3">
                    {queue.map((skill, index) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center w-full">
                          <span className="text-2xl mr-4">{skill.icon}</span>
                          <div className="flex-grow">
                            <span className="text-white text-sm font-medium block">{skill.name}</span>
                            <p className="text-white/70 text-xs">{skill.experience}</p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-100"
            >
              <Link to='/projects'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-black animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default Skills;
