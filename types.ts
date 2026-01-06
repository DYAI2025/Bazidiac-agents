export interface AgentCapability {
  text: string;
}

export interface Agent {
  id: string;
  name: string;
  voiceDescription: string;
  focus: string;
  eyebrow: string;
  subtitle: string;
  blurb: string;
  chips: string[];
  capabilities: string[];
  languages: string[];
  elevenlabsAgentId: string;
}