import React from 'react';
import { motion } from 'framer-motion';

interface HeroCharacterProps {
  currentLang?: 'id' | 'en';
}

export const HeroCharacter: React.FC<HeroCharacterProps> = ({ currentLang = 'id' }) => {
  const speechText = currentLang === 'id' ? 'HALO!' : 'HELLO!';

  return (
    <div className="relative w-52 sm:w-64 md:w-72 aspect-[3/4] flex items-center justify-center select-none pointer-events-none">
      {/* Speech Bubble "HALO!" with floating animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 right-0 sm:-right-4 z-20"
      >
        <div className="relative px-3.5 py-1.5 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000000]">
          <span className="font-mono font-bold text-xs tracking-wider text-black">
            {speechText}
          </span>
          {/* Small Speech Bubble Tail */}
          <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black" />
          <div className="absolute -bottom-[6px] left-3 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white" />
        </div>
      </motion.div>

      {/* Main Character Vector Illustration (Line Art Monochrome) */}
      <svg
        viewBox="0 0 280 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        {/* Hair Back */}
        <path
          d="M80 140 C65 110 70 65 110 45 C150 25 185 45 195 70 C205 95 195 130 180 145 Z"
          fill="#0A0A0A"
        />

        {/* Head / Face */}
        <path
          d="M95 95 C95 85 105 75 140 75 C175 75 185 85 185 95 C185 145 180 180 140 180 C100 180 95 145 95 95 Z"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Hair Front / Curls */}
        <path
          d="M75 105 C70 80 85 45 125 40 C165 35 195 60 190 95 C185 85 170 70 140 70 C110 70 90 85 75 105 Z"
          fill="#0A0A0A"
        />
        <path
          d="M100 65 Q115 50 135 60 Q155 45 175 60"
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Ears */}
        <path
          d="M95 115 C85 115 85 135 95 135"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3.5"
        />
        <path
          d="M185 115 C195 115 195 135 185 135"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3.5"
        />

        {/* Glasses */}
        <rect
          x="105"
          y="105"
          width="28"
          height="22"
          rx="5"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3.5"
        />
        <rect
          x="147"
          y="105"
          width="28"
          height="22"
          rx="5"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3.5"
        />
        {/* Glasses Bridge */}
        <line x1="133" y1="115" x2="147" y2="115" stroke="#0A0A0A" strokeWidth="3.5" />
        {/* Eyes inside glasses */}
        <circle cx="119" cy="116" r="3.5" fill="#0A0A0A" />
        <circle cx="161" cy="116" r="3.5" fill="#0A0A0A" />

        {/* Smile */}
        <path
          d="M128 145 Q140 156 152 145"
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Neck */}
        <path
          d="M125 175 L125 200 L155 200 L155 175"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3.5"
        />

        {/* Body / Black Shirt */}
        <path
          d="M75 220 C85 200 115 195 140 195 C165 195 195 200 205 220 L215 350 L65 350 Z"
          fill="#0A0A0A"
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Shirt Collar V-neck */}
        <path
          d="M125 198 L140 225 L155 198"
          fill="#FFFFFF"
          stroke="#0A0A0A"
          strokeWidth="3"
        />

        {/* Left Arm (Relaxed) */}
        <path
          d="M75 220 C60 250 65 300 80 320"
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Arm Waving with subtle animation */}
        <g>
          {/* Upper arm to forearm */}
          <path
            d="M205 220 C220 200 230 170 235 140"
            stroke="#0A0A0A"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Watch on wrist */}
          <rect x="227" y="142" width="16" height="8" rx="2" fill="#0A0A0A" />

          {/* Hand Waving Palm & Fingers */}
          <path
            d="M232 140 C225 125 220 95 230 90 C235 88 240 95 240 105 L242 85 C244 80 250 82 250 90 L252 82 C255 78 260 80 260 88 L262 92 C265 90 270 94 268 102 C265 120 255 138 245 145 Z"
            fill="#FFFFFF"
            stroke="#0A0A0A"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default HeroCharacter;
