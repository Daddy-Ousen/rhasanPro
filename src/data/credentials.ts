export interface CredentialItem {
  id: string;
  title: string;
  code: string;
  issuer: string;
  issuerBadge: string;
  issuedDate: string;
  expiryDate?: string;
  verificationUrl?: string;
  verified: boolean;
  category: "Microsoft Cloud" | "AI & Hackathons" | "Software & Linux";
  description: string;
  skillsValidated: string[];
  badgeColor: string;
  icon: string;
}

export const credentials: CredentialItem[] = [
  {
    id: "ms-md102",
    title: "Microsoft 365 Certified: Endpoint Administrator Associate",
    code: "MD-102",
    issuer: "Microsoft",
    issuerBadge: "Microsoft Learn Certified",
    issuedDate: "Verified Credential",
    verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/RobiulHasan-1054/B1D8793EA1D57ED6?sharingId=D6FD17C973E7B1C5",
    verified: true,
    category: "Microsoft Cloud",
    description: "Validates enterprise mastery in deploying, configuring, protecting, and monitoring devices and client applications in Microsoft 365, Microsoft Intune, Entra ID, and Windows environments.",
    skillsValidated: [
      "Microsoft Intune MDM / MAM Architecture",
      "Windows Autopilot & Zero-Touch Deployment",
      "Endpoint Security Baselines & BitLocker",
      "Entra ID Conditional Access & Compliance",
      "Device Lifecycle & Application Packaging",
    ],
    badgeColor: "from-blue-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-400",
    icon: "microsoft",
  },
  {
    id: "ms-md100",
    title: "Microsoft Certified: Modern Desktop Administrator Associate",
    code: "MD-100",
    issuer: "Microsoft",
    issuerBadge: "Microsoft Certified",
    issuedDate: "Verified Credential",
    verified: true,
    category: "Microsoft Cloud",
    description: "Demonstrates core expertise in installing, configuring, maintaining, and troubleshooting Windows client operating systems, local policies, networking, and data storage in enterprise domains.",
    skillsValidated: [
      "Windows 10/11 Architecture & Subsystems",
      "Local Security Policies & Permissions",
      "Network Connectivity & Remote Access",
      "System Recovery & Data Protection",
      "Hardware Diagnostics & Driver Management",
    ],
    badgeColor: "from-blue-600/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
    icon: "windows",
  },
  {
    id: "amd-hackathon-act2",
    title: "AMD AI Developer Hackathon: Act II — Certificate of Achievement",
    code: "AMD-ACT-II",
    issuer: "AMD / Lablab.ai",
    issuerBadge: "Global Hackathon Winner Track",
    issuedDate: "Verified Certificate",
    verificationUrl: "https://lablab.ai/u/@rhasan22959110/ai-hackathons/amd-developer-hackathon-act-ii/certificate",
    verified: true,
    category: "AI & Hackathons",
    description: "Recognized for building LedgerBuddy AI MVP, an autonomous financial document parser and double-entry reconciliation engine utilizing AMD AI compute hardware and modern LLM pipelines.",
    skillsValidated: [
      "Agentic AI Pipeline Construction",
      "AMD ROCm / AI Compute Optimization",
      "Financial Document Parsing & OCR",
      "FastAPI & Pydantic Data Reconciliation",
      "Autonomous Tool Execution",
    ],
    badgeColor: "from-red-500/20 to-amber-500/10 border-red-500/30 text-red-400",
    icon: "award",
  },
  {
    id: "python-umich",
    title: "Python for Everybody Specialization",
    code: "PY-UMICH",
    issuer: "University of Michigan",
    issuerBadge: "Academic Specialization",
    issuedDate: "Verified Credential",
    verified: true,
    category: "Software & Linux",
    description: "In-depth specialization covering Python data structures, networked application programming interfaces, web scraping, SQLite database integrations, and automated data visualization.",
    skillsValidated: [
      "Object-Oriented Python Programming",
      "Web Scraping & REST API Consumption",
      "Relational Database Modeling with SQLite",
      "Async Scripting & Fleet Automation",
    ],
    badgeColor: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400",
    icon: "python",
  },
  {
    id: "linux-foundation",
    title: "Linux Operating System Foundation Certification",
    code: "LINUX-FOUND",
    issuer: "StudySection",
    issuerBadge: "Systems Foundation",
    issuedDate: "Verified Credential",
    verified: true,
    category: "Software & Linux",
    description: "Certifies fundamental knowledge of Linux kernel architecture, bash shell scripting, systemd service management, user permissions, and network daemon configuration.",
    skillsValidated: [
      "Linux File Hierarchy & Kernel Basics",
      "Bash Shell Scripting & Automation",
      "Systemd Daemon Management",
      "User, Group & Chmod Security Permissions",
      "Package Managers (APT, DNF, Pacman)",
    ],
    badgeColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    icon: "terminal",
  },
];
