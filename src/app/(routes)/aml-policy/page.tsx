"use client"

import React from "react";
import { motion } from "framer-motion";
import { fadeInScale, fadeInUp, slideInBottom, staggerContainer } from "@/utils/animation";


const AMLPolicy = () => {
  return (
    <div id="aml-policy" className="min-h-screen mt-14 bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#19461D]">AML / CTF Policy</h1>
          <div className="bg-gradient-to-r from-[#19461D] to-[#02C112] h-1 w-24 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            Commitment to Financial Integrity & Regulatory Compliance
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInBottom}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div 
                className="lg:w-1/3"
                variants={fadeInScale}
              >
                <div className="bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-2xl p-8 text-white text-center shadow-lg">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
                  <p className="opacity-90">Highest standards of integrity and compliance</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-2/3"
                variants={fadeInUp}
              >
                <p className="text-lg leading-relaxed mb-4">
                  Pinov is committed to maintaining the highest standards of integrity, transparency, and regulatory compliance. We actively work to prevent money laundering, terrorist financing, sanctions evasion, fraud, and other financial crimes across all jurisdictions in which we operate.
                </p>
                <div className="bg-[#19461D]/5 rounded-xl p-5 mt-4">
                  <h3 className="font-bold text-lg text-[#19461D] mb-3">Pinov operates as:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>A Money Services Business (MSB) registered with FINTRAC (Canada)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>A Digital Currency Exchange registered with AUSTRAC (Australia)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>A payment service provider under Bank of Canada's RPAA oversight</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed mt-4">
                  Our compliance framework is built on internationally recognized AML/CTF standards and regulatory requirements.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Regulatory Compliance Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-10 text-[#19461D] text-center"
            variants={fadeInUp}
          >
            Regulatory Compliance
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Canada Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
              variants={fadeInScale}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-[#19461D] to-[#02C112] p-6 text-white">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🇨🇦</span>
                  <h3 className="text-xl font-bold">Canada</h3>
                </div>
                <p className="text-sm opacity-90">FINTRAC Registered MSB</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Proceeds of Crime (PCMLTFA)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">FINTRAC regulations & directives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">OSFI sanctions requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Privacy & data protection laws</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Australia Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
              variants={fadeInScale}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-[#19461D] to-[#02C112] p-6 text-white">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🇦🇺</span>
                  <h3 className="text-xl font-bold">Australia</h3>
                </div>
                <p className="text-sm opacity-90">AUSTRAC Registered DCE</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">AML/CTF Act 2006</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">AML/CTF Rules 2007</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">AUSTRAC supervisory guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Australian sanctions laws</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Bank of Canada Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
              variants={fadeInScale}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-[#19461D] to-[#02C112] p-6 text-white">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🏦</span>
                  <h3 className="text-xl font-bold">Bank of Canada</h3>
                </div>
                <p className="text-sm opacity-90">RPAA Compliance</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Retail Payment Activities Act</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Risk management obligations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Safeguarding of funds</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full"></div>
                    </div>
                    <span className="text-sm">Operational oversight</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-8 bg-gradient-to-r from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6 border border-[#19461D]/20"
            variants={fadeInScale}
          >
            <p className="text-center font-medium text-[#19461D]">
              Where regulatory expectations differ across jurisdictions, Pinov applies the stricter standard.
            </p>
          </motion.div>
        </motion.section>

        {/* Risk-Based Approach Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-10 text-[#19461D] text-center"
            variants={fadeInUp}
          >
            Risk-Based Approach
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200"
            variants={fadeInScale}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Customer Due Diligence",
                  description: "KYC verification & identity confirmation",
                  icon: "🔍",
                  color: "from-[#19461D] to-[#02C112]"
                },
                {
                  title: "Beneficial Ownership",
                  description: "Identification for legal entities",
                  icon: "🏢",
                  color: "from-[#19461D] to-[#02C112]"
                },
                {
                  title: "Risk Screening",
                  description: "Sanctions, PEPs & high-risk indicators",
                  icon: "🚨",
                  color: "from-[#19461D] to-[#02C112]"
                },
                {
                  title: "Ongoing Monitoring",
                  description: "Continuous account & transaction review",
                  icon: "📊",
                  color: "from-[#19461D] to-[#02C112]"
                },
                {
                  title: "Enhanced Due Diligence",
                  description: "For higher-risk customers & geographies",
                  icon: "📈",
                  color: "from-[#19461D] to-[#02C112]"
                },
                {
                  title: "Compliance Framework",
                  description: "Structured AML/CTF program",
                  icon: "🏛️",
                  color: "from-[#19461D] to-[#02C112]"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-all"
                  variants={fadeInScale}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <span className="text-2xl text-white">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#19461D] text-center mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Reporting Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] text-center"
            variants={fadeInUp}
          >
            Reporting & Cooperation with Authorities
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div 
              className="lg:w-2/3"
              variants={fadeInScale}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6">
                  Where required by law, Pinov reports suspicious or legally notifiable activity to the appropriate authorities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🇨🇦</span>
                      <div>
                        <h3 className="font-bold text-lg text-[#19461D]">FINTRAC</h3>
                        <p className="text-sm text-gray-600">Financial Transactions and Reports Analysis Centre of Canada</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🇦🇺</span>
                      <div>
                        <h3 className="font-bold text-lg text-[#19461D]">AUSTRAC</h3>
                        <p className="text-sm text-gray-600">Australian Transaction Reports and Analysis Centre</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="text-center font-medium text-[#19461D]">
                    Pinov does not disclose the existence of such reports to customers or third parties.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/3"
              variants={fadeInScale}
            >
              <div className="bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4">Legal Compliance</h3>
                <p className="mb-4">
                  In addition to financial intelligence units, Pinov cooperates with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Law enforcement agencies</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Sanctions authorities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>Regulatory bodies</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Third-Party & Privacy Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Third-Party Compliance */}
            <motion.div 
              variants={fadeInScale}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#19461D]">Third-Party & Partner Compliance</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  All partners, agents, and service providers engaged by Pinov are expected to meet appropriate AML/CTF and sanctions-compliance standards.
                </p>
                <div className="bg-gradient-to-r from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-5">
                  <h3 className="font-semibold text-[#19461D] mb-2">Due Diligence Process</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span className="text-sm">Comprehensive vendor risk assessments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span className="text-sm">Ongoing reviews and monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span className="text-sm">Contractual compliance obligations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Privacy & Data Protection */}
            <motion.div 
              variants={fadeInScale}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔒</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#19461D]">Privacy & Data Protection</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Customer information is handled in accordance with applicable privacy legislation and Pinov's Privacy Policy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-3 h-3 bg-[#02C112] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#19461D]">Technical Controls</h4>
                      <p className="text-sm text-gray-600">Advanced encryption and security protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-3 h-3 bg-[#02C112] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#19461D]">Administrative Safeguards</h4>
                      <p className="text-sm text-gray-600">Strict access controls and policies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#02C112]/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-3 h-3 bg-[#02C112] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#19461D]">Security Measures</h4>
                      <p className="text-sm text-gray-600">Comprehensive protection of sensitive data</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Continuous Improvement Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] text-center"
            variants={fadeInUp}
          >
            Commitment to Continuous Improvement
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-r from-[#19461D] to-[#02C112] rounded-2xl shadow-2xl p-10 text-white"
            variants={fadeInScale}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">Regular Reviews</h3>
                <p className="text-sm opacity-90">
                  Pinov's AML/CTF program is reviewed and updated regularly to reflect regulatory developments
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Risk Adaptation</h3>
                <p className="text-sm opacity-90">
                  Updated to address emerging financial crime risks and evolving industry best practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-3">Employee Training</h3>
                <p className="text-sm opacity-90">
                  Comprehensive training provided to ensure awareness, accountability, and compliance
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInBottom}
        >
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#19461D] mb-4">Contact — Compliance Enquiries</h2>
              <p className="text-lg text-gray-600">For compliance-related enquiries, please contact:</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <motion.div 
                className="text-center"
                variants={fadeInScale}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-white">✉️</span>
                </div>
                <h3 className="font-bold text-xl text-[#19461D] mb-2">Email</h3>
                <a 
                  href="mailto:compliance@pinovx.com" 
                  className="text-lg font-medium text-[#02C112] hover:underline hover:text-[#19461D] transition-colors"
                >
                  compliance@pinovx.com
                </a>
              </motion.div>
              
              <div className="hidden lg:block">
                <div className="w-1 h-24 bg-gradient-to-b from-[#19461D] to-[#02C112] mx-auto"></div>
              </div>
              
              <motion.div 
                className="text-center"
                variants={fadeInScale}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl text-white">🏢</span>
                </div>
                <h3 className="font-bold text-xl text-[#19461D] mb-2">Compliance Office</h3>
                <p className="text-lg font-medium text-[#19461D]">Pinov — Compliance Office</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10 bg-gradient-to-r from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6 text-center"
              variants={fadeInScale}
            >
              <p className="font-medium text-[#19461D]">
                We are committed to maintaining the highest standards of financial integrity and regulatory compliance across all our operations.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-gray-600">
            This AML/CTF Policy is reviewed regularly and updated as required by changing regulations and risk assessments.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AMLPolicy;