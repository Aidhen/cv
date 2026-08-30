import { useState, useRef, useEffect, useCallback } from 'react';

const GLITCH_COLORS = ['#ED1C24', '#EF8585', '#B37424', '#48E61C', '#015369', '#064EA2', '#7092BE', '#690150'];
const GLITCH_TIME_WINDOW_MS = 4000;
const GLITCH_CLICKS_THRESHOLD = 7;
const GLITCH_DURATION_MS = 2500;

export const useEasterEgg = (defaultColor: string = '#48E61C') => {
  const [themeColor, setThemeColor] = useState(defaultColor);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [trollTriggered, setTrollTriggered] = useState(false);
  
  const clickBuffer = useRef<number[]>([]);
  const trollButtonRef = useRef<HTMLButtonElement>(null);

  const triggerGlitch = useCallback(() => {
    setIsGlitching(true);
    clickBuffer.current = [];
    
    setTimeout(() => {
      setIsGlitching(false);
      setShowWarning(true);
    }, GLITCH_DURATION_MS);
  }, []);

  const handleColorChange = useCallback((color: string) => {
    if (showWarning || isGlitching) return;
    
    const now = Date.now();
    clickBuffer.current = clickBuffer.current.filter(
      timestamp => now - timestamp < GLITCH_TIME_WINDOW_MS
    );
    clickBuffer.current.push(now);

    if (clickBuffer.current.length >= GLITCH_CLICKS_THRESHOLD) {
      triggerGlitch();
    } else {
      setThemeColor(color);
    }
  }, [showWarning, isGlitching, triggerGlitch]);

  useEffect(() => {
    if (!isGlitching) return;

    const glitchInterval = setInterval(() => {
      const randomColor = GLITCH_COLORS[Math.floor(Math.random() * GLITCH_COLORS.length)];
      setThemeColor(randomColor);
    }, 80);
    
    return () => clearInterval(glitchInterval);
  }, [isGlitching]);

  const handleTrollHover = useCallback(() => {
    setTrollTriggered(true); 
    
    if (trollButtonRef.current) {
      const x = (Math.random() - 0.5) * 280; 
      const y = (Math.random() - 0.5) * 120;
      trollButtonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, []);

  const resetTroll = useCallback(() => {
    setShowWarning(false);
    setTrollTriggered(false);
    setThemeColor(defaultColor);
  }, [defaultColor]);

  return {
    themeColor,
    isGlitching,
    showWarning,
    trollTriggered,
    trollButtonRef,
    handleColorChange,
    handleTrollHover,
    resetTroll
  };
};