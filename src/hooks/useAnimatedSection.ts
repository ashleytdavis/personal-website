import { useState, useEffect, useRef } from "react";

function useAnimatedSection(sectionId: string) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setShowText(false);
          setShowContent(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const checkHash = () => {
      if (window.location.hash === `#${sectionId}`) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
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
  }, [sectionId]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShowText(true);
      const textTimer = setTimeout(() => {
        setShowText(false);
      }, 4000);

      const contentTimer = setTimeout(() => {
        setShowContent(true);
        setHasAnimated(true);
      }, 4500);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(contentTimer);
      };
    } else if (isInView && hasAnimated) {
      setShowContent(true);
    }
  }, [isInView, hasAnimated]);

  return { sectionRef, showText, showContent };
}

export default useAnimatedSection;
