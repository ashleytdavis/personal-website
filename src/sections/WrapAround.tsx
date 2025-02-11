import { AnimatePresence, motion } from 'framer-motion';
import useAnimatedSection from '../hooks/useAnimatedSection';
import LandingPage from './LandingPage';


const WrapAround = () => {
  const { sectionRef, showText, showContent } = useAnimatedSection('wrap-around');

  return (
    <section className="min-h-screen bg-pink-400 flex items-center justify-center px-4 py-8 relative overflow-hidden" id="contact" ref={sectionRef}>
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 text-center w-full px-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.h2 className="font-bold text-navy text-7xl mb-8">
              And that's a wrap!
            </motion.h2>
            <motion.p className="text-navy text-2xl font-normal">
              Same time next year?
            </motion.p>
          </motion.div>
        )}

      </AnimatePresence>
      {showContent && (<div className="absolute inset-0">
        <LandingPage />
      </div>)}
    </section>
  );
};

export default WrapAround;
