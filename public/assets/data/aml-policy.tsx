


// FILE: constants/aml-data.ts
export const regulatoryBodies = [
  {
    country: "Canada",
    flag: "🇨🇦",
    title: "FINTRAC Registered MSB",
    regulations: [
      "Proceeds of Crime (PCMLTFA)",
      "FINTRAC regulations & directives",
      "OSFI sanctions requirements",
      "Privacy & data protection laws"
    ]
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    title: "AUSTRAC Registered DCE",
    regulations: [
      "AML/CTF Act 2006",
      "AML/CTF Rules 2007",
      "AUSTRAC supervisory guidance",
      "Australian sanctions laws"
    ]
  },
  {
    country: "Bank of Canada",
    flag: "🏦",
    title: "RPAA Compliance",
    regulations: [
      "Retail Payment Activities Act",
      "Risk management obligations",
      "Safeguarding of funds",
      "Operational oversight"
    ]
  }
];

export const riskBasedApproach = [
  {
    title: "Customer Due Diligence",
    description: "KYC verification & identity confirmation",
    icon: "🔍",
  },
  {
    title: "Beneficial Ownership",
    description: "Identification for legal entities",
    icon: "🏢",
  },
  {
    title: "Risk Screening",
    description: "Sanctions, PEPs & high-risk indicators",
    icon: "🚨",
  },
  {
    title: "Ongoing Monitoring",
    description: "Continuous account & transaction review",
    icon: "📊",
  },
  {
    title: "Enhanced Due Diligence",
    description: "For higher-risk customers & geographies",
    icon: "📈",
  },
  {
    title: "Compliance Framework",
    description: "Structured AML/CTF program",
    icon: "🏛️",
  }
];

export const reportingAuthorities = [
  {
    flag: "🇨🇦",
    name: "FINTRAC",
    fullName: "Financial Transactions and Reports Analysis Centre of Canada"
  },
  {
    flag: "🇦🇺",
    name: "AUSTRAC",
    fullName: "Australian Transaction Reports and Analysis Centre"
  }
];

export const cooperationEntities = [
  "Law enforcement agencies",
  "Sanctions authorities",
  "Regulatory bodies"
];

export const improvementPillars = [
  {
    icon: "🔄",
    title: "Regular Reviews",
    description: "Pinov's AML/CTF program is reviewed and updated regularly to reflect regulatory developments"
  },
  {
    icon: "📊",
    title: "Risk Adaptation",
    description: "Updated to address emerging financial crime risks and evolving industry best practices"
  },
  {
    icon: "👥",
    title: "Employee Training",
    description: "Comprehensive training provided to ensure awareness, accountability, and compliance"
  }
];

export const pinovOperations = [
  "A Money Services Business (MSB) registered with FINTRAC (Canada)",
  "A Digital Currency Exchange registered with AUSTRAC (Australia)",
  "A payment service provider under Bank of Canada's RPAA oversight"
];

export const privacyControls = [
  {
    title: "Technical Controls",
    description: "Advanced encryption and security protocols"
  },
  {
    title: "Administrative Safeguards",
    description: "Strict access controls and policies"
  },
  {
    title: "Security Measures",
    description: "Comprehensive protection of sensitive data"
  }
];

export const vendorDueDiligence = [
  "Comprehensive vendor risk assessments",
  "Ongoing reviews and monitoring",
  "Contractual compliance obligations"
];