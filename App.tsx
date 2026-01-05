import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { AgentCard } from './components/AgentCard';
import { AgentModal } from './components/AgentModal';
import { AGENTS } from './constants';
import { Agent } from './types';
import { useConvaiScript } from './hooks/useConvaiScript';

function App() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load script globally once at app level
  useConvaiScript();

  // Handle dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
        
        {/* Agent Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="h-full">
              <AgentCard 
                agent={agent} 
                onSelect={(agent) => setSelectedAgent(agent)} 
              />
            </div>
          ))}
        </div>

        {/* Modal Logic */}
        {selectedAgent && (
          <AgentModal 
            agent={selectedAgent} 
            isOpen={!!selectedAgent}
            onClose={() => setSelectedAgent(null)} 
          />
        )}
        
      </Layout>
    </div>
  );
}

export default App;
