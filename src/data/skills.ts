export type ProficiencyTier = "Mastery" | "Intermediate" | "Beginner";

export interface SkillSubcard {
  name: string;
  description: string;
  proficiency: ProficiencyTier;
  experienceYears: string;
  tags: string[];
}

export interface SkillDomain {
  id: string;
  domainNumber: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  skills: SkillSubcard[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "cloud-identity",
    domainNumber: "DOMAIN 01",
    title: "Cloud & Identity Governance",
    shortTitle: "Cloud & Identity",
    badge: "Microsoft Cloud",
    description: "Full lifecycle Microsoft cloud administration, identity security, cross-tenant migrations, and serverless workflow management.",
    skills: [
      {
        name: "Microsoft 365 & Office 365 Admin",
        description: "Tenant setup, license management, exchange transport rules, shared mailboxes, and security baselines.",
        proficiency: "Mastery",
        experienceYears: "4+ yrs",
        tags: ["Exchange Online", "SharePoint", "Teams", "Security Baselines"],
      },
      {
        name: "Microsoft Azure & Azure Functions",
        description: "Azure resource management, RBAC, subscription billing, and serverless automation execution.",
        proficiency: "Intermediate",
        experienceYears: "3+ yrs",
        tags: ["Azure VMs", "Virtual Networks", "Blob Storage", "Azure Bastion"],
      },
      {
        name: "Entra ID (Azure AD) & User Management",
        description: "Directory synchronization, Conditional Access policies, MFA enforcement, and user onboarding/offboarding.",
        proficiency: "Mastery",
        experienceYears: "4+ yrs",
        tags: ["SSO", "Conditional Access", "MFA Enforcement", "PIM", "Hybrid Join"],
      },
      {
        name: "Microsoft Intune & Cloud Migration",
        description: "Device configuration profiles, compliance policies, Windows Autopilot, and on-prem to cloud server migrations.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["Windows Autopilot", "Compliance Policies", "App Deployment", "Cutover"],
      },
    ],
  },
  {
    id: "systems-virtualization",
    domainNumber: "DOMAIN 02",
    title: "Systems & Virtualization Engineering",
    shortTitle: "Systems & Virtualization",
    badge: "Core Infrastructure",
    description: "Enterprise operating systems, on-premises directory structures, hypervisors, and core networking topologies.",
    skills: [
      {
        name: "Windows Server (2016-2022) & AD DS",
        description: "Domain controller provisioning, FSMO role management, trusts, and failover clustering.",
        proficiency: "Mastery",
        experienceYears: "5+ yrs",
        tags: ["AD DS", "FSMO Roles", "Failover Cluster", "IIS"],
      },
      {
        name: "Group Policy Management (GPO)",
        description: "Enterprise security filtering, WMI targeting, desktop hardening baselines, and logon script policies.",
        proficiency: "Mastery",
        experienceYears: "5+ yrs",
        tags: ["Security Baselines", "WMI Filters", "Hardening", "Registry"],
      },
      {
        name: "Hyper-V & VMware ESXi Virtualization",
        description: "Host provisioning, virtual switch networking, snapshot schedules, and VM replication architecture.",
        proficiency: "Intermediate",
        experienceYears: "4+ yrs",
        tags: ["Hyper-V", "ESXi", "vSwitch", "VHDX Storage"],
      },
      {
        name: "Linux Administration & Core Networking",
        description: "Ubuntu/RHEL daemon management, systemd units, SSH security, DNS zones, DHCP scopes, and VLANs.",
        proficiency: "Intermediate",
        experienceYears: "3+ yrs",
        tags: ["Ubuntu / RHEL", "Systemd Units", "DNS Zones", "VLAN Routing"],
      },
    ],
  },
  {
    id: "endpoint-security",
    domainNumber: "DOMAIN 03",
    title: "Endpoint Security & RMM Fleets",
    shortTitle: "Security & RMM",
    badge: "Zero-Trust Defense",
    description: "Continuous threat hunting, automated fleet telemetry, patch orchestrations, and vulnerability mitigation.",
    skills: [
      {
        name: "Bitdefender GravityZone EDR",
        description: "Sensor fleet deployment across 1,100+ endpoints, incident investigation, and automated threat containment.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["EDR Sensors", "Anti-Phishing", "Risk Management", "Threat Hunting"],
      },
      {
        name: "Datto RMM & NinjaOne Orchestration",
        description: "Custom policy monitors, automated silent patch deployments, and remote PowerShell self-healing scripts.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["Patch Orchestration", "Telemetry Monitors", "Component Scripts", "Self-Healing"],
      },
      {
        name: "ConnectWise & Enterprise Ticketing",
        description: "SLA policy automation, service board escalation workflows, and asset lifecycle tracking.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["SLA Workflows", "Service Boards", "Escalation Routing", "Asset Audit"],
      },
      {
        name: "Esper MDM & Mobile Fleet Management",
        description: "Dedicated Android kiosk provisioning, remote pipeline deployments, and mobile compliance locks.",
        proficiency: "Intermediate",
        experienceYears: "2+ yrs",
        tags: ["Android Fleet", "Kiosk Mode", "Pipeline Deployment", "Vulnerability Patching"],
      },
    ],
  },
  {
    id: "bcdr-continuity",
    domainNumber: "DOMAIN 04",
    title: "BCDR & Data Continuity",
    shortTitle: "BCDR & Continuity",
    badge: "Data Protection",
    description: "Zero-data-loss architecture, rapid bare-metal restorations, immutable cloud replication, and SDO compliance.",
    skills: [
      {
        name: "Datto BCDR Appliances (SIRIS / ALTO)",
        description: "Appliance deployment, local instant virtualization, automated screenshot boot verification, and cloud failovers.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["Instant Virtualization", "Screenshot Verification", "Cloud Failover", "Ransomware Scan"],
      },
      {
        name: "Acronis Cyber Protect Cloud",
        description: "Cloud-to-cloud Microsoft 365 mailbox/SharePoint backups, differential disk imaging, and immutable replication.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["M365 Cloud Backup", "Disk Imaging", "Immutable Cloud", "Recovery Drills"],
      },
      {
        name: "Disaster Recovery Drills & Bare-Metal Restores",
        description: "Full tabletop recovery simulations, hardware migrations, and strict RTO / RPO SLA verification.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["Bare-Metal Restores", "RTO / RPO SLAs", "Tabletop Drills", "Failover Testing"],
      },
      {
        name: "SDO Compliance & Client Audits",
        description: "Quarterly Service Delivery compliance reports, backup integrity scores, and client technical QBR presentations.",
        proficiency: "Intermediate",
        experienceYears: "3+ yrs",
        tags: ["SDO Audits", "QBR Reports", "Risk Scoring", "Compliance Verification"],
      },
    ],
  },
  {
    id: "operations-leadership",
    domainNumber: "DOMAIN 05",
    title: "Operations & Service Desk Leadership",
    shortTitle: "Operations & Leadership",
    badge: "Leadership & SLAs",
    description: "Guiding high-performance Tier-1/2 teams, handling complex client escalations, and sustaining world-class CSAT.",
    skills: [
      {
        name: "Service Desk Co-Leadership (10+ Engineers)",
        description: "Mentoring L1 support engineers, shift scheduling, ticket queue management, and technical training.",
        proficiency: "Mastery",
        experienceYears: "3+ yrs",
        tags: ["Team Mentorship", "Queue Management", "Technical Training", "Shift Roster"],
      },
      {
        name: "Tier-2 Escalations & Root Cause Analysis",
        description: "Managing critical client escalations, leading major incident bridges, and authoring post-incident RCAs.",
        proficiency: "Mastery",
        experienceYears: "4+ yrs",
        tags: ["Tier-2 Escalations", "Major Outage Command", "RCA Authoring", "Problem Management"],
      },
      {
        name: "CSAT & SLA Performance (>90%)",
        description: "Consistently sustaining >90% CSAT while managing multi-client contractual SLA requirements.",
        proficiency: "Mastery",
        experienceYears: "4+ yrs",
        tags: [">90% CSAT", "SLA Governance", "Client Retention", "Quality Assurance"],
      },
      {
        name: "Technical SOPs & Knowledgebase Authoring",
        description: "Standardizing operational runbooks, client-specific SOP documentation, and self-service articles.",
        proficiency: "Mastery",
        experienceYears: "4+ yrs",
        tags: ["SOP Authoring", "ITIL Runbooks", "Knowledge Management", "Lifecycle Docs"],
      },
    ],
  },
  {
    id: "automation-software",
    domainNumber: "DOMAIN 06",
    title: "Automation, Agentic AI & Software",
    shortTitle: "Automation & Software",
    badge: "AI & Engineering",
    description: "Bridging systems administration with modern software development, agentic LLMs, and automated infrastructure scripting.",
    skills: [
      {
        name: "Python Scripting & System Automation",
        description: "Automated REST API pipelines, asynchronous data extraction, and cross-platform OS scripting.",
        proficiency: "Intermediate",
        experienceYears: "3+ yrs",
        tags: ["Python 3", "FastAPI", "API Integrations", "Async Scripting"],
      },
      {
        name: "Bash & PowerShell Fleet Automation",
        description: "Bulk Active Directory user provisioning, silent registry modifications, and unattended software installers.",
        proficiency: "Mastery",
        experienceYears: "4+ yrs",
        tags: ["PowerShell Core", "Bash Scripts", "Bulk AD Provisioning", "Registry Hardening"],
      },
      {
        name: "Agentic AI & LLM Tool-Calling Runtimes",
        description: "Developing autonomous tool-calling agents with schema validation, local sandboxes, and headless browser drivers.",
        proficiency: "Intermediate",
        experienceYears: "2+ yrs",
        tags: ["Hermes AI", "Function Calling", "Sandboxed Workers", "Browser Drivers"],
      },
      {
        name: "Modern Web Systems & QA Automation",
        description: "Next.js 15, React 19, Astro 5, Tailwind CSS v4, and automated end-to-end Playwright testing.",
        proficiency: "Intermediate",
        experienceYears: "2+ yrs",
        tags: ["Next.js 15", "React 19", "Astro 5", "Tailwind v4", "Playwright E2E"],
      },
    ],
  },
];
