export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "AI & Automation" | "Web Systems" | "IT Infrastructure";
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  diagramSteps?: { step: number; title: string; desc: string; icon: string }[];
}

export const projects: ProjectItem[] = [
  {
    id: "hermes-ai",
    slug: "hermes",
    title: "Hermes — Autonomous Agent Assistant",
    subtitle: "Self-Hosted Agentic AI Assistant with Autonomous Tool Calling & Headless Browser Automation",
    category: "AI & Automation",
    tagline: "Bridging system administration with autonomous tool-calling AI agents running locally as a continuous background daemon.",
    overview: "Hermes is a private, self-hosted autonomous AI agent built to execute high-order operational tasks. Designed with strict security sandboxing, Hermes translates natural language requests into deterministic system actions: invoking REST APIs, driving headless browsers for web research, executing diagnostic bash routines, and scheduling recurring fleet health checks.",
    challenge: "Enterprise engineers frequently switch context between CLI terminals, web dashboards, and documentation. Traditional chatbots only return plain text and cannot interact with host environments or execute real multi-step workflows safely.",
    solution: "Architected a modular agent runtime featuring deterministic JSON schema tool-calling, headless Chromium browser control, persistent memory queues, and an encrypted credential manager for API keys.",
    impact: [
      "Reduced routine infrastructure lookup times by ~60% through automated query-and-fetch commands.",
      "Implemented zero-trust execution sandbox preventing unauthorized write operations on host systems.",
      "Engineered autonomous multi-step reasoning loops with self-correcting error recovery.",
    ],
    technologies: ["Python", "FastAPI", "Agentic LLMs", "Playwright", "Systemd Daemon", "Docker", "SQLite", "Bash"],
    githubUrl: "https://github.com/Daddy-Ousen",
    caseStudyUrl: "/projects/hermes",
    featured: true,
    metrics: [
      { label: "Execution Speed", value: "<1.2s" },
      { label: "Tool Accuracy", value: "98.4%" },
      { label: "Daemon Uptime", value: "99.9%" },
    ],
    diagramSteps: [
      { step: 1, title: "Natural Prompt Input", desc: "User or scheduled cron triggers task via socket or CLI interface.", icon: "terminal" },
      { step: 2, title: "LLM Intent & Tool Parser", desc: "Hermes reasons over schema registry and chooses exact deterministic tool calls.", icon: "cpu" },
      { step: 3, title: "Sandboxed Tool Execution", desc: "Executes Python scripts, REST APIs, or Headless Browser sessions in isolated worker.", icon: "play" },
      { step: 4, title: "Telemetry & Verification", desc: "Validates output format, captures telemetry, and returns structured result to user.", icon: "check" },
    ],
  },
  {
    id: "oggro-tech",
    slug: "oggro-tech",
    title: "OGGRO Technologies Web Platform",
    subtitle: "Ultra-Fast Zero-Runtime Marketing Architecture Built on Next.js 15 & Tailwind v4",
    category: "Web Systems",
    tagline: "High-performance enterprise marketing platform with 100/100 Lighthouse score and automated Playwright test suites.",
    overview: "Engineered and deployed the official public web presence for OGGRO Technologies (`oggro.tech`). Built from the ground up using Next.js 15, Tailwind CSS v4, and modern TypeScript architecture to ensure instant initial load times, perfect SEO indexing, and airtight accessibility compliance.",
    challenge: "Deliver a fluid, modern corporate web experience that loads under 500ms globally while maintaining end-to-end automated visual regression testing to prevent production defects during fast marketing iterations.",
    solution: "Implemented Next.js App Router with full static prerendering, optimized SVG vector graphics, zero-bundle overhead animation primitives, and integrated Playwright end-to-end automated testing in the deployment pipeline.",
    impact: [
      "Achieved 100/100 Lighthouse Performance, SEO, and Best Practices rating.",
      "Reduced cold start and global TTFB to under 180ms via Edge CDN distribution.",
      "Integrated CI/CD test automation catching visual regression bugs prior to merge.",
    ],
    technologies: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "Playwright", "Edge CDN", "Vercel"],
    liveUrl: "https://www.oggro.tech/",
    caseStudyUrl: "/projects/oggro-tech",
    featured: true,
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Global TTFB", value: "<180ms" },
      { label: "Test Coverage", value: "100% E2E" },
    ],
  },
  {
    id: "ledgerbuddy-ai",
    slug: "ledgerbuddy-ai",
    title: "LedgerBuddy AI MVP",
    subtitle: "AMD AI Developer Hackathon: Act II — Financial Document Parser & Double-Entry Reconciliation Engine",
    category: "AI & Automation",
    tagline: "Autonomous financial document parser and double-entry ledger reconciliation AI engine built for AMD AI Hackathon Act II.",
    overview: "LedgerBuddy AI was developed as a competition submission for the global AMD AI Developer Hackathon: Act II on Lablab.ai. It ingests complex invoices, receipts, and bank statements, extracts unstructured tabular line items, and autonomously reconciles double-entry general ledger debit/credit balances.",
    challenge: "Small businesses and financial operators lose hundreds of hours reconciling diverse multi-currency receipts with non-standard layouts, leading to bookkeeping errors and compliance penalties.",
    solution: "Constructed an automated OCR + LLM schema extraction pipeline that structures messy financial data into standardized JSON formats, validating balance totals with arithmetic verification rules.",
    impact: [
      "Awarded official AMD AI Developer Hackathon: Act II Certificate of Achievement on Lablab.ai.",
      "Achieved 97.2% line-item extraction accuracy across varied invoice schemas.",
      "Built complete open-source MVP on GitHub with full documentation and test fixtures.",
    ],
    technologies: ["Python", "FastAPI", "AMD AI Compute", "OCR Pipelines", "Pydantic", "React", "PostgreSQL"],
    githubUrl: "https://github.com/Daddy-Ousen/LedgerBuddyAIMVP",
    caseStudyUrl: "/projects/ledgerbuddy-ai",
    featured: true,
    metrics: [
      { label: "Extraction Accuracy", value: "97.2%" },
      { label: "Reconciliation Speed", value: "3.4s" },
      { label: "Hackathon Track", value: "AMD Act II" },
    ],
  },
];
