import React from 'react';
import { Avatar } from './Avatar';

interface HeaderProps {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ themeColor, setThemeColor }) => {
  const linkedInUrl = "https://linkedin.com/in/sofia-f-94b0872b3";

  const colors = [
    { name: 'Red', hex: '#ED1C24' },
    { name: 'Salmon Pink', hex: '#EF8585' },
    { name: 'Bronze', hex: '#B37424' },
    { name: 'Lime Green', hex: '#48E61C' },
    { name: 'Teal', hex: '#015369' },
    { name: 'Cobalt', hex: '#064EA2' },
    { name: 'Slate Blue', hex: '#7092BE' },
    { name: 'Plum', hex: '#690150' },
    { name: 'Charcoal', hex: '#2F3541' },
  ];
  return (
    <header className="flex flex-col py-2">

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex flex-col items-center gap-3">
            <Avatar/>

            <div className="flex gap-1 bg-gray-800 p-1 border-2 border-gray-700">
              {colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setThemeColor(color.hex)}
                  className={`w-4 h-4 cursor-pointer transition-all hover:scale-125 ${themeColor === color.hex
                    ? 'ring-2 ring-primary ring-offset-1 ring-offset-gray-800'
                    : ''
                    }`}
                  style={{ backgroundColor: color.hex }}
                  title={`Change theme to ${color.name}`}
                  aria-label={`Change theme to ${color.name}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center md:text-left mt-2 md:mt-0 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold text-gray-100 font-pixel uppercase h-[40px] leading-[40px]">Aidhen</h1>
            <p className="text-xl text-gray-400 mt-2 font-pixel">Full-Stack Software Engineer</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              <span className="text-xs font-mono text-primary">React</span>
              <span className="text-xs font-mono text-gray-600">|</span>
              <span className="text-xs font-mono text-primary">Python</span>
              <span className="text-xs font-mono text-gray-600">|</span>
              <span className="text-xs font-mono text-primary">Gamer</span>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-[42px] flex flex-wrap gap-4 items-center justify-center md:justify-end w-full md:w-auto">
          <a
            href="https://github.com/Aidhen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-gray-400 hover:text-white transition-colors font-bold font-pixel text-base"
          >
            [ GitHub ]
          </a>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary hover:brightness-125 text-white font-pixel text-base border-2 border-gray-300 shadow-pixel transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover flex items-center gap-2"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            REQUEST CV
          </a>
        </div>
      </div>

      <div className="mt-8 border-t-2 border-gray-800 pt-6">
        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
          I write code to build stuff on the web and mess around with game dev on the side. I love clean architectures, and making things that are actually fun to use.
          <br></br>
          Have fun changing my hair colour just as much as I enjoy doing it irl :3
        </p>
      </div>
    </header>
  );
};