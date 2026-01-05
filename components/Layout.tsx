import React from 'react';
import { Search, Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ease-in-out ${
      isDarkMode 
        ? 'dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-deep via-navy-darker to-black text-slate-200' 
        : 'bg-ivory text-stone-900'
    }`}>
      
      {/* Background Watermark Text */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
        <h1 className="absolute -top-20 -left-20 text-[20vw] leading-none font-serif text-stone-200/40 dark:text-white/5 opacity-30 dark:opacity-5 mix-blend-overlay">
          ASTRO
        </h1>
        <h1 className="absolute top-[40%] -right-20 text-[20vw] leading-none font-serif text-stone-200/40 dark:text-white/5 opacity-30 dark:opacity-5 mix-blend-overlay">
          AGENTS
        </h1>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-xs font-bold tracking-[0.3em] text-amber-600 dark:text-indigo-400 mb-2 drop-shadow-sm">
              SYSTEM_V.7.0
            </div>
            <h1 className="text-4xl font-serif tracking-tight text-stone-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-slate-400">
              Choose your agent
            </h1>
            <p className="mt-2 text-stone-500 dark:text-slate-400 max-w-md font-light">
              Select an intelligence interface to begin your consultation.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-amber-500 dark:group-focus-within:text-indigo-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search the matrix..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 dark:bg-navy-800/40 border border-stone-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-indigo-500/20 transition-all text-stone-800 dark:text-slate-200 backdrop-blur-sm placeholder:text-stone-400 dark:placeholder:text-slate-600"
              />
            </div>
            
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/80 dark:bg-navy-800/40 border border-stone-200 dark:border-slate-700 hover:bg-stone-50 dark:hover:bg-navy-800 text-stone-600 dark:text-slate-300 transition-colors backdrop-blur-sm"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button className="hidden sm:block px-6 py-2.5 rounded-full bg-stone-900 dark:bg-indigo-600/10 dark:border dark:border-indigo-500/30 text-stone-50 dark:text-indigo-100 text-sm font-medium hover:bg-stone-800 dark:hover:bg-indigo-600/20 transition-all shadow-sm">
              Upgrade
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-stone-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <p className="text-[10px] font-bold tracking-widest text-stone-400 dark:text-slate-600 uppercase">
              Transparency Protocol
            </p>
            <p className="text-xs leading-relaxed text-stone-500 dark:text-slate-500 font-light">
              The astrological and calculating agents provided herein are for entertainment and reflective purposes only. 
              They do not predict the future with absolute certainty nor do they offer professional financial, legal, or medical advice. 
              User discretion is advised when interpreting quantum synthesis outputs.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};