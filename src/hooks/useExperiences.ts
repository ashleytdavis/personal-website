import { useEffect, useRef, useState } from "react";
import { Experience } from "../types/types";
import tjx from "../assets/images/tjx.webp";
import northeastern from "../assets/images/northeastern.png";
import squiggle6 from "../assets/images/squiggle6.png";
import squiggle9 from "../assets/images/squiggle9.png";
import squiggle10 from "../assets/images/squiggle10.png";

const useExperiences = () => {
  const [experiences] = useState<Experience[]>([
    {
      title: "Engineer I",
      company: "The TJX Companies",
      duration: "Expected Start Date: September 2025",
      location: "Framingham, MA",
      logo: tjx,
      description: "",
    },
    {
      title: "Lead Teaching Assistant",
      company: "Northeastern University",
      duration: "December 2024 - Present",
      location: "Boston, MA",
      logo: northeastern,
      description:
        "Managing a team of 8 teaching assistants, acting as a liaison between them and the professor. Overseeing course logistics including homework scheduling & grading, exam grading, and office hours.",
    },
    {
      title: "CS3200 Teaching Assistant",
      company: "Northeastern University",
      duration: "June 2024 - December 2024",
      location: "Boston, MA",
      logo: northeastern,
      description:
        "Taught foundations of linear algebra, probability and statistics, and machine learning in Python. Led office hours to assist multiple sections of students with understanding course material. Attended lectures/exam sessions to monitor students and answer in-class questions.",
    },
    {
      title: "IT Engineering Co-op",
      company: "The TJX Companies",
      duration: "Janurary 2024 - June 2024",
      location: "Framingham, MA",
      logo: tjx,
      description:
        "Assisted the Global Solutions team with the development and connection of their latest Java Spring Boot Warehouse Application to the preexisting mainframe. Authored documentation for new features and existing systems, facilitating easier onboarding and ensuring consistent project knowledge transfer. Developed solutions for bug fixes, created unit testing plans, and collaborated with the QA test to successfully promote changes to production.",
    },
    {
      title: "CS2810 Teaching Assistant",
      company: "Northeastern University",
      duration: "December 2022 - December 2023",
      location: "Boston, MA",
      logo: northeastern,
      description:
        "Taught foundations of linear algebra, probability and statistics, and machine learning in Python. Led office hours to assist multiple sections of students with understanding course material. Attended lectures/exam sessions to monitor students and answer in-class questions.",
    },
  ]);

  const squiggles = [
    { src: squiggle10, top: "5%", left: "10%", rotate: "20deg" },
    { src: squiggle9, top: "15%", right: "15%", rotate: "60deg" },
    { src: squiggle6, bottom: "10%", left: "25%", rotate: "120deg" },
    { src: squiggle10, top: "25%", right: "5%", rotate: "45deg" },
    { src: squiggle9, bottom: "20%", left: "15%", rotate: "90deg" },
    { src: squiggle6, bottom: "30%", right: "20%", rotate: "180deg" },
    { src: squiggle10, top: "35%", left: "30%", rotate: "270deg" },
    { src: squiggle9, top: "45%", right: "25%", rotate: "15deg" },
    { src: squiggle6, bottom: "40%", left: "5%", rotate: "135deg" },
    { src: squiggle10, bottom: "50%", right: "10%", rotate: "300deg" },
    { src: squiggle9, top: "55%", left: "20%", rotate: "75deg" },
    { src: squiggle6, bottom: "60%", right: "30%", rotate: "225deg" },
    { src: squiggle10, top: "65%", left: "35%", rotate: "330deg" },
    { src: squiggle9, bottom: "70%", right: "40%", rotate: "105deg" },
    { src: squiggle6, top: "80%", left: "70%", rotate: "195deg" },
    { src: squiggle10, bottom: "75%", right: "70%", rotate: "255deg" },
    { src: squiggle9, top: "90%", left: "90%", rotate: "135deg" },
    { src: squiggle6, bottom: "90%", right: "5%", rotate: "345deg" },
    { src: squiggle10, top: "95%", left: "50%", rotate: "180deg" },
    { src: squiggle9, bottom: "90%", right: "50%", rotate: "90deg" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isTimelineInView, setIsTimelineInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsTimelineInView(true);
        } else {
          setIsInView(false);
          setIsTimelineInView(false);
          setShowFirstText(false);
          setShowSecondText(false);
          setShowContent(false);
        }
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const checkHash = () => {
      if (window.location.hash === "#timeline") {
        setIsInView(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: {
      preventDefault: () => void;
      stopPropagation: () => void;
    }) => {
      if (isTimelineInView) {
        const timeline = sectionRef.current;
        if (timeline) {
          const rect = timeline.getBoundingClientRect();

          if (rect.bottom <= window.innerHeight) {
            window.scrollTo(0, window.scrollY);
            e.preventDefault();
            e.stopPropagation();
          } else if (rect.top >= 0) {
            window.scrollTo(0, window.scrollY - rect.top);
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTimelineInView]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShowFirstText(true);

      const firstTextTimer = setTimeout(() => {
        setShowFirstText(false);
      }, 3000);

      const secondTextTimer = setTimeout(() => {
        setShowSecondText(true);
      }, 3500);

      const secondTextHideTimer = setTimeout(() => {
        setShowSecondText(false);
      }, 6500);

      const contentTimer = setTimeout(() => {
        setShowContent(true);
        setHasAnimated(true);
      }, 7000);

      return () => {
        clearTimeout(firstTextTimer);
        clearTimeout(secondTextTimer);
        clearTimeout(secondTextHideTimer);
        clearTimeout(contentTimer);
      };
    } else if (isInView && hasAnimated) {
      setShowContent(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    const handleScroll = (e: {
      deltaY: number;
      preventDefault: () => void;
    }) => {
      if (isTimelineInView) {
        const timeline = sectionRef.current;
        if (timeline) {
          const { scrollTop, scrollHeight, clientHeight } = timeline;
          if (scrollTop === 0 && e.deltaY < 0) {
            e.preventDefault();
          } else if (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0) {
            e.preventDefault();
          }
        }
      }
    };

    const timelineSection = sectionRef.current;
    if (timelineSection) {
      timelineSection.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (timelineSection) {
        timelineSection.removeEventListener("wheel", handleScroll);
      }
    };
  }, [isTimelineInView]);

  return {
    experiences,
    sectionRef,
    showFirstText,
    showSecondText,
    showContent,
    squiggles,
  };
};

export default useExperiences;
