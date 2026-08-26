export interface ExperienceItem {
  id: string;
  company: string;
  companyType: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  isCurrent: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "techants-solutions",
    company: "Techants Solutions Pty Ltd",
    companyType: "Managed Services Provider (MSP)",
    role: "L2 Support Engineer & Service Desk Co-Leader",
    period: "Oct 2022 – Present",
    startDate: "2022-10",
    endDate: "Present",
    location: "Dhaka (Global Operations)",
    summary: "Leading technical escalations, enterprise infrastructure rollouts, and endpoint security operations across international MSP client fleets.",
    highlights: [
      "Co-leads and mentors a 10+ member multi-tiered service desk engineering team, orchestrating shift coverage, queue prioritization, and Tier-2 incident escalations.",
      "Maintains continuous health, security patch compliance, and configuration baseline across 2,500+ endpoints monthly.",
      "Deploys and administers 1,100+ Bitdefender GravityZone EDR agents, mitigating zero-day threats, phishing campaigns, and malware vectors.",
      "Delivered 25+ enterprise IT infrastructure projects including M365 tenant migrations, Intune MDM zero-touch enrollments, and Active Directory consolidations.",
      "Architects quarterly Service Delivery Optimization (SDO) compliance audits and validates immutable backup pipelines using Datto BCDR appliances and Acronis Cyber Protect.",
      "Sustained >90% Customer Satisfaction (CSAT) rating and tight SLA turnaround across multi-client MSP contracts.",
    ],
    metrics: [
      { label: "Endpoints Managed", value: "2,500+" },
      { label: "EDR Assets Secured", value: "1,100+" },
      { label: "Projects Delivered", value: "25+" },
      { label: "Sustained CSAT", value: "90%+" },
      { label: "Team Mentored", value: "10+ Engineers" },
    ],
    technologies: [
      "Microsoft 365",
      "Microsoft Intune",
      "Entra ID",
      "Windows Server",
      "Active Directory",
      "Bitdefender EDR",
      "Datto BCDR",
      "Acronis Cyber Protect",
      "Datto RMM",
      "NinjaOne",
      "PowerShell",
      "Bash",
      "Python",
    ],
    isCurrent: true,
  },
  {
    id: "cobait-dhaka",
    company: "Cobait Dhaka",
    companyType: "IT Services & Infrastructure Consulting",
    role: "Jr. Support Engineer",
    period: "2021 – 2022",
    startDate: "2021-01",
    endDate: "2022-09",
    location: "Dhaka, Bangladesh",
    summary: "Delivered first-response systems triage, server maintenance, user identity provisioning, and automated backup verifications.",
    highlights: [
      "Resolved 1,000+ support tickets encompassing hardware diagnostics, networking anomalies, VPN tunneling, and OS errors.",
      "Administered Windows Server environments, Active Directory user provisioning, Security Groups, and Group Policy Objects (GPOs).",
      "Performed daily backup integrity checks, disaster recovery test simulations, and bare-metal restore drills.",
      "Streamlined onboarding/offboarding workflows, cutting provisioning turnaround time by 35%.",
    ],
    metrics: [
      { label: "Tickets Resolved", value: "1,000+" },
      { label: "Provisioning Speedup", value: "+35%" },
      { label: "Backup Integrity", value: "99.8%" },
    ],
    technologies: [
      "Windows Server",
      "Active Directory",
      "Group Policy (GPO)",
      "DNS / DHCP",
      "Veeam Backup",
      "Office 365",
      "VPN Config",
      "Hardware Diagnostics",
    ],
    isCurrent: false,
  },
  {
    id: "aqsbd",
    company: "AQSBD",
    companyType: "Enterprise Operations",
    role: "IT Executive",
    period: "2020 – 2021",
    startDate: "2020-01",
    endDate: "2021-01",
    location: "Dhaka, Bangladesh",
    summary: "Spearheaded digital transformation initiatives, standardized IT Standard Operating Procedures (SOPs), and modernized internal communications.",
    highlights: [
      "Drafted comprehensive infrastructure Standard Operating Procedures (SOPs) and disaster escalation matrices.",
      "Digitized manual internal workflows, establishing secure cloud-based document management and communications.",
      "Supervised local LAN/WLAN cabling, network switches, biometric access control, and hardware asset lifecycle management.",
    ],
    metrics: [
      { label: "SOPs Authored", value: "15+ Guides" },
      { label: "Downtime Reduced", value: "28%" },
    ],
    technologies: [
      "LAN/WLAN Networking",
      "Hardware Lifecycle",
      "SOP Documentation",
      "Biometric Systems",
      "Google Workspace",
      "Windows 10/11",
    ],
    isCurrent: false,
  },
];
