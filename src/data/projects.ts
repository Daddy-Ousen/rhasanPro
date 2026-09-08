export interface ProjectSubcard {
  title: string;
  description: string;
  dotColor: "amber" | "cyan" | "emerald";
}

export interface ProjectItem {
  id: string;
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  category: "AI & Automation" | "Web Systems" | "IT Infrastructure";
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  subcards: ProjectSubcard[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  diagramSteps?: { step: number; title: string; desc: string; icon: string }[];
}

export const projects: ProjectItem[] = [
  {
    id: "nextvector",
    slug: "nextvector",
    badge: "TECH & AI NEWS PLATFORM • DAILY DISPATCHES & NEWSLETTER",
    title: "NextVector — Technology & AI News Platform",
    subtitle: "Independent Digital Intelligence News Platform with Daily Tech Reporting, Newsletter Dispatches & Integrated Frontier AI Benchmarks",
    category: "AI & Automation",
    tagline: "Less noise. More signal. Daily tech & AI news, newsletter dispatches, and an integrated, expanding frontier AI model & benchmark intelligence engine.",
    overview: "NextVector (nextvector.rhasan.online) is an independent technology news and digital intelligence platform built to cut through marketing hype, benchmark saturation, and repetitive news regurgitation. Updated daily with breaking technical developments and executive newsletter briefings ('The Morning Vector'), NextVector evaluates every story through its signature Three Questions Framework (What happened? Why does it matter? What could happen next?). Baked directly into the platform is an expanding, dynamic frontier AI model registry (tracking 135+ models across 24+ global research labs with real-time token pricing and LMSYS Arena rankings) and an empirical benchmark watchdog auditing real capability leaps against dataset contamination.",
    challenge: "The technical media landscape is flooded with superficial press releases, clickbait headlines, and cherry-picked benchmark claims. Engineers, researchers, and technical leaders need a daily publication that provides rigorous empirical depth on breaking tech and AI news, paired with unbiased, live model tracking that grows continuously alongside the frontier ecosystem.",
    solution: "Engineered a high-performance, zero-overhead digital news platform using React 19, Vite 8, TypeScript, and Tailwind CSS v4. Combines daily breaking news articles with purity scoring, a curated daily newsletter dispatch, an expanding multi-lab AI models directory with side-by-side spec comparisons, and an empirical benchmark radar auditing real-world task performance.",
    impact: [
      "Publishes daily verified technology and foundation AI news evaluated via the Three Questions Framework.",
      "Maintains 'The Morning Vector' daily newsletter briefing formatted for 3-minute executive consumption.",
      "Integrates an expanding frontier models registry (135+ active models across 24+ labs) with live token cost calculators and benchmark audits.",
    ],
    technologies: ["React 19", "TypeScript", "Vite 8", "Tailwind CSS v4", "Lucide React", "Edge CDN", "Oxlint"],
    subcards: [
      {
        title: "Daily Tech & AI News Engine",
        description: "Curated technical journalism evaluated through the Three Questions Framework with real-time breaking tickers and audio briefings.",
        dotColor: "emerald",
      },
      {
        title: "'The Morning Vector' Newsletter",
        description: "Daily executive newsletter dispatch delivering a high-purity, 3-minute technical scan of critical daily AI and technology developments.",
        dotColor: "amber",
      },
      {
        title: "Integrated Model & Benchmark Radar",
        description: "Dynamic, continuously expanding registry of frontier AI models (135+ models across 24+ labs) with live LMSYS Arena Elo rankings and empirical benchmark audits.",
        dotColor: "cyan",
      },
    ],
    githubUrl: "https://github.com/Daddy-Ousen/NextVector",
    liveUrl: "https://nextvector.rhasan.online/",
    caseStudyUrl: "/projects/nextvector",
    featured: true,
    metrics: [
      { label: "News Frequency", value: "Daily" },
      { label: "Frontier Models", value: "135+ Active" },
      { label: "Newsletter", value: "Morning Vector" },
    ],
    diagramSteps: [
      { step: 1, title: "Daily Tech Intelligence", desc: "Curates daily breakthroughs across AI labs, enterprise compute, and quantum research.", icon: "cpu" },
      { step: 2, title: "Three Questions Editorial", desc: "Evaluates what happened, why it matters, and second-order impacts without marketing hype.", icon: "terminal" },
      { step: 3, title: "Baked-in Benchmark Auditing", desc: "Cross-examines model capability claims against OSWorld, WebArena, SWE-bench, and Cyber-Eval.", icon: "play" },
      { step: 4, title: "Multi-Channel Dispatch", desc: "Dispatches real-time web articles, audio narrations, and 'The Morning Vector' daily newsletter.", icon: "check" },
    ],
  },
  {
    id: "hermes-ai",
    slug: "hermes",
    badge: "AGENTIC AI • PERSONAL PROJECT • FEB 2026 – PRESENT",
    title: "Hermes — Self-Hosted AI Assistant",
    subtitle: "Self-Hosted Agentic AI Assistant with Autonomous Tool Calling & Headless Browser Automation",
    category: "AI & Automation",
    tagline: "Bridging system administration with autonomous tool-calling AI agents running locally as a continuous background daemon.",
    overview: "Built and self-host an autonomous AI assistant engineered with dynamic tool-calling, headless browser automation, and multi-channel messaging integration. Hermes automates personal workflows, executes terminal tasks, and explores practical applications of agentic AI architectures in IT operations.",
    challenge: "Enterprise engineers frequently switch context between CLI terminals, web dashboards, and documentation. Traditional chatbots only return plain text and cannot interact with host environments or execute real multi-step workflows safely.",
    solution: "Architected a modular agent runtime featuring deterministic JSON schema tool-calling, headless Chromium browser control, persistent memory queues, and an encrypted credential manager for API keys.",
    impact: [
      "Reduced routine infrastructure lookup times by ~60% through automated query-and-fetch commands.",
      "Implemented zero-trust execution sandbox preventing unauthorized write operations on host systems.",
      "Engineered autonomous multi-step reasoning loops with self-correcting error recovery.",
    ],
    technologies: ["Python", "FastAPI", "Agentic LLMs", "Playwright", "Systemd Daemon", "Docker", "SQLite", "Bash"],
    subcards: [
      {
        title: "Tool-Calling Engine",
        description: "Autonomous execution of terminal commands, filesystem operations, and HTTP APIs.",
        dotColor: "amber",
      },
      {
        title: "Browser Automation",
        description: "Headless portal interaction, report downloads, and web data extraction.",
        dotColor: "cyan",
      },
      {
        title: "Self-Hosted Linux",
        description: "Dedicated Linux host with local state persistence and secure webhook gateways.",
        dotColor: "emerald",
      },
    ],
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
    badge: "CORPORATE MARKETING PLATFORM • PRODUCTION DEPLOYMENT",
    title: "OGGRO Technologies Web Platform",
    subtitle: "Ultra-Fast Zero-Runtime Marketing Architecture Built on Next.js 15 & Tailwind v4",
    category: "Web Systems",
    tagline: "High-performance enterprise marketing platform with 100/100 Lighthouse score and automated Playwright test suites.",
    overview: "A fast, fully static corporate marketing website for OGGRO Technologies Limited, the Bangladesh arm of Techants Solutions (Australia). Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4, shipped as zero-runtime static HTML on Apache/WHM with automated Playwright testing.",
    challenge: "Deliver a fluid, modern corporate web experience that loads under 500ms globally while maintaining end-to-end automated visual regression testing to prevent production defects during fast marketing iterations.",
    solution: "Implemented Next.js App Router with full static prerendering, optimized SVG vector graphics, zero-bundle overhead animation primitives, and integrated Playwright end-to-end automated testing in the deployment pipeline.",
    impact: [
      "Achieved 100/100 Lighthouse Performance, SEO, and Best Practices rating.",
      "Reduced cold start and global TTFB to under 180ms via Edge CDN distribution.",
      "Integrated CI/CD test automation catching visual regression bugs prior to merge.",
    ],
    technologies: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "Playwright", "Edge CDN", "Apache"],
    subcards: [
      {
        title: "Static HTML Export",
        description: "Pure static build deployed to Apache/WHM without requiring live Node.js servers or databases.",
        dotColor: "cyan",
      },
      {
        title: "Automated QA Testing",
        description: "Automated Playwright test suites verifying layout integrity, console logs, and WCAG AA contrast.",
        dotColor: "cyan",
      },
      {
        title: "Vector Brand Engineering",
        description: "Custom SVG vector logo system engineered from legacy raster assets for razor-sharp rendering.",
        dotColor: "cyan",
      },
    ],
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
    badge: "AMD AI DEVELOPER HACKATHON • ACT II COMPETITIVE BUILD",
    title: "LedgerBuddy AI MVP — Financial Document Intelligence",
    subtitle: "AMD AI Developer Hackathon: Act II — Financial Document Parser & Double-Entry Reconciliation Engine",
    category: "AI & Automation",
    tagline: "Autonomous financial document parser and double-entry ledger reconciliation AI engine built for AMD AI Hackathon Act II.",
    overview: "An AI-driven accounting document extraction prototype developed for the AMD AI Developer Hackathon (Act II). Implements LLM tool-calling pipelines to parse unstructured PDF receipts, perform schema validation, and automatically generate double-entry ledger entries with discrepancy detection.",
    challenge: "Small businesses and financial operators lose hundreds of hours reconciling diverse multi-currency receipts with non-standard layouts, leading to bookkeeping errors and compliance penalties.",
    solution: "Constructed an automated OCR + LLM schema extraction pipeline that structures messy financial data into standardized JSON formats, validating balance totals with arithmetic verification rules.",
    impact: [
      "Awarded official AMD AI Developer Hackathon: Act II Certificate of Achievement on Lablab.ai.",
      "Achieved 97.2% line-item extraction accuracy across varied invoice schemas.",
      "Built complete open-source MVP on GitHub with full documentation and test fixtures.",
    ],
    technologies: ["Python", "FastAPI", "AMD AI Compute", "OCR Pipelines", "Pydantic", "React", "PostgreSQL"],
    subcards: [
      {
        title: "Document Parsing",
        description: "Automated ingestion of raw financial receipts and invoices into normalized JSON records.",
        dotColor: "amber",
      },
      {
        title: "Ledger Reconciliation",
        description: "Auto-generation of debit/credit rows and chart-of-accounts classification.",
        dotColor: "amber",
      },
      {
        title: "Open Source MVP",
        description: "Reproducible Python codebase engineered with clean virtual environments and tests.",
        dotColor: "amber",
      },
    ],
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
