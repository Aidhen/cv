import React, { useState } from 'react';
import { experiences, projects, education, skills } from '../data/cv';

type TabType = 'exp' | 'proj' | 'edu' | 'skills';

export const IdeLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('exp');

  const getTabClass = (tabName: TabType) => 
    `px-4 py-2 border-t-2 transition-colors ${
      activeTab === tabName 
        ? 'border-blue-500 bg-[#1e1e1e] text-blue-400' 
        : 'border-transparent text-gray-500 hover:bg-[#2a2d2e]'
    }`;

  return (
    <div className="max-w-5xl mx-auto bg-[#1e1e1e] rounded-xl border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm">

      <div className="bg-[#323233] px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-gray-400 text-xs">aidhen-workspace</span>
      </div>

      <div className="flex bg-[#252526] overflow-x-auto custom-scrollbar">
        <button onClick={() => setActiveTab('exp')} className={getTabClass('exp')}>
          experience.ts
        </button>
        <button onClick={() => setActiveTab('proj')} className={getTabClass('proj')}>
          projects.json
        </button>
        <button onClick={() => setActiveTab('edu')} className={getTabClass('edu')}>
          education.ts
        </button>
        <button onClick={() => setActiveTab('skills')} className={getTabClass('skills')}>
          skills.ts
        </button>
      </div>

      <div className="p-6 text-gray-300 overflow-x-auto custom-scrollbar h-[500px]">
        {activeTab === 'exp' && (
          <div>
            <div className="text-[#6A9955] mb-6 whitespace-pre font-mono">
{`/**
 * @developer Aidhen
 * @role Full-Stack Software Engineer
 *
 * I write code to build stuff on the web and mess around 
 * with game dev on the side. I love clean architectures, 
 * async systems, and making things that are actually fun to use.
 */`}
            </div>

            <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">experiences</span> <span className="text-[#d4d4d4]">= [</span>
            <div className="pl-4 border-l border-[#404040]">
              {experiences.map(exp => (
                <div key={exp.id} className="mb-4">
                  <span className="text-[#d4d4d4]">{'{'}</span>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">role:</span> <span className="text-[#ce9178]">"{exp.role}"</span>,<br />
                    <span className="text-[#9cdcfe]">company:</span> <span className="text-[#ce9178]">"{exp.company}"</span>,<br />
                    <span className="text-[#9cdcfe]">period:</span> <span className="text-[#ce9178]">"{exp.period}"</span>,<br />
                    <span className="text-[#9cdcfe]">achievements:</span> <span className="text-[#d4d4d4]">[</span>
                    <div className="pl-4">
                      {exp.achievements.map((ach, i) => (
                        <div key={i}><span className="text-[#ce9178]">"{ach}"</span>{i < exp.achievements.length - 1 ? ',' : ''}</div>
                      ))}
                    </div>
                    <span className="text-[#d4d4d4]">]</span>
                  </div>
                  <span className="text-[#d4d4d4]">{'}'},</span>
                </div>
              ))}
            </div>
            <span className="text-[#d4d4d4]">];</span>
          </div>
        )}

        {activeTab === 'proj' && (
          <div>
            <span className="text-[#d4d4d4]">[</span>
            <div className="pl-4 border-l border-[#404040]">
              {projects.map((proj, index) => (
                <div key={proj.id} className="mb-4">
                  <span className="text-[#d4d4d4]">{'{'}</span>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">"name":</span> <span className="text-[#ce9178]">"{proj.name}"</span>,<br />
                    <span className="text-[#9cdcfe]">"status":</span> <span className="text-[#ce9178]">"{proj.status}"</span>,<br />
                    <span className="text-[#9cdcfe]">"description":</span> <span className="text-[#ce9178]">"{proj.description}"</span>,<br />
                    <span className="text-[#9cdcfe]">"stack":</span> <span className="text-[#d4d4d4]">[</span>
                    {proj.stack.map(tech => <span key={tech} className="text-[#ce9178]">"{tech}"</span>).reduce((prev, curr) => <>{prev}, {curr}</>)}
                    <span className="text-[#d4d4d4]">]</span>
                  </div>
                  <span className="text-[#d4d4d4]">{'}'}{index < projects.length - 1 ? ',' : ''}</span>
                </div>
              ))}
            </div>
            <span className="text-[#d4d4d4]">]</span>
          </div>
        )}

        {activeTab === 'edu' && (
          <div>
            <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">education</span> <span className="text-[#d4d4d4]">= [</span>
            <div className="pl-4 border-l border-[#404040]">
              {education.map(edu => (
                <div key={edu.id} className="mb-4">
                  <span className="text-[#d4d4d4]">{'{'}</span>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">degree:</span> <span className="text-[#ce9178]">"{edu.degree}"</span>,<br />
                    <span className="text-[#9cdcfe]">institution:</span> <span className="text-[#ce9178]">"{edu.institution}"</span>,<br />
                    <span className="text-[#9cdcfe]">year:</span> <span className="text-[#ce9178]">"{edu.year}"</span>,<br />
                    <span className="text-[#9cdcfe]">details:</span> <span className="text-[#d4d4d4]">[</span>
                    <div className="pl-4">
                      {edu.details.map((detail, i) => (
                        <div key={i}><span className="text-[#ce9178]">"{detail}"</span>{i < edu.details.length - 1 ? ',' : ''}</div>
                      ))}
                    </div>
                    <span className="text-[#d4d4d4]">]</span>
                  </div>
                  <span className="text-[#d4d4d4]">{'}'},</span>
                </div>
              ))}
            </div>
            <span className="text-[#d4d4d4]">];</span>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">skills</span> <span className="text-[#d4d4d4]">= [</span>
            <div className="pl-4 border-l border-[#404040]">
              {skills.map((group, index) => (
                <div key={group.category} className="mb-4">
                  <span className="text-[#d4d4d4]">{'{'}</span>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">category:</span> <span className="text-[#ce9178]">"{group.category}"</span>,<br />
                    <span className="text-[#9cdcfe]">skills:</span> <span className="text-[#d4d4d4]">[</span>
                    {group.skills.map(tech => <span key={tech} className="text-[#ce9178]">"{tech}"</span>).reduce((prev, curr) => <>{prev}, {curr}</>)}
                    <span className="text-[#d4d4d4]">]</span>
                  </div>
                  <span className="text-[#d4d4d4]">{'}'}{index < skills.length - 1 ? ',' : ''}</span>
                </div>
              ))}
            </div>
            <span className="text-[#d4d4d4]">];</span>
          </div>
        )}
      </div>
    </div>
  );
};