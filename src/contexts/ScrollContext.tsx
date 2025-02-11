// ScrollContext.js
import { createContext, useState, useContext, useCallback } from 'react';

const ScrollContext = createContext({
  isScrollDisabled: true,
  toggleScroll: () => {}
});

import { ReactNode, useEffect } from 'react';

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScrollDisabled, setIsScrollDisabled] = useState(true);

  const toggleScroll = useCallback(() => {
    setIsScrollDisabled(prev => !prev);
  }, []);

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isScrollDisabled]);

  return (
    <ScrollContext.Provider value={{ isScrollDisabled, toggleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
