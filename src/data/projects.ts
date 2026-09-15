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
  category: "SaaS Products" | "Cross-Platform Apps" | "AI & Automation" | "Web Systems" | "IT Infrastructure";
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  subcards: ProjectSubcard[];
  githubUrl?: string;
  liveUrl?: string;
  storeLinks?: { label: string; url: string }[];
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
    id: "timebuddy",
    slug: "timebuddy",
    badge: "SAAS PRODUCT • BUILT AT THRIVE IT SOLUTIONS",
    title: "TimeBuddy — Workforce Time & Attendance SaaS",
    subtitle: "Multi-Tenant Time Tracking, Attendance & Productivity Platform with a Native Windows Desktop Agent",
    category: "SaaS Products",
    tagline: "Workforce time tracking and attendance that gives managers visibility without keystroke logging, webcams or screenshots.",
    overview: "TimeBuddy (timebuddy.orderbuddy.pro) is a multi-tenant SaaS for time tracking, attendance and team productivity, built under Thrive IT Solutions. Companies sign up, invite their team and see who is working, on what, and for how long. A small Windows agent records the active app and idle time. It never logs keystrokes, never uses the webcam, and cleans sensitive window titles before sending anything.",
    challenge: "Most time-tracking tools either trust manual timesheets that nobody fills in, or turn into surveillance software with screenshots and keystroke logs. Teams lose trust, and managers still don't get clean attendance or project-hour data.",
    solution: "Built a Turborepo + pnpm monorepo with a Next.js 15 web dashboard, an Express REST API on Prisma and PostgreSQL, shared Zod schemas, and a native Windows agent that reads the foreground window and last-input time through Win32 APIs. Each organisation is fully isolated, with four roles from owner to employee.",
    impact: [
      "Shipped 7 working modules: live workforce view, workday timeline, projects & tasks, teams & shifts, timesheets & approvals, reports, and policy settings.",
      "Native Windows agent keeps working offline and uploads buffered activity when the network returns.",
      "Privacy by design: no keystroke logging, no webcam, and automatic cleaning of banking, password and private-browsing window titles.",
    ],
    technologies: ["Next.js 15", "TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "Zod", "Win32 API", "Turborepo", "Docker"],
    subcards: [
      {
        title: "Multi-Tenant SaaS",
        description: "Self-service company sign-up, invite links, and four roles: owner, admin, team manager, employee.",
        dotColor: "cyan",
      },
      {
        title: "Windows Desktop Agent",
        description: "Reads the active app and idle time through Win32 APIs, with an offline store-and-forward buffer.",
        dotColor: "amber",
      },
      {
        title: "Timesheets & Reports",
        description: "Auto-built timesheets, approval queues, punctuality scores, project-hour budgets and CSV export.",
        dotColor: "emerald",
      },
    ],
    liveUrl: "https://timebuddy.orderbuddy.pro/",
    caseStudyUrl: "/projects/timebuddy",
    featured: false,
    metrics: [
      { label: "Modules", value: "7" },
      { label: "User Roles", value: "4" },
      { label: "Agent", value: "Windows" },
    ],
  },
  {
    id: "orderbuddy",
    slug: "orderbuddy",
    badge: "SAAS PRODUCT • BUILT AT THRIVE IT SOLUTIONS",
    title: "OrderBuddy — Courier Dispatch SaaS for E-commerce",
    subtitle: "Multi-Tenant Courier Dispatch & Tracking Platform Unifying Pathao, RedX and More Behind One Dashboard",
    category: "SaaS Products",
    tagline: "One dashboard for e-commerce merchants to send, track and manage parcels across multiple Bangladeshi couriers.",
    overview: "OrderBuddy (orderbuddy.pro) is a multi-tenant SaaS built under Thrive IT Solutions that unifies courier dispatch for e-commerce merchants. A merchant sends one order payload, and OrderBuddy formats and sends it to the right courier, such as Pathao or RedX. Slow courier API calls run in a background queue, so the dashboard stays fast. Courier API keys are encrypted at rest.",
    challenge: "Online shops in Bangladesh work with several couriers at once. Each courier has its own dashboard, its own API and its own data format. Staff copy the same order into multiple portals, tracking is scattered, and API keys often sit in plain text.",
    solution: "Built a Turborepo + pnpm monorepo: a Next.js web app for the landing page, merchant dashboard and public tracking pages; a Node.js worker that processes BullMQ jobs from Redis; a courier package using the strategy pattern so each courier is one adapter; and a crypto package that encrypts credentials with AES-256-GCM. Prisma runs on PostgreSQL with a multi-tenant client extension. A companion Expo mobile app is in progress.",
    impact: [
      "One order payload dispatches to Pathao or RedX. A new courier needs only one new adapter.",
      "Courier API calls run in a BullMQ background worker, so the merchant dashboard never waits on slow courier APIs.",
      "Courier secrets are encrypted at rest with AES-256-GCM, and every merchant's data is isolated at the database client layer.",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "BullMQ", "Redis", "Expo", "React Native", "Turborepo", "Vercel"],
    subcards: [
      {
        title: "Unified Dispatch Engine",
        description: "Strategy-pattern courier adapters turn one payload into the right Pathao or RedX API call.",
        dotColor: "amber",
      },
      {
        title: "Background Queue",
        description: "BullMQ + Redis worker takes slow courier calls off the request path and retries failures.",
        dotColor: "cyan",
      },
      {
        title: "Encrypted Credential Vault",
        description: "AES-256-GCM encryption for every merchant's courier API keys and secrets.",
        dotColor: "emerald",
      },
    ],
    liveUrl: "https://orderbuddy.pro/",
    caseStudyUrl: "/projects/orderbuddy",
    featured: false,
    metrics: [
      { label: "Couriers", value: "Pathao, RedX" },
      { label: "Secrets", value: "AES-256" },
      { label: "Queue", value: "BullMQ" },
    ],
  },
  {
    id: "ledgerbuddy",
    slug: "ledgerbuddy",
    badge: "CROSS-PLATFORM APP • MICROSOFT STORE & GOOGLE PLAY",
    title: "LedgerBuddy — Business Ledger, Inventory & POS App",
    subtitle: "Offline-First Bookkeeping, Inventory and Point-of-Sale App for Small Businesses on Windows and Android",
    category: "Cross-Platform Apps",
    tagline: "Offline-first ledger, inventory and POS app for small businesses, live on Microsoft Store and Google Play.",
    overview: "LedgerBuddy is a cross-platform finance and inventory app for small businesses, freelancers and shop owners, built under Thrive IT Solutions. It runs on Windows and Android, and is published on both the Microsoft Store and Google Play. It covers sales and PDF invoices, point of sale, stock, purchases, expenses, quotations, and customer and supplier balances. It works fully offline and syncs with the cloud when the internet is back. A separate marketing and account website runs at ledgerbuddy.thriveitbd.com.",
    challenge: "Small shops still keep their accounts in paper khatas or scattered spreadsheets. Cloud-only tools stop working when the internet drops, and most desktop tools don't sync with the owner's phone.",
    solution: "Built one Flutter codebase for Windows and Android using Clean Architecture and the BLoC pattern across 17 feature modules. Drift (SQLite) stores everything locally; a bidirectional sync engine keeps it in step with Supabase (Postgres, Auth, Realtime and Storage). A subscription system and role-based access support owners, admins, managers, accountants and salespeople.",
    impact: [
      "Published on the Microsoft Store and Google Play from one Flutter codebase.",
      "Works fully offline, with two-way cloud sync to Supabase when a connection is available.",
      "17 feature modules including POS with barcode scanning, PDF invoices, stock alerts, quotations and Excel import/export.",
    ],
    technologies: ["Flutter", "Dart", "BLoC", "Drift (SQLite)", "Supabase", "PostgreSQL", "GoRouter", "fpdart"],
    subcards: [
      {
        title: "POS & Invoicing",
        description: "Cart checkout with barcode scanning, multiple payment types, and branded PDF invoices.",
        dotColor: "amber",
      },
      {
        title: "Offline-First Sync",
        description: "Local SQLite first, then bidirectional sync with Supabase when the internet is back.",
        dotColor: "cyan",
      },
      {
        title: "Multi-Tenant SaaS",
        description: "Trial, startup, full and lifetime plans with five business roles and access control.",
        dotColor: "emerald",
      },
    ],
    liveUrl: "https://ledgerbuddy.thriveitbd.com/",
    storeLinks: [
      { label: "Microsoft Store", url: "https://apps.microsoft.com/detail/9NSR6DN33V8T?hl=en-us&gl=BD&ocid=pdpshare" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.thriveitbd.ledgerbuddy" },
    ],
    caseStudyUrl: "/projects/ledgerbuddy",
    featured: true,
    metrics: [
      { label: "Platforms", value: "Win + Android" },
      { label: "Modules", value: "17" },
      { label: "Stores", value: "MS + Play" },
    ],
  },
  {
    id: "equa",
    slug: "equa",
    badge: "CROSS-PLATFORM APP • MICROSOFT STORE",
    title: "Equa — Offline-First Personal Finance Ledger",
    subtitle: "Private, Double-Entry Personal Finance App for Windows, Android and Linux with Optional Cloud Sync",
    category: "Cross-Platform Apps",
    tagline: "A personal finance ledger that keeps your data on your device, with double-entry accuracy and zero rounding errors.",
    overview: "Equa is an offline-first personal finance ledger built under Thrive IT Solutions, published on the Microsoft Store with builds for Android and Linux. All data lives on the device by default. Balances are always derived from transaction history using double-entry rules, and money is stored as integer cents. It tracks net worth, monthly cash flow and loans, with full JSON export and import. Optional cloud backup and sync is available as a premium extra. The product website runs at equa.thriveitbd.com.",
    challenge: "Most personal finance apps ask you to link bank accounts, upload your data to their servers, and accept ad or analytics tracking. People who just want an accurate, private record of their money have few good options.",
    solution: "Built a Flutter app with Clean Architecture and Riverpod, backed by Drift (SQLite) on the device. A core financial engine guards ledger integrity, so balances can't drift from the transactions behind them. Firebase Auth and Firestore power opt-in backup and cross-device sync, and in-app purchases unlock the premium tier. The website is a React 19 + Vite + Tailwind CSS v4 site.",
    impact: [
      "Published on the Microsoft Store, with Android and Linux builds from the same codebase.",
      "No ads, no analytics SDKs, no bank linking. Data stays on the device unless the user turns on sync.",
      "Integer-cent storage makes floating-point rounding errors structurally impossible.",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Drift (SQLite)", "Firebase", "React 19", "Vite", "Tailwind CSS v4"],
    subcards: [
      {
        title: "Double-Entry Engine",
        description: "Balances are derived from transactions, never typed in, so the ledger always adds up.",
        dotColor: "emerald",
      },
      {
        title: "Private by Default",
        description: "Offline-first storage with no ads or tracking; cloud sync is opt-in.",
        dotColor: "cyan",
      },
      {
        title: "Analytics & Loans",
        description: "Net worth, monthly cash-flow charts, and loan repayment tracking against principal.",
        dotColor: "amber",
      },
    ],
    liveUrl: "https://equa.thriveitbd.com/",
    storeLinks: [
      { label: "Microsoft Store", url: "https://apps.microsoft.com/detail/9PM1MTHMCSGK?hl=en-us&gl=BD&ocid=pdpshare" },
    ],
    caseStudyUrl: "/projects/equa",
    featured: true,
    metrics: [
      { label: "Storage", value: "On-device" },
      { label: "Money Math", value: "Integer cents" },
      { label: "Platforms", value: "3" },
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
    featured: false,
    metrics: [
      { label: "Extraction Accuracy", value: "97.2%" },
      { label: "Reconciliation Speed", value: "3.4s" },
      { label: "Hackathon Track", value: "AMD Act II" },
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
    featured: false,
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Global TTFB", value: "<180ms" },
      { label: "Test Coverage", value: "100% E2E" },
    ],
  },
];
