// FILE: components/aml-policy/components/RegulatoryCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { fadeInScale, fadeInUp } from "@/utils/animation";

interface RegulatoryCardProps {
  country: string;
  flag: string;
  title: string;
  regulations: string[];
}

export const RegulatoryCard: React.FC<RegulatoryCardProps> = ({
  country,
  flag,
  title,
  regulations
}) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
    variants={fadeInScale}
    whileHover={{ y: -5 }}
  >
    <div className="bg-gradient-to-r from-[#19461D] to-[#02C112] p-6 text-white">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3" role="img" aria-label={country}>{flag}</span>
        <h3 className="text-xl font-bold">{country}</h3>
      </div>
      <p className="text-sm opacity-90">{title}</p>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {regulations.map((regulation, idx) => (
          <li key={idx} className="flex items-start">
            <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
            </div>
            <span className="text-sm">{regulation}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);



interface RiskCardProps {
  title: string;
  description: string;
  icon: string;
}

export const RiskCard: React.FC<RiskCardProps> = ({ title, description, icon }) => (
  <motion.div 
    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-all"
    variants={fadeInScale}
    whileHover={{ scale: 1.03 }}
  >
    <div className="w-14 h-14 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mb-4 mx-auto">
      <span className="text-2xl" role="img" aria-label={title}>{icon}</span>
    </div>
    <h3 className="font-bold text-lg text-[#19461D] text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center text-sm">{description}</p>
  </motion.div>
);


interface AuthorityCardProps {
  flag: string;
  name: string;
  fullName: string;
}

export const AuthorityCard: React.FC<AuthorityCardProps> = ({ flag, name, fullName }) => (
  <div className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6">
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-4" role="img" aria-label={name}>{flag}</span>
      <div>
        <h3 className="font-bold text-lg text-[#19461D]">{name}</h3>
        <p className="text-sm text-gray-600">{fullName}</p>
      </div>
    </div>
  </div>
);

interface ControlItemProps {
  title: string;
  description: string;
}

export const ControlItem: React.FC<ControlItemProps> = ({ title, description }) => (
  <div className="flex items-start">
    <div className="w-8 h-8 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <div className="w-3 h-3 bg-[#02C112] rounded-full"></div>
    </div>
    <div>
      <h4 className="font-semibold text-[#19461D]">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);


interface SectionHeaderProps {
  title: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, centered = true }) => (
  <motion.h2 
    className={`text-2xl md:text-3xl font-bold mb-10 text-[#19461D] ${centered ? 'text-center' : ''}`}
    variants={fadeInUp}
  >
    {title}
  </motion.h2>
);

interface BulletListProps {
  items: string[];
  color?: string;
}

export const BulletList: React.FC<BulletListProps> = ({ items, color = "bg-[#02C112]" }) => (
  <ul className="space-y-2">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <div className={`w-2 h-2 ${color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
        <span className="text-sm">{item}</span>
      </li>
    ))}
  </ul>
);


interface InfoBoxProps {
  children: React.ReactNode;
  variant?: "default" | "warning" | "success" | "info";
}

export const InfoBox: React.FC<InfoBoxProps> = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-gradient-to-r from-[#19461D]/5 to-[#02C112]/5 border-[#19461D]/20",
    warning: "bg-yellow-50 border-yellow-200",
    success: "bg-green-50 border-green-200",
    info: "bg-blue-50 border-blue-200"
  };

  return (
    <motion.div 
      className={`rounded-xl p-6 border ${variants[variant]}`}
      variants={fadeInScale}
    >
      {children}
    </motion.div>
  );
};

export default InfoBox;