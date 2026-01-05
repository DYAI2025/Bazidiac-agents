import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`
        relative 
        inline-flex items-center justify-center
        px-3.5 py-1.5 
        rounded-full 
        
        /* Typography: Ultra-wide tracking for editorial feel */
        text-[10px] uppercase tracking-[0.2em] font-semibold leading-none
        
        /* Base Colors: Low contrast, harmonious with card background */
        bg-stone-100/50 text-stone-500 border border-stone-200/60
        dark:bg-white/5 dark:text-stone-400 dark:border-white/10
        
        /* Backdrop for glass feel */
        backdrop-blur-sm
        
        /* Transitions */
        transition-all duration-300 ease-out
        
        /* Hover States: Subtle lift and glow, gold accents */
        hover:bg-white hover:border-gold-400/40 hover:text-stone-800
        hover:shadow-[0_4px_12px_-2px_rgba(234,179,8,0.15)]
        hover:-translate-y-0.5
        
        /* Dark Mode Hover */
        dark:hover:bg-white/10 dark:hover:border-gold-400/30 dark:hover:text-gold-100
        dark:hover:shadow-[0_4px_12px_-2px_rgba(250,204,21,0.1)]
        
        cursor-default select-none
        ${className}
      `}
    >
      {children}
    </span>
  );
};