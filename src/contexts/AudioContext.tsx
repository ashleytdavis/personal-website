import React, { createContext, useState, useRef, useContext, useEffect } from 'react';
import { Skill } from '../types/types';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  currentTrack: Skill | null;
  isPlaying: boolean;
  setCurrentTrack: (track: Skill | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  startAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Skill | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(new Audio());

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  const startAudio = () => {
    setHasInteracted(true);
    if (currentTrack && !isPlaying && !isMuted) {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (currentTrack && isPlaying && !isMuted && hasInteracted) {
        audioRef.current.src = currentTrack.audio;
        audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentTrack, isPlaying, isMuted, hasInteracted]);

  useEffect(() => {
    const handleInteraction = () => {
      startAudio();
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <AudioContext.Provider value={{
      isMuted,
      toggleMute,
      currentTrack,
      isPlaying,
      setCurrentTrack,
      setIsPlaying,
      audioRef,
      startAudio
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
