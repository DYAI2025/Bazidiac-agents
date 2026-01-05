import React, { useEffect, useRef, useState } from 'react';
import { Agent } from '../types';
import { X, Mic } from 'lucide-react';
import { useConvaiScript } from '../hooks/useConvaiScript';

interface AgentModalProps {
  agent: Agent;
  onClose: () => void;
  isOpen: boolean;
}

export const AgentModal: React.FC<AgentModalProps> = ({ agent, onClose, isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Ensure the script is loaded
  useConvaiScript();

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to finish before calling onClose (which unmounts component)
    setTimeout(() => {
      onClose();
      setIsClosing(false); 
    }, 150);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Trap focus inside modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className={`relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] focus:outline-none ${isClosing ? 'animate-slide-down-fade' : 'animate-slide-up-fade'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
        tabIndex={-1}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 dark:border-slate-800 bg-stone-50/50 dark:bg-slate-900/50 backdrop-blur">
          <div>
            <h2 id="modal-title" className="text-lg font-serif font-medium text-stone-900 dark:text-slate-100">
              {agent.name}
            </h2>
            <p className="text-xs text-stone-500 dark:text-slate-400 uppercase tracking-wider">
              {agent.subtitle}
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-slate-800 text-stone-500 dark:text-slate-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Embed Container */}
        <div className="flex-1 p-6 bg-stone-50 dark:bg-slate-950 flex flex-col items-center justify-center min-h-[400px]">
          
          {/* ElevenLabs Widget */}
          <div className="w-full flex justify-center">
             {/* 
                Use the custom element. 
                React renders custom elements by passing all props as attributes if they are strings.
             */}
            {React.createElement('elevenlabs-convai' as any, { 'agent-id': agent.elevenlabsAgentId })}
          </div>

          <div className="mt-8 text-center px-8">
            <p className="text-xs text-stone-400 dark:text-slate-500 max-w-xs mx-auto leading-relaxed">
              Interacting with {agent.name} via Quantum Voice Protocol. 
              <br/>
              Microphone access may be required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};