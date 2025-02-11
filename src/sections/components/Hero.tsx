import { motion } from "framer-motion";
import { useAudio } from '../../contexts/AudioContext';
import { Link } from "react-router-dom";

const Hero = () => {
  const { isMuted } = useAudio();

  return (
    <main className="h-screen flex items-center justify-center relative">
      {/* Audio control message */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute top-20 left-8 text-navy text-sm"
      >
        Click this icon to {isMuted ? 'unmute' : 'mute'} audio!
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-navy mb-4 text-xl"
        >
          Hi there!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold text-navy mb-8"
        >
          Welcome to my<br />portfolio wrapped
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-navy/80 text-lg"
        >
          Feel free to explore the site, highlighting my<br />
          previous experiences and skills!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <Link to='/about'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-navy animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </main>
  )
}

export default Hero;
