import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`
        group/badge relative 
        inline-flex items-center justify-center
        px-4 py-1.5
        rounded-full
        
        /* Typography */
        text-[10px] uppercase tracking-[0.2em] font-semibold leading-none
        
        /* Base Appearance - Glassy/Minimal */
        bg-stone-100/60 text-stone-500 border border-stone-200/80
        dark:bg-white/5 dark:text-stone-400 dark:border-white/10
        backdrop-blur-sm
        
        /* Hover Appearance - Premium Gold Glow */
        hover:border-gold-400/50 hover:bg-white hover:text-stone-800 hover:shadow-[0_0_15px_-3px_rgba(250,204,21,0.15)]
        dark:hover:bg-white/10 dark:hover:text-gold-100 dark:hover:border-gold-400/40
        hover:-translate-y-0.5
        
        /* Transitions */
        transition-all duration-300 ease-out
        cursor-default select-none overflow-hidden
        
        ${className}
      `}
    >
      {/* Subtle Shine Effect on Hover */}
      <div className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-gold-100/20 to-transparent dark:via-gold-400/10 pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-1.5">
         {/* Tiny dot accent */}
        <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600 group-hover/badge:bg-gold-400 transition-colors duration-300" />
        {children}
      </span>
    </span>
  );
};