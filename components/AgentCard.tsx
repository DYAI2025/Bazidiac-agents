import React from 'react';
import { Agent } from '../types';
import { Badge } from './ui/Badge';
import { Check, Sparkles } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onSelect: (agent: Agent) => void;
}

// Simple internal component for flag SVGs to keep the main component clean
const FlagIcon: React.FC<{ lang: string }> = ({ lang }) => {
  const getFlagData = (code: string) => {
    switch (code) {
      case 'en': return { name: 'English', path: <g><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00247d" d="M0 0h640v480H0z"/><path stroke="#fff" strokeWidth="60" d="M0 0l640 480M640 0L0 480"/><path stroke="#cf142b" strokeWidth="40" d="M0 0l640 480M640 0L0 480"/><path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640"/><path stroke="#cf142b" strokeWidth="60" d="M320 0v480M0 240h640"/></g> };
      case 'de': return { name: 'German', path: <g><path fill="#ffce00" d="M0 320h640v160H0z"/><path fill="#000" d="M0 0h640v160H0z"/><path fill="#d00" d="M0 160h640v160H0z"/></g> };
      case 'fr': return { name: 'French', path: <g><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#002395" d="M0 0h213.3v480H0z"/><path fill="#ed2939" d="M426.7 0H640v480H426.7z"/></g> };
      case 'es': return { name: 'Spanish', path: <g><path fill="#AA151B" d="M0 0h640v480H0z"/><path fill="#F1BF00" d="M0 120h640v240H0z"/></g> };
      case 'it': return { name: 'Italian', path: <g><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></g> };
      case 'pt': return { name: 'Portuguese', path: <g><path fill="#ff0000" d="M256 0h384v480H256z"/><path fill="#006600" d="M0 0h256v480H0z"/><circle cx="256" cy="240" r="80" fill="#ffff00" /><path fill="#fff" d="M256 195c-30 0-50 15-50 50v35c0 40 20 60 50 60s50-20 50-60v-35c0-35-20-50-50-50z"/><path fill="#ff0000" d="M256 210v115" stroke="#ff0000" strokeWidth="30"/><path fill="none" stroke="#fff" strokeWidth="10" d="M256 210v115M230 250h52"/></g> };
      default: return { name: code, path: null };
    }
  };

  const { name, path } = getFlagData(lang);

  return (
    <div 
      className="relative group/flag"
      title={name}
    >
      <svg 
        viewBox="0 0 640 480" 
        className="w-4 h-3 rounded-[1px] shadow-sm transition-all duration-300"
        // The filter creates the bronze tint: grayscale -> sepia -> slight hue rotate for gold tone -> low contrast
        style={{
          filter: 'grayscale(100%) sepia(100%) hue-rotate(20deg) brightness(0.9) contrast(0.8)' 
        }}
      >
        {path}
      </svg>
      {/* Fallback border to define shape if contrast is too low */}
      <div className="absolute inset-0 rounded-[1px] ring-1 ring-inset ring-black/10 dark:ring-white/20 pointer-events-none mix-blend-multiply dark:mix-blend-overlay"></div>
    </div>
  );
};

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onSelect }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white/60 dark:bg-navy-900/40 backdrop-blur-md border border-stone-200/80 dark:border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 dark:hover:shadow-gold-500/5 hover:-translate-y-1 hover:border-gold-400/40 dark:hover:border-gold-400/30 overflow-hidden">
      
      {/* Eyebrow Label */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-600/80 dark:text-gold-400/90 transition-colors">
          {agent.eyebrow}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-navy-600 group-hover:bg-amber-400 dark:group-hover:bg-gold-400 transition-colors" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="text-3xl font-serif text-stone-900 dark:text-ivory-50 font-medium tracking-tight group-hover:text-amber-900 dark:group-hover:text-gold-100 transition-colors">
            {agent.name}
          </h3>
          
          {/* Language Flags (Bronze Tinted) */}
          {agent.languages && (
            <div className="flex items-center gap-1.5 pt-1.5 opacity-80 hover:opacity-100 transition-opacity">
              {agent.languages.map((lang) => (
                <FlagIcon key={lang} lang={lang} />
              ))}
            </div>
          )}
        </div>

        <p className="text-xs font-semibold text-stone-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
          {agent.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="relative z-10 text-stone-600 dark:text-ivory-200/80 leading-relaxed mb-6 font-light text-sm sm:text-base border-l-2 border-stone-100 dark:border-navy-700 pl-4">
        {agent.blurb}
      </p>

      {/* Chips */}
      <div className="relative z-10 flex flex-wrap gap-2 gap-y-3 mb-8">
        {agent.chips.map((chip) => (
          <Badge key={chip}>{chip}</Badge>
        ))}
      </div>

      {/* Capabilities List */}
      <div className="relative z-10 mt-auto space-y-3 mb-8 bg-stone-50/50 dark:bg-black/20 p-4 rounded-xl border border-stone-100 dark:border-white/5 backdrop-blur-sm group-hover:bg-white/40 dark:group-hover:bg-black/40 transition-colors duration-500">
        <p className="text-[10px] font-bold text-stone-400 dark:text-slate-500 uppercase tracking-widest mb-1">
          Capabilities
        </p>
        {agent.capabilities.map((cap, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-stone-700 dark:text-ivory-100/90">
            <Check className="w-3.5 h-3.5 text-emerald-600/60 dark:text-emerald-400/70 mt-0.5 flex-shrink-0" />
            <span className="font-light">{cap}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => onSelect(agent)}
        className="
          relative z-10 w-full overflow-hidden group/btn
          flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl 
          bg-stone-900 dark:bg-ivory-100 text-stone-50 dark:text-navy-950 
          font-medium text-sm tracking-wide
          transition-all duration-300 active:scale-[0.98] 
          shadow-lg shadow-stone-900/10 dark:shadow-none
          border border-transparent dark:border-white/50
          group-hover:shadow-xl group-hover:bg-stone-800 dark:group-hover:bg-white
        "
        aria-label={`Open chat with ${agent.name}`}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
        <Sparkles className="w-4 h-4 transition-transform group-hover/btn:rotate-12 text-stone-400 dark:text-navy-600" />
        <span>Initialize Protocol</span>
      </button>

      {/* Dynamic Gradient Glow Effect - Optimized for Warm/Pastel Gold */}
      <div 
        className="
          absolute inset-0 rounded-2xl z-0 pointer-events-none
          bg-gradient-to-br 
          from-gold-100/40 via-rose-50/20 to-amber-100/30 
          dark:from-gold-500/10 dark:via-purple-900/20 dark:to-indigo-900/20
          bg-[length:200%_200%]
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-700 ease-in-out
          animate-gradient-shift
          blur-2xl
        " 
      />
    </div>
  );
};