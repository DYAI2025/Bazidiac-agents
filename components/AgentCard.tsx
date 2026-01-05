import React from 'react';
import { Agent } from '../types';
import { Badge } from './ui/Badge';
import { Check, Mic, Sparkles } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onSelect: (agent: Agent) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onSelect }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white/60 dark:bg-navy-900/40 backdrop-blur-md border border-stone-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5 dark:hover:shadow-indigo-900/20 hover:-translate-y-1">
      
      {/* Eyebrow Label */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-600/80 dark:text-indigo-400/80">
          {agent.eyebrow}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-slate-700 group-hover:bg-amber-400 dark:group-hover:bg-indigo-400 transition-colors" />
      </div>

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-3xl font-serif text-stone-900 dark:text-slate-100 font-medium tracking-tight group-hover:text-amber-800 dark:group-hover:text-indigo-200 transition-colors">
          {agent.name}
        </h3>
        <p className="text-xs font-semibold text-stone-400 dark:text-slate-500 mt-2 uppercase tracking-widest">
          {agent.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-stone-600 dark:text-slate-300 leading-relaxed mb-8 font-light text-sm sm:text-base border-l-2 border-stone-100 dark:border-slate-800 pl-4">
        {agent.blurb}
      </p>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {agent.chips.map((chip) => (
          <Badge key={chip}>{chip}</Badge>
        ))}
      </div>

      {/* Capabilities List */}
      <div className="mt-auto space-y-3 mb-8 bg-stone-50/50 dark:bg-black/20 p-4 rounded-xl border border-stone-100 dark:border-white/5">
        <p className="text-[10px] font-bold text-stone-400 dark:text-slate-600 uppercase tracking-widest mb-1">
          Capabilities
        </p>
        {agent.capabilities.map((cap, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-stone-700 dark:text-slate-300">
            <Check className="w-3.5 h-3.5 text-emerald-600/60 dark:text-emerald-400/60 mt-0.5 flex-shrink-0" />
            <span className="font-light">{cap}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => onSelect(agent)}
        className="
          w-full relative overflow-hidden group/btn
          flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl 
          bg-stone-900 dark:bg-slate-100 text-stone-50 dark:text-navy-900 
          font-medium text-sm tracking-wide
          transition-all duration-300 active:scale-[0.98] 
          shadow-lg shadow-stone-900/10 dark:shadow-none
        "
        aria-label={`Open chat with ${agent.name}`}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
        <Sparkles className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
        <span>Initialize Protocol</span>
      </button>

      {/* Decorative Gradient Glow (Subtle) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-cyan-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700" />
    </div>
  );
};