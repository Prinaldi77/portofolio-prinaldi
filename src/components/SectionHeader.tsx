import React from 'react';

interface SectionHeaderProps {
  sectionNumber: string;
  totalSections?: string;
  title?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionNumber,
  totalSections = '08',
  title,
  className = '',
}) => {
  return (
    <div
      className={`w-full border-t border-neutral-200 dark:border-white/10 pt-5 mb-8 select-none ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3">
          <span className="px-3 py-1 text-[11px] font-mono font-bold tracking-wider bg-black text-white dark:bg-white dark:text-black uppercase rounded-full">
            BAGIAN [{sectionNumber}]
          </span>
          {title && (
            <span className="hidden sm:inline text-xs font-mono font-semibold tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
              // {title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-neutral-600 dark:text-neutral-400 uppercase">
          <span className="text-amber-600 dark:text-amber-500">//</span>
          <span>
            {sectionNumber} / {totalSections}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
