import { Agent } from './types';

export const AGENTS: Agent[] = [
  {
    id: 'levi-bazi',
    name: 'Levi Bazi',
    voiceDescription: 'calm, deep male',
    focus: 'BaZi + Fusion Calculation',
    eyebrow: 'QUANTUM_BAZI_PROTOCOLS',
    subtitle: 'BaZi · Elements · Cycles · Fusion',
    blurb: 'A calm, deep male voice with a sharp, systematic approach to calculation and synthesis.',
    chips: ['calm voice', 'precision', 'BaZi fusion'],
    capabilities: [
      'Calm male',
      'Precise in calculating ascendent',
      'Expert in Ba Zi and Fusion Calculation'
    ],
    languages: ['en', 'de', 'es', 'fr', 'it', 'pt'],
    elevenlabsAgentId: 'agent_9001kdhah7vrfh3rd05pakg8vppk'
  },
  {
    id: 'luna-celestia',
    name: 'Victoria Celestia',
    voiceDescription: 'warm female voice',
    focus: 'Relationship + Career/Vocational astrology',
    eyebrow: 'CELESTIAL_RELATIONSHIP_MODULE',
    subtitle: 'Relationships · Career · Synastry · Vocation',
    blurb: 'A warm female voice focused on relationship dynamics and career/vocational astrology — clear, supportive, and grounded.',
    chips: ['relationships', 'career', 'clarity'],
    capabilities: [
      'Warm female voice',
      'Relationship & synastry focus',
      'Career & vocational astrology'
    ],
    languages: ['en', 'de', 'es', 'fr', 'it', 'pt'],
    elevenlabsAgentId: 'agent_1701kdekhhref78v6547amzrg1nb'
  }
];

export const CONVAI_SCRIPT_URL = "https://unpkg.com/@elevenlabs/convai-widget-embed";