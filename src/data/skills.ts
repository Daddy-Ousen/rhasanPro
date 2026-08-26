export interface SkillItem {
  name: string;
  level: number; // 1-100
  proficiency: "Mastery" | "Advanced" | "Proficient";
  experienceYears: string;
  tags: string[];
}

export interface SkillDomain {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "cloud-identity",
    title: "Cloud & Identity Architecture",
    shortTitle: "Cloud & Identity",
    icon: "cloud",
    description: "Multi-tenant cloud infrastructure, hybrid identity synchronization, modern device management, and security baselines.",
    skills: [
      { name: "Microsoft 365 Administration", level: 96, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["Exchange Online", "SharePoint", "Teams", "Security Admin"] },
      { name: "Microsoft Intune (MDM / MAM)", level: 94, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["Autopilot", "Compliance Policies", "App Deployment", "Configuration Profiles"] },
      { name: "Microsoft Entra ID (Azure AD)", level: 92, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["SSO", "Conditional Access", "MFA", "PIM", "Hybrid Join"] },
      { name: "Azure Core Infrastructure", level: 85, proficiency: "Advanced", experienceYears: "3+ yrs", tags: ["Azure VMs", "Virtual Networks", "Blob Storage", "Azure Bastion"] },
      { name: "M365 Tenant Migrations", level: 90, proficiency: "Advanced", experienceYears: "3+ yrs", tags: ["Cross-Tenant", "IMAP to M365", "Domain Transfer", "Cutover"] },
      { name: "Exchange Online & Mail Routing", level: 92, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["DKIM / DMARC", "SPF", "Mailflow Rules", "Connector Config"] },
    ],
  },
  {
    id: "systems-virtualization",
    title: "Systems & Virtualization Engineering",
    shortTitle: "Systems & Virtualization",
    icon: "server",
    description: "Enterprise operating systems, on-premises directory structures, hypervisors, and core networking topologies.",
    skills: [
      { name: "Windows Server (2016-2022)", level: 95, proficiency: "Mastery", experienceYears: "5+ yrs", tags: ["Failover Cluster", "IIS", "Remote Desktop Services", "Hyper-V"] },
      { name: "Active Directory Domain Services", level: 95, proficiency: "Mastery", experienceYears: "5+ yrs", tags: ["AD DS", "FSMO Roles", "Trust Relationships", "Schema"] },
      { name: "Group Policy Management (GPO)", level: 94, proficiency: "Mastery", experienceYears: "5+ yrs", tags: ["Security Filtering", "WMI Filters", "Hardening", "Scripts"] },
      { name: "Linux Administration", level: 86, proficiency: "Advanced", experienceYears: "3+ yrs", tags: ["Ubuntu", "Debian", "RHEL", "Systemd", "SSH", "Cron"] },
      { name: "Hyper-V & VMware ESXi", level: 88, proficiency: "Advanced", experienceYears: "4+ yrs", tags: ["VM Lifecycle", "VHDX", "Snapshot Management", "vSwitch"] },
      { name: "Core Networking Protocols", level: 90, proficiency: "Advanced", experienceYears: "5+ yrs", tags: ["DNS Zones", "DHCP Scopes", "VLANs", "NAT", "VPN IPsec"] },
    ],
  },
  {
    id: "endpoint-security",
    title: "Endpoint Security & RMM Fleets",
    shortTitle: "Security & RMM",
    icon: "shield",
    description: "Continuous threat hunting, automated fleet telemetry, patch orchestrations, and vulnerability mitigation.",
    skills: [
      { name: "Bitdefender GravityZone EDR", level: 96, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["Incident Investigation", "Risk Management", "Anti-Phishing", "EDR Sensors"] },
      { name: "Datto RMM & NinjaOne", level: 95, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["Patch Management", "Custom Monitoring", "Automated Remediation", "Component Scripts"] },
      { name: "ConnectWise / Ticket Orchestration", level: 92, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["SLA Workflows", "Asset Tracking", "Escalation Routing"] },
      { name: "Esper MDM & Mobile Fleet", level: 88, proficiency: "Advanced", experienceYears: "2+ yrs", tags: ["Dedicated Kiosks", "Android Fleet", "Pipeline Deployment"] },
      { name: "Vulnerability & Threat Mitigation", level: 90, proficiency: "Advanced", experienceYears: "3+ yrs", tags: ["CVE Remediation", "Zero-Day Response", "Hardening Audits"] },
    ],
  },
  {
    id: "bcdr-continuity",
    title: "BCDR & Data Continuity",
    shortTitle: "BCDR & Continuity",
    icon: "database",
    description: "Zero-data-loss architecture, rapid bare-metal restorations, immutable cloud replication, and SDO compliance.",
    skills: [
      { name: "Datto BCDR Appliances (SIRIS / ALTO)", level: 95, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["Screenshot Verification", "Local Virtualization", "Cloud Failover", "Ransomware Detection"] },
      { name: "Acronis Cyber Protect Cloud", level: 92, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["Cloud-to-Cloud M365", "Disk Imaging", "Differential Backup", "Disaster Testing"] },
      { name: "Disaster Recovery Testing & Drills", level: 94, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["RTO / RPO SLA", "Tabletop Simulations", "Bare-Metal Restores"] },
      { name: "SDO (Service Delivery) Audits", level: 90, proficiency: "Advanced", experienceYears: "3+ yrs", tags: ["Compliance Reporting", "Risk Scoring", "Client Technical QBRs"] },
    ],
  },
  {
    id: "operations-leadership",
    title: "Operations & Service Desk Leadership",
    shortTitle: "Operations & Leadership",
    icon: "users",
    description: "Guiding high-performance Tier-1/2 teams, handling complex client escalations, and sustaining world-class CSAT.",
    skills: [
      { name: "Service Desk Co-Leadership (10+ Team)", level: 95, proficiency: "Mastery", experienceYears: "3+ yrs", tags: ["Engineer Mentorship", "Shift Coordination", "Knowledge Base Curation"] },
      { name: "Incident & Escalation Management", level: 96, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["Tier-2 Escalations", "Root Cause Analysis (RCA)", "Major Outage Command"] },
      { name: "CSAT & SLA Performance (>90%)", level: 95, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["Client Retention", "Response Optimization", "Quality Assurance"] },
      { name: "ITIL & Standard Operating Procedures (SOP)", level: 92, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["Runbooks", "Standardization", "Lifecycle Governance"] },
    ],
  },
  {
    id: "automation-software",
    title: "Automation, Agentic AI & Software",
    shortTitle: "Automation & Software",
    icon: "code",
    description: "Bridging systems administration with modern software development, agentic LLMs, and automated infrastructure scripting.",
    skills: [
      { name: "Python Scripting & System Automation", level: 90, proficiency: "Advanced", experienceYears: "3+ yrs", tags: ["API Integrations", "OS Automation", "Async Execution", "Data Processing"] },
      { name: "Bash & PowerShell Automation", level: 94, proficiency: "Mastery", experienceYears: "4+ yrs", tags: ["Fleet Scripting", "Registry Hardening", "Active Directory Bulk Tasks"] },
      { name: "Agentic AI & LLM Tool Calling", level: 88, proficiency: "Advanced", experienceYears: "2+ yrs", tags: ["Function Calling", "Local Daemon Assistants", "RAG Pipelines", "Autonomous Agents"] },
      { name: "Modern Web Engineering", level: 88, proficiency: "Advanced", experienceYears: "2+ yrs", tags: ["Next.js 15", "React 19", "Astro 5", "Tailwind CSS v4", "TypeScript"] },
      { name: "Testing & Quality Automation", level: 84, proficiency: "Proficient", experienceYears: "2+ yrs", tags: ["Playwright", "Headless Browser Automation", "CI/CD Workflows"] },
    ],
  },
];
