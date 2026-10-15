import React from 'react';

interface SectionHeaderProps {
  sectionNumber: string; // e.g. "01", "02"
  totalSections?: string; // default "08"
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
    <div className={`w-full border-t border-gray-200 pt-6 mb-8 select-none ${className}`}>
      <div className="flex items-center justify-between">
        {/* Left: Badge Kotak Hitam Teks Putih */}
        <div className="inline-flex items-center gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider bg-black text-white uppercase rounded-sm">
            BAGIAN [{sectionNumber}]
          </span>
          {title && (
            <span className="hidden sm:inline text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
              // {title}
            </span>
          )}
        </div>

        {/* Right: Monospace Gray Fraction Indicator */}
        <span className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase">
          {sectionNumber} / {totalSections}
        </span>
      </div>
    </div>
  );
};

export default SectionHeader;
