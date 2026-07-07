import { useState, useRef, useEffect } from 'react';

export const useEasterEgg = (defaultColor: string = '#48E61C') => {
  const [themeColor, setThemeColor] = useState(defaultColor);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [trollTriggered, setTrollTriggered] = useState(false);
  
  const clickBuffer = useRef<number[]>([]);
  const trollButtonRef = useRef<HTMLButtonElement>(null);

  const glitchColors = ['#ED1C24', '#EF8585', '#B37424', '#48E61C', '#015369', '#064EA2', '#7092BE', '#690150'];

  const triggerGlitch = () => {
    setIsGlitching(true);
    clickBuffer.current = [];
    setTimeout(() => {
      setIsGlitching(false);
      setShowWarning(true);
    }, 2500);
  };

  const handleColorChange = (color: string) => {
    if (showWarning || isGlitching) return;
    const now = Date.now();
    clickBuffer.current = clickBuffer.current.filter(t => now - t < 1500);
    clickBuffer.current.push(now);

    if (clickBuffer.current.length > 6) {
      triggerGlitch();
    } else {
      setThemeColor(color);
    }
  };

  useEffect(() => {
    let glitchInterval: ReturnType<typeof setInterval>;
    if (isGlitching) {
      glitchInterval = setInterval(() => {
        const randomColor = glitchColors[Math.floor(Math.random() * glitchColors.length)];
        setThemeColor(randomColor);
      }, 80);
    }
    return () => clearInterval(glitchInterval);
  }, [isGlitching]);

  const handleTrollHover = () => {
    if (!trollTriggered) setTrollTriggered(true);
    if (trollButtonRef.current) {
      const x = (Math.random() - 0.5) * 280; 
      const y = (Math.random() - 0.5) * 120;
      trollButtonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const resetTroll = () => {
    setShowWarning(false);
    setTrollTriggered(false);
    setThemeColor(defaultColor);
  };

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