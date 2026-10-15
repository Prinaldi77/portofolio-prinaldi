import React from 'react';
import type { PersonalInfo } from '../../types';
import { BookOpen } from 'lucide-react';

interface StatusBarProps {
  personalInfo: PersonalInfo;
  todayPrefix: string;
  scrollDownLabel: string;
  guestbookButtonLabel: string;
  signatureCount: number;
  onOpenGuestbook: () => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  personalInfo,
  todayPrefix,
  scrollDownLabel,
  guestbookButtonLabel,
  signatureCount,
  onOpenGuestbook,
}) => {
  return (
    <aside
      aria-label="Status Bar"
      className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E5E5E5] py-2.5 px-4 text-xs font-mono select-none"
    >
      <div className="portfolio-container flex flex-wrap items-center justify-between gap-3 relative">
        {/* Cute Peeking Black Mascots on Left */}
        <div className="hidden sm:flex items-end gap-1 absolute -top-8 left-2 pointer-events-none">
          <div className="w-6 h-6 rounded-t-xl bg-black flex items-center justify-center gap-1 shadow-md">
            <span className="w-1 h-1 rounded-full bg-white animate-ping"></span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </div>
          <div className="w-7 h-8 rounded-t-xl bg-black flex items-center justify-center gap-1 shadow-md -mb-1">
            <span className="w-1 h-1 rounded-full bg-white"></span>
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </div>
        </div>

        {/* Status: Available for Work */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-black uppercase tracking-wider text-[11px]">
            {personalInfo.statusText}
          </span>
        </div>

        {/* Location & Today Date */}
        <div className="hidden md:flex items-center gap-6 text-[#6B6B6B] text-[11px]">
          <div>
            <span className="text-black font-bold">LOC: </span>
            <span>{personalInfo.locationCity}</span>
          </div>
          <div>
            <span className="text-black font-bold">{todayPrefix} </span>
            <span>{personalInfo.currentDateText}</span>
          </div>
        </div>

        {/* Right: Scroll down cue & Guestbook Floating Trigger Button */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="hidden lg:inline text-[10px] text-[#6B6B6B] tracking-wider uppercase">
            {scrollDownLabel}
          </span>

          <button
            type="button"
            onClick={onOpenGuestbook}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors shadow-soft"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{guestbookButtonLabel}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-slate-100 text-black text-[10px] font-mono border border-slate-300">
              {signatureCount}
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default StatusBar;
