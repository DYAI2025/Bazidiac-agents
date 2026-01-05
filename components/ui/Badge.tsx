import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center
        px-3.5 py-1.5 
        rounded-full 
        text-[10px] uppercase tracking-[0.15em] font-semibold
        
        /* Light Mode Styles */
        bg-ivory-100 text-stone-600 border border-stone-200
        
        /* Dark Mode Styles */
        dark:bg-navy-800/40 dark:text-slate-400 dark:border-navy-700/50
        
        /* Transitions */
        transition-all duration-300 ease-out
        
        /* Hover State */
        hover:scale-105 
        hover:border-gold-400/50 hover:text-stone-800 hover:bg-white hover:shadow-[0_2px_10px_-2px_rgba(234,179,8,0.15)]
        
        /* Dark Mode Hover State */
        dark:hover:border-indigo-400/40 dark:hover:text-indigo-200 dark:hover:bg-navy-800 dark:hover:shadow-[0_2px_10px_-2px_rgba(99,102,241,0.15)]
        
        cursor-default select-none
        group/badge
        ${className}
      `}
    >
      {/* Subtle shine effect on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out dark:via-white/10" />
      
      <span className="relative z-10">{children}</span>
    </span>
  );
};