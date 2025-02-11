import { AnimatePresence, motion } from "framer-motion";
import pfp from "../assets/images/pfp.jpeg";
import rainbowFlower from "../assets/images/rainbow-flower.png";
import squiggle from "../assets/images/squiggle.png";
import squiggle2 from "../assets/images/squiggle2.png";
import blur from "../assets/images/blur.png";
import { Link } from "react-router-dom";
import useAnimatedSection from "../hooks/useAnimatedSection";
import SocialMedia from "./components/SocialMedia";


const About = () => {
  const { sectionRef, showText, showContent } = useAnimatedSection('about');

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#B4B7FF] relative overflow-hidden"
      id="about"
    >
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
              Hi there!
            </motion.h2>
            <motion.p className="text-navy text-2xl font-normal">
              It's Wrapped time.
              <br />
              Ready? Let's do this.
            </motion.p>
          </motion.div>
        )}

      </AnimatePresence>
      {showContent && (
        <>
          {/* Decorative images */}
          <motion.img
            src={squiggle2}
            alt="decorative squiggle"
            className="absolute bottom-[-185px] right-[-50px] w-[400px] h-[400px] object-contain"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.9, rotate: -35 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={squiggle}
            alt="decorative squiggle"
            className="absolute bottom-[-150px] left-[-30px] w-[400px] h-[400px] object-contain"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.9, rotate: -200 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={blur}
            alt="decorative blur"
            className="absolute top-[-80px] left-[-125px] w-[300px] h-[300px] object-contain"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.9, rotate: -180 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-screen flex items-center justify-between px-16 max-w-7xl mx-auto"
          >
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-1/2 flex flex-col items-center gap-7"
            >
              {/* Image container with spinning background */}
              <div className="w-[400px] h-[400px]">
                <motion.img
                  src={rainbowFlower}
                  alt="rainbow flower background"
                  className="absolute h-[450px] w-[450px] top-[105px] left-[255px]"
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />
                <div className="relative z-10 w-full h-full">
                  <img
                    src={pfp}
                    alt="me!"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Social Media Buttons */}
              <SocialMedia />
            </motion.div>

            {/* Right side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-1/2 text-right"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-navy mb-4"
              >
                Pleased to meet you!
              </motion.p>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl font-bold text-navy mb-6"
              >
                My name is Ashley<br />
                Davis
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-navy/80 text-sm"
              >
                I'm a 21 year old developer from New Jersey, currently<br />
                based out of Boston. I have a passion for putting the fun<br />
                in functional by building creative and practical applications, and<br />
                I'm always excited to tackle new challenges!
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <Link to='/skills'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-navy animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>
        </>
      )}

    </section>
  );
};

export default About;
