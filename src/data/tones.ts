// Visual identity per project: which rickshaw-art fill it wears,
// plus the short labels used on tiles. Long-form copy stays in projects.ts.

export type Tone = 'navy' | 'gold' | 'pink' | 'teal' | 'card';

export const toneClass: Record<Tone, string> = {
  navy: 'fill-navy',
  gold: 'fill-gold',
  pink: 'fill-pink',
  teal: 'fill-teal',
  card: 'fill-card',
};

export interface ProjectMeta {
  tone: Tone;
  heroTone: Tone;
  tag: string;
  blurb: string;
}

export const projectMeta: Record<string, ProjectMeta> = {
  nextvector: {
    tone: 'navy',
    heroTone: 'navy',
    tag: 'Live · News + AI',
    blurb: 'Daily tech and AI news with less noise. A morning newsletter, and a registry of every frontier model worth knowing.',
  },
  'hermes-ai': {
    tone: 'gold',
    heroTone: 'gold',
    tag: 'Self-hosted agent',
    blurb: 'My own AI assistant. It runs on Linux and uses real tools: shell, browser, memory.',
  },
  'oggro-tech': {
    tone: 'card',
    heroTone: 'teal',
    tag: 'Client site · Production',
    blurb: 'A fast static site with tests that catch broken layouts before they ship.',
  },
  'ledgerbuddy-ai': {
    tone: 'pink',
    heroTone: 'pink',
    tag: 'AMD AI Hackathon',
    blurb: 'Reads messy invoices. Balances the books.',
  },
  timebuddy: {
    tone: 'teal',
    heroTone: 'teal',
    tag: 'SaaS · Thrive IT',
    blurb: 'Time tracking and attendance for teams. Clear hours, no spying.',
  },
  orderbuddy: {
    tone: 'gold',
    heroTone: 'gold',
    tag: 'SaaS · Thrive IT',
    blurb: 'One dashboard to send and track parcels across Pathao, RedX and more.',
  },
  ledgerbuddy: {
    tone: 'teal',
    heroTone: 'teal',
    tag: 'App · Windows + Android',
    blurb: 'Books, stock and POS for small shops. Works offline. Live on Microsoft Store and Google Play.',
  },
  equa: {
    tone: 'pink',
    heroTone: 'pink',
    tag: 'App · Microsoft Store',
    blurb: 'A private money ledger. Your data stays on your device, and the numbers always add up.',
  },
};

export const fallbackMeta: ProjectMeta = { tone: 'card', heroTone: 'teal', tag: 'Project', blurb: '' };

export function metaFor(id: string): ProjectMeta {
  return projectMeta[id] ?? fallbackMeta;
}

/** "NextVector — Technology & AI News Platform" -> "NextVector" */
export function shortTitle(title: string): string {
  return title.split(' — ')[0];
}

export const credentialTone: Record<string, Tone> = {
  'Microsoft Cloud': 'teal',
  'AI & Hackathons': 'pink',
  'Software & Linux': 'gold',
};
