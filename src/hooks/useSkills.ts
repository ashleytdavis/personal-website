import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Skill } from "../types/types";
import { useAudio } from "../contexts/AudioContext";

import billie from "../assets/audios/billie.mp4";
import laufey from "../assets/audios/laufey.mp4";

const useSkills = () => {
  const [allSkills, setAllSkills] = useState<Skill[]>([
    {
      rank: "#1",
      name: "TypeScript/Javascript",
      experience: "2+ years",
      icon: "💻",
      audio: billie,
    },
    {
      rank: "#2",
      name: "React",
      experience: "2+ years",
      icon: "⚛️",
      audio: laufey,
    },
    {
      rank: "#4",
      name: "Node.js",
      experience: "2+ years",
      icon: "🟢",
      audio: billie,
    },
    {
      rank: "#5",
      name: "Python",
      experience: "2+ year",
      icon: "🐍",
      audio: laufey,
    },
    {
      rank: "#6",
      name: "HTML/CSS",
      experience: "3+ years",
      icon: "🎨",
      audio: billie,
    },
    {
      rank: "#7",
      name: "Java",
      experience: "2+ years",
      icon: "☕️",
      audio: laufey,
    },
    {
      rank: "#8",
      name: "Git",
      experience: "4+ years",
      icon: "📝",
      audio: billie,
    },
    {
      rank: "#9",
      name: "SQL/MySQL",
      experience: "2+ year",
      icon: "📊",
      audio: laufey,
    },
    {
      rank: "#10",
      name: "MongoDB",
      experience: "1+ years",
      icon: "🍃",
      audio: billie,
    },
    {
      rank: "#11",
      name: "Docker",
      experience: "1+ years",
      icon: "🐳",
      audio: laufey,
    },
    {
      rank: "#12",
      name: "Bootstrap",
      experience: "1+ years",
      icon: "🥾",
      audio: billie,
    },
  ]);

  // const [isPlaying, setIsPlaying] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { currentTrack, isPlaying, setCurrentTrack, setIsPlaying, isMuted } = useAudio();

  const currentlyPlaying = useMemo(() => {
    return allSkills[currentSkillIndex];
  }, [currentSkillIndex, allSkills]);

  const queue = useMemo(
    (queueLength: number = 3) => {
      // Skip the currently playing song when generating queue
      const totalSkills = allSkills.length;
      const queue: Skill[] = [];

      for (let i = 1; i <= queueLength; i++) {
        const nextIndex = (currentSkillIndex + i) % totalSkills;
        queue.push(allSkills[nextIndex]);
      }

      return queue;
    },
    [currentSkillIndex, allSkills]
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(allSkills[currentSkillIndex].audio);
    audioRef.current.addEventListener("ended", handleNextTrack);
    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleNextTrack);
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [currentSkillIndex]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted, currentSkillIndex]);

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrack(allSkills[currentSkillIndex]);
      setIsPlaying(true);
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentSkillIndex + 1) % allSkills.length;
    setCurrentSkillIndex(nextIndex);
    setCurrentTrack(allSkills[nextIndex]);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    const prevIndex = (currentSkillIndex - 1 + allSkills.length) % allSkills.length;
    setCurrentSkillIndex(prevIndex);
    setCurrentTrack(allSkills[prevIndex]);
    setIsPlaying(true);
  };

  const shuffleQueue = useCallback(() => {
    const shuffledSkills = [...allSkills];
    for (let i = shuffledSkills.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSkills[i], shuffledSkills[j]] = [
        shuffledSkills[j],
        shuffledSkills[i],
      ];
    }
    setCurrentSkillIndex(0);
    setAllSkills(shuffledSkills);
  }, [allSkills]);

  const updateProgress = () => {
    if (audioRef.current) {
      const progressPercent =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  const getHeight = (index: number) => {
    return 60 + Math.sin(index * 0.5) * 40;
  };

  return {
    allSkills,
    getHeight,
    handlePreviousTrack,
    handlePlayPause,
    handleNextTrack,
    isPlaying,
    progress,
    queue,
    shuffleQueue,
    currentlyPlaying,
  };
};

export default useSkills;
