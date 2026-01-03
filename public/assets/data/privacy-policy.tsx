// FILE: utils/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const slideInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// FILE: constants/privacy-data.ts
export const infoCategories = [
  {
    icon: "👤",
    title: "Personal Identification",
    items: [
      "Full name and date of birth",
      "Government-issued ID documents",
      "Residential address proof",
      "Nationality information"
    ]
  },
  {
    icon: "📧",
    title: "Contact Information",
    items: [
      "Email address",
      "Phone number",
      "Mailing address"
    ]
  },
  {
    icon: "💰",
    title: "Financial Information",
    items: [
      "Bank account details",
      "Transaction history",
      "Wallet addresses",
      "Source of funds"
    ]
  },
  {
    icon: "💻",
    title: "Technical Information",
    items: [
      "IP address & device IDs",
      "Browser & OS data",
      "Access logs",
      "Cookies & tracking"
    ]
  },
  {
    icon: "✅",
    title: "Verification & Compliance",
    items: [
      "Identity verification results",
      "Due diligence documentation",
      "Transaction monitoring data",
      "Support communications"
    ]
  }
];

export const usageCategories = [
  {
    icon: "⚙️",
    title: "Service Provision",
    items: [
      "Processing digital currency exchange transactions",
      "Managing accounts and providing customer support",
      "Facilitating deposits, withdrawals, and transfers",
      "Providing transaction confirmations and statements"
    ]
  },
  {
    icon: "⚖️",
    title: "Legal & Regulatory Compliance",
    items: [
      "Verifying identity (KYC requirements)",
      "Complying with AML/CTF obligations",
      "Meeting FINTRAC & AUSTRAC reporting requirements",
      "Responding to lawful requests from authorities"
    ]
  },
  {
    icon: "🛡️",
    title: "Security & Fraud Prevention",
    items: [
      "Detecting and preventing fraudulent activities",
      "Monitoring suspicious transactions",
      "Protecting against unauthorized access",
      "Maintaining platform integrity"
    ]
  },
  {
    icon: "📈",
    title: "Service Improvement",
    items: [
      "Enhancing platform functionality and user experience",
      "Conducting research and analytics",
      "Sending service updates and notifications",
      "Providing customer support"
    ]
  }
];

export const privacyRights = [
  { title: "Right to Access", desc: "Request a copy of your personal information", icon: "📄" },
  { title: "Right to Correction", desc: "Request correction of inaccurate or incomplete information", icon: "✏️" },
  { title: "Right to Deletion", desc: "Request deletion of your information (subject to legal requirements)", icon: "🗑️" },
  { title: "Right to Object", desc: "Object to certain processing activities, including direct marketing", icon: "🚫" },
  { title: "Right to Restriction", desc: "Request that we limit how we use your information", icon: "⏸️" },
  { title: "Right to Portability", desc: "Request data in a structured, commonly used format", icon: "📤" },
  { title: "Right to Withdraw Consent", desc: "Withdraw consent for processing based on consent", icon: "↩️" },
  { title: "Right to Lodge Complaint", desc: "File a complaint with privacy regulatory authorities", icon: "📋" }
];

export const technicalSafeguards = [
  { title: "Encryption", description: "Industry-standard SSL/TLS encryption for all data transmission and encrypted storage" },
  { title: "Multi-Factor Authentication", description: "Optional MFA for enhanced account security" },
  { title: "Regular Security Testing", description: "Continuous vulnerability assessments and penetration testing" },
  { title: "Secure Data Centers", description: "Physical and environmental controls with secure infrastructure" }
];

export const organizationalSafeguards = [
  { title: "Access Controls", description: "Strict data access limited to authorized personnel only" },
  { title: "Employee Training", description: "Comprehensive data protection and confidentiality training programs" },
  { title: "Confidentiality Agreements", description: "Binding agreements with all employees and service providers" },
  { title: "Incident Response", description: "Established procedures for security incidents and breach notifications" }
];

export const retentionPeriods = [
  { type: "Account Information", period: "Duration of account + 7 years after closure" },
  { type: "Transaction Records", period: "Minimum 7 years (AML/CTF requirement)" },
  { type: "Identity Verification Documents", period: "Minimum 7 years from end of relationship" },
  { type: "Communications Records", period: "Minimum 7 years" },
  { type: "Marketing Preferences", period: "Until consent withdrawal or cessation of marketing" }
];

export const cookieTypes = [
  {
    title: "Essential Cookies",
    description: "Necessary for website functionality and security. These cookies cannot be disabled.",
    examples: ["Session management", "Security tokens", "Load balancing"]
  },
  {
    title: "Performance Cookies",
    description: "Help us understand how visitors use our website to improve performance.",
    examples: ["Page load times", "Error tracking", "Usage analytics"]
  },
  {
    title: "Functional Cookies",
    description: "Remember your preferences and settings for a better experience.",
    examples: ["Language preferences", "Display settings", "Remembered choices"]
  },
  {
    title: "Analytics Cookies",
    description: "Collect information about website usage and performance metrics.",
    examples: ["Google Analytics", "User behavior", "Traffic sources"]
  }
];


export const sections = [
  { id: "introduction", title: "Introduction", number: 0 },
  { id: "information-collection", title: "Information We Collect", number: 1 },
  { id: "information-usage", title: "How We Use Your Information", number: 2 },
  { id: "legal-basis", title: "Legal Basis for Processing", number: 3 },
  { id: "data-protection", title: "How We Protect Your Information", number: 4 },
  { id: "information-sharing", title: "Sharing Your Information", number: 5 },
  { id: "international-transfers", title: "International Data Transfers", number: 6 },
  { id: "privacy-rights", title: "Your Privacy Rights", number: 7 },
  { id: "data-retention", title: "Data Retention", number: 8 },
  { id: "cookies", title: "Cookies and Tracking Technologies", number: 9 },
  { id: "childrens-privacy", title: "Children's Privacy", number: 10 },
  { id: "marketing", title: "Marketing Communications", number: 11 },
  { id: "third-party-links", title: "Third-Party Links", number: 12 },
  { id: "policy-changes", title: "Changes to This Privacy Policy", number: 13 },
  { id: "contact", title: "Contact & Regulatory Information", number: 14 }
];