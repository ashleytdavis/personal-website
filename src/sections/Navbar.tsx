import { motion } from "framer-motion";
import useNav from "../hooks/useNav";
import resume from '../assets/resume.pdf'
import { useAudio } from "../contexts/AudioContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { navItems } = useNav();
  const { isMuted, toggleMute } = useAudio();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 p-6 z-50 bg-transparent"
    >
      {/* Mute/Unmute Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleMute}
        className="absolute top-8 left-8 text-navy hover:text-navy/80 transition-colors"
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 7.5v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5zm4 0v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5zm4 0v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5zm-12 0v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </motion.button>
      <ul className="flex justify-end items-center gap-8 max-w-7xl mx-auto">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-navy hover:opacity-80 transition-all text-sm font-medium ${isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              {item}
            </NavLink>
          </motion.li>
        ))}
        <motion.li
          key={'resume'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5 * 0.1 }}
          className="flex items-center self-center"
        >
          <a
            href={resume}
            rel="noopener noreferrer"
            target="_blank"
            className="px-3 py-1 bg-navy text-white rounded-lg text-sm font-medium 
      hover:bg-navy/80 transition-all shadow-sm flex items-center justify-center w-full self-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
            resume
          </a>
        </motion.li>
      </ul>

    </motion.nav>
  )
}

export default Navbar;