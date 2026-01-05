import React from 'react';
import { Agent } from '../types';
import { Badge } from './ui/Badge';
import { Check, Sparkles } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onSelect: (agent: Agent) => void;
}

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
        <h3 className="text-3xl font-serif text-stone-900 dark:text-ivory-50 font-medium tracking-tight group-hover:text-amber-900 dark:group-hover:text-gold-100 transition-colors">
          {agent.name}
        </h3>
        <p className="text-xs font-semibold text-stone-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
          {agent.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="relative z-10 text-stone-600 dark:text-ivory-200/80 leading-relaxed mb-8 font-light text-sm sm:text-base border-l-2 border-stone-100 dark:border-navy-700 pl-4">
        {agent.blurb}
      </p>

      {/* Chips */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-8">
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

      {/* Dynamic Gradient Glow Effect */}
      <div 
        className="
          absolute inset-0 rounded-2xl z-0 pointer-events-none
          bg-gradient-to-br 
          from-gold-100/30 via-rose-50/20 to-sky-100/30 
          dark:from-gold-500/10 dark:via-purple-900/10 dark:to-indigo-900/10
          bg-[length:200%_200%]
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-1000 ease-in-out
          animate-gradient-shift
          blur-2xl
        " 
      />
    </div>
  );
};