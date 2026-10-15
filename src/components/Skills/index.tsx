import React from 'react';
import type { SkillCategory, SectionContent } from '../../types';
import { Code2, Database, Wrench } from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
  header: SectionContent;
}

export const Skills: React.FC<SkillsProps> = ({ categories, header }) => {
  const getIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('front')) return <Code2 className="w-5 h-5 text-[#610000]" />;
    if (lower.includes('back') || lower.includes('data'))
      return <Database className="w-5 h-5 text-[#610000]" />;
    return <Wrench className="w-5 h-5 text-[#610000]" />;
  };

  return (
    <section id="skills" className="portfolio-section bg-white border-t border-[#E5E5E5]">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="text-center header-to-content">
          {header.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-wider text-[#610000] mb-[12px]">
              {header.eyebrow}
            </p>
          )}
          <h2 className="section-title text-black mb-[9px]">
            {header.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl mx-auto leading-[1.63]">
            {header.description}
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 card-grid-gap">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-[30px] card-padding border border-[#E5E5E5] shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-[7px] mb-4 pb-2 border-b border-[#E5E5E5]">
                  {getIcon(cat.category)}
                  <h3 className="font-bold text-base text-black">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-black border border-[#E5E5E5] shadow-soft hover:border-black transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="ml-1.5 text-[10px] text-[#610000] font-bold">
                          {skill.level}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
