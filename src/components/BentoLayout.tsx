import React from 'react';
import { experiences, projects, education, skills } from '../data/cv';
import { Header } from './Header';

interface BentoLayoutProps {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

export const BentoLayout: React.FC<BentoLayoutProps> = ({ themeColor, setThemeColor }) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="md:col-span-2 bg-[#1a1a1a] border-4 border-gray-700 shadow-pixel p-8 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover">
        <Header themeColor={themeColor} setThemeColor={setThemeColor} />
      </div>

      <div className="bg-[#1a1a1a] border-4 border-gray-700 shadow-pixel p-8 flex flex-col justify-center transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover">
        <h2 className="text-3xl font-pixel mb-4 text-primary uppercase">{"< Skills />"}</h2>
        <div className="flex flex-col gap-4">
          {skills.slice(0, 2).map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-pixel text-gray-300 mb-2">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-900 border-2 border-gray-600 text-xs font-bold text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-[#1a1a1a] border-4 border-gray-700 shadow-pixel p-8 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover">
        <h2 className="text-3xl font-pixel mb-6 text-primary uppercase">{"[ Experience ]"}</h2>
        <div className="space-y-8">
          {experiences.map(exp => (
            <div key={exp.id} className="relative pl-6 border-l-4 border-primary">
              <div className="absolute w-3 h-3 bg-primary -left-[8px] top-2"></div>
              <h3 className="text-2xl font-pixel text-gray-100">{exp.role}</h3>
              <p className="text-primary font-bold mb-3">{exp.company} <span className="text-gray-500 font-normal ml-2">[{exp.period}]</span></p>
              <ul className="mt-3 space-y-2">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                    <span className="text-primary font-pixel">►</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="bg-[#1a1a1a] border-4 border-gray-700 shadow-pixel p-8 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover">
          <h2 className="text-3xl font-pixel mb-6 text-primary uppercase">{"* Quests *"}</h2>
          <div className="space-y-6">
            {projects.map(proj => (
              <div key={proj.id}>
                <h3 className="text-xl font-pixel text-white mb-1 flex items-center gap-2">
                  <span className="text-primary">■</span> {proj.name}
                </h3>
                <p className="text-xs text-gray-400 font-bold mb-2">[{proj.status}]</p>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.slice(0, 4).map(tech => (
                    <span key={tech} className="text-xs font-mono text-primary bg-gray-900 px-2 py-1 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border-4 border-gray-700 shadow-pixel p-8 transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover">
          <h2 className="text-3xl font-pixel mb-4 text-primary uppercase">{"~ Training ~"}</h2>
          {education.map(edu => (
            <div key={edu.id}>
              <h3 className="text-xl font-pixel text-gray-100 leading-tight">{edu.degree}</h3>
              <p className="text-primary text-sm mt-2">{edu.institution} [{edu.year}]</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};