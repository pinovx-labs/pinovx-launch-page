


// FILE: components/privacy-policy/components/TableOfContents.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInScale } from "@/utils/animation";
interface SectionBadgeProps {
  number: number;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ number }) => (
  <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
    {number}
  </div>
);



interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, title, items }) => (
  <motion.div 
    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
    variants={fadeInScale}
  >
    <div className="w-12 h-12 bg-gradient-to-br from-[#19461D]/10 to-[#02C112]/10 rounded-full flex items-center justify-center mb-4">
      <span className="text-xl" role="img" aria-label={title}>{icon}</span>
    </div>
    <h3 className="font-bold text-lg text-[#19461D] mb-3">{title}</h3>
    <ul className="space-y-2 text-sm text-gray-600">
      {items.map((item, idx) => (
        <li key={idx}>• {item}</li>
      ))}
    </ul>
  </motion.div>
);




interface UsageCardProps {
  icon: string;
  title: string;
  items: string[];
}

export const UsageCard: React.FC<UsageCardProps> = ({ icon, title, items }) => (
  <motion.div 
    className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
    variants={fadeInScale}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
        <span className="text-white text-lg" role="img" aria-label={title}>{icon}</span>
      </div>
      <h3 className="font-bold text-xl text-[#19461D]">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);



interface SafeguardItemProps {
  title: string;
  description: string;
}

export const SafeguardItem: React.FC<SafeguardItemProps> = ({ title, description }) => (
  <div className="flex items-start">
    <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <span className="text-white text-sm">✓</span>
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);



interface Section {
  id: string;
  title: string;
  number: number;
}

interface TableOfContentsProps {
  sections: Section[];
  showMobile: boolean;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, showMobile }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      {/* <div className="hidden md:block fixed left-0 top-32 w-64 bg-white rounded-2xl shadow-xl p-6 border border-gray-200 max-h-[calc(100vh-200px)] overflow-y-auto z-10">
        <h3 className="font-bold text-lg text-[#19461D] mb-4">Table of Contents</h3>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                    activeSection === section.id
                      ? "bg-[#02C112] text-white font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {section.number > 0 && `${section.number}. `}{section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {showMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mb-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200 overflow-hidden"
          >
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        activeSection === section.id
                          ? "bg-[#02C112] text-white font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {section.number > 0 && `${section.number}. `}{section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-50"
          aria-label="Back to top"
        >
          <span className="text-xl">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

