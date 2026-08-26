export interface Dossier {
  name: string;
  preferredName: string;
  role: string;
  headline: string;
  location: string;
  timezone: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  resumePdfUrl: string;
  statusBadge: string;
  yearsOfExperience: string;
  metrics: {
    endpointsManaged: string;
    endpointsNum: number;
    edrProtected: string;
    edrNum: number;
    projectsDelivered: string;
    projectsNum: number;
    csatRating: string;
    csatNum: number;
  };
  shortBio: string;
  fullBio: string;
  leadershipQuote: string;
  education: {
    degree: string;
    institution: string;
    institutionShort: string;
    year: string;
    highlights: string[];
  };
}

export const dossier: Dossier = {
  name: "Robiul Hasan",
  preferredName: "Robiul",
  role: "IT Infrastructure & Systems Support Engineer L2 / Service Desk Co-Leader",
  headline: "Architecting Resilient Enterprise Infrastructure, Endpoint Security & Autonomous Systems",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "rhasan229@gmail.com",
  phone: "+8801843212123",
  whatsappUrl: "https://wa.me/8801843212123",
  github: "https://github.com/Daddy-Ousen",
  linkedin: "https://linkedin.com/in/robiul-hasan-401296137",
  portfolioUrl: "https://rhasan.pro",
  resumePdfUrl: "/Robiul_Hasan_CV.pdf",
  statusBadge: "SYSTEMS OPERATIONAL • L2 CO-LEADER",
  yearsOfExperience: "5+ Years",
  metrics: {
    endpointsManaged: "2,500+",
    endpointsNum: 2500,
    edrProtected: "1,100+",
    edrNum: 1100,
    projectsDelivered: "25+",
    projectsNum: 25,
    csatRating: "90%+",
    csatNum: 94,
  },
  shortBio: "L2 Infrastructure & Systems Support Engineer and Service Desk Co-Leader at Techants Solutions Pty Ltd (MSP). Managing 2,500+ endpoints, 1,100+ Bitdefender EDR security assets, and orchestrating Datto/Acronis BCDR data continuity for global enterprise clients.",
  fullBio: "With over 5 years in managed service provider (MSP) environments and enterprise IT operations, Robiul combines battle-tested systems engineering with a passion for software automation and agentic AI. At Techants Solutions, he co-leads a 10+ member service desk, handles Tier-2 escalations, deploys zero-trust endpoint security via Microsoft Intune and Bitdefender GravityZone, and guarantees 99.9% data protection with Datto BCDR appliances.",
  leadershipQuote: "True engineering excellence is not just solving incidents quickly; it's building immutable infrastructure and mentoring teams so recurring incidents cease to exist.",
  education: {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Bangladesh University of Professionals (BUP)",
    institutionShort: "BUP",
    year: "Graduated 2022",
    highlights: [
      "Strategic operations and organizational systems management",
      "Technology process optimization & analytical data modeling",
      "Bridged business strategy with scalable enterprise IT solutions",
    ],
  },
};
