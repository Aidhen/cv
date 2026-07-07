import { useState } from 'react';
import { BentoLayout } from './components/BentoLayout';
import { IdeLayout } from './components/IdeLayout';
import { useEasterEgg } from './hooks/useEasterEgg';

export default function App() {
  const [view, setView] = useState<'bento' | 'ide'>('bento');
  
  const {
    themeColor,
    isGlitching,
    showWarning,
    trollTriggered,
    trollButtonRef,
    handleColorChange,
    handleTrollHover,
    resetTroll
  } = useEasterEgg();

  return (
    <div 
      className={`min-h-screen bg-[#111111] text-gray-200 p-4 md:p-8 ${isGlitching ? 'transition-none' : 'transition-colors duration-300'}`}
      style={{ '--color-primary': themeColor } as React.CSSProperties}
    >
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] border-4 border-primary p-8 max-w-md shadow-pixel flex flex-col items-center relative overflow-hidden">
            <h2 className="text-3xl font-pixel text-primary mb-4 animate-pulse">WOAH, HOLD ON!</h2>
            <p className="text-gray-300 text-center mb-8 font-mono text-sm leading-relaxed">
              Okay, playing with my hair color is fine, but this is straight-up button mashing! My avatar is getting dizzy and the UI is having an existential crisis. Let's slow it down a bit, alright?
            </p>
            
            <div className="flex w-full justify-center items-center gap-4 relative h-12">
              <button
                onClick={resetTroll}
                className="px-6 py-2 bg-primary text-white font-pixel border-2 border-white hover:scale-105 transition-transform z-10"
              >
                I'LL BE GOOD
              </button>

              <button
                ref={trollButtonRef}
                onMouseEnter={handleTrollHover}
                className={`px-6 py-2 bg-gray-700 text-gray-400 font-pixel border-2 border-gray-500 cursor-not-allowed transition-transform duration-200 z-20 ${
                  trollTriggered ? 'absolute' : 'relative'
                }`}
              >
                I DON'T CARE
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-6xl mx-auto flex justify-end mb-6 ${isGlitching ? 'animate-bounce' : ''}`}>
        <div className="bg-gray-900 p-1 rounded-lg flex gap-2 border border-gray-800">
          <button 
            onClick={() => setView('bento')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'bento' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Bento UI
          </button>
          <button 
            onClick={() => setView('ide')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors font-mono ${view === 'ide' ? 'bg-gray-700 text-green-400' : 'text-gray-400 hover:text-white'}`}
          >
            IDE.tsx
          </button>
        </div>
      </div>

      {view === 'bento' 
        ? <BentoLayout themeColor={themeColor} setThemeColor={handleColorChange} /> 
        : <IdeLayout />
      }
    </div>
  );
}