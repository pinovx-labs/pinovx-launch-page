
"use client"
import React from "react";
import { motion } from "framer-motion";
import { fadeInScale, fadeInUp, slideInBottom, staggerContainer } from "@/utils/animation";

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="min-h-screen  mt-14 bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#19461D] to-[#02C112] rounded-2xl shadow-2xl overflow-hidden mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInBottom}
        >
          <div className="p-8 md:p-10 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-sm font-semibold">Effective Date: January 2, 2026</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-sm font-semibold">Pinov Inc. & Pinov Pty Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
            <div className="border-l-4 border-[#02C112] pl-6">
              <h2 className="text-2xl font-bold mb-6 text-[#19461D]">Introduction</h2>
              <p className="text-lg leading-relaxed mb-4">
                At Pinov Inc, protecting your privacy and ensuring a secure user experience are our top priorities. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you engage with our digital currency exchange services or visit our website or mobile application.
              </p>
              <p className="text-lg leading-relaxed">
                By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Main Content Sections */}
        <div className="space-y-16">
          {/* Section 1: Information We Collect */}
          <motion.section 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
              1
            </div>
            <div className="ml-8 md:ml-12">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
                variants={fadeInUp}
              >
                Information We Collect
              </motion.h2>
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                variants={fadeInScale}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <p className="mb-6 text-lg">
                  We collect information necessary to provide secure and compliant digital currency exchange services:
                </p>
                
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={staggerContainer}
                >
                  {/* Personal Identification */}
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
                    variants={fadeInScale}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#19461D]/10 to-[#02C112]/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl text-[#19461D]">👤</span>
                    </div>
                    <h3 className="font-bold text-lg text-[#19461D] mb-2">Personal Identification</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Full name and date of birth</li>
                      <li>• Government-issued ID documents</li>
                      <li>• Residential address proof</li>
                      <li>• Nationality information</li>
                    </ul>
                  </motion.div>
                  
                  {/* Financial Information */}
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
                    variants={fadeInScale}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#19461D]/10 to-[#02C112]/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl text-[#19461D]">💰</span>
                    </div>
                    <h3 className="font-bold text-lg text-[#19461D] mb-2">Financial Information</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Bank account details</li>
                      <li>• Transaction history</li>
                      <li>• Wallet addresses</li>
                      <li>• Source of funds</li>
                    </ul>
                  </motion.div>
                  
                  {/* Technical Information */}
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
                    variants={fadeInScale}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#19461D]/10 to-[#02C112]/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl text-[#19461D]">💻</span>
                    </div>
                    <h3 className="font-bold text-lg text-[#19461D] mb-2">Technical Information</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• IP address & device IDs</li>
                      <li>• Browser & OS data</li>
                      <li>• Access logs</li>
                      <li>• Cookies & tracking</li>
                    </ul>
                  </motion.div>



                  
                  {/* Verification & Compliance Information */}
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
                    variants={fadeInScale}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#19461D]/10 to-[#02C112]/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl text-[#19461D]">💻</span>
                    </div>
                    <h3 className="font-bold text-lg text-[#19461D] mb-2">Verification and Compliance Information</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Identity verification results
</li>
                      <li>• Enhanced due diligence documentation
Browser & OS data</li>
                      <li>• Transaction monitoring data
</li>
                      <li>• Records of communications with our support team
</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 2: How We Use Your Information */}
          <motion.section 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
              2
            </div>
            <div className="ml-8 md:ml-12">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
                variants={fadeInUp}
              >
                How We Use Your Information
              </motion.h2>
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
              >
                {/* Service Provision */}
                <motion.div 
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInScale}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-lg">⚙️</span>
                    </div>
                    <h3 className="font-bold text-xl text-[#19461D]">Service Provision</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Processing digital currency exchange transactions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Managing accounts and providing customer support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Facilitating deposits, withdrawals, and transfers</span>
                    </li>
                  </ul>
                </motion.div>
                
                {/* Legal Compliance */}
                <motion.div 
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInScale}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-lg">⚖️</span>
                    </div>
                    <h3 className="font-bold text-xl text-[#19461D]">Legal Compliance</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>KYC verification requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>AML/CTF obligations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>FINTRAC & AUSTRAC reporting</span>
                    </li>
                  </ul>
                </motion.div>
                
                {/* Security & Fraud Prevention */}
                <motion.div 
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInScale}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-lg">🛡️</span>
                    </div>
                    <h3 className="font-bold text-xl text-[#19461D]">Security & Fraud Prevention</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Detecting and preventing fraudulent activities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Monitoring suspicious transactions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Protecting against unauthorized access</span>
                    </li>
                  </ul>
                </motion.div>
                
                {/* Service Improvement */}
                <motion.div 
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInScale}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-lg">📈</span>
                    </div>
                    <h3 className="font-bold text-xl text-[#19461D]">Service Improvement</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Enhancing platform functionality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Conducting research and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3"></div>
                      <span>Sending service updates and notifications</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 3: How We Protect Your Information */}
          <motion.section 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
              3
            </div>
            <div className="ml-8 md:ml-12">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
                variants={fadeInUp}
              >
                How We Protect Your Information
              </motion.h2>
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
              >
                {/* Technical Safeguards */}
                <motion.div 
                  className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-2xl p-8 border border-[#19461D]/20"
                  variants={fadeInScale}
                >
                  <h3 className="font-bold text-2xl mb-6 text-[#19461D]">Technical Safeguards</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Encryption</h4>
                        <p className="text-gray-600 text-sm">Industry-standard SSL/TLS encryption for all data transmission</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Multi-Factor Authentication</h4>
                        <p className="text-gray-600 text-sm">Optional MFA for enhanced account security</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Regular Security Testing</h4>
                        <p className="text-gray-600 text-sm">Continuous vulnerability assessments and penetration testing</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Organizational Safeguards */}
                <motion.div 
                  className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-2xl p-8 border border-[#19461D]/20"
                  variants={fadeInScale}
                >
                  <h3 className="font-bold text-2xl mb-6 text-[#19461D]">Organizational Safeguards</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Access Controls</h4>
                        <p className="text-gray-600 text-sm">Strict data access limited to authorized personnel only</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Employee Training</h4>
                        <p className="text-gray-600 text-sm">Comprehensive data protection and confidentiality training</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Incident Response</h4>
                        <p className="text-gray-600 text-sm">Procedures for security incidents and breach notifications</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 4: Your Privacy Rights */}
          <motion.section 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
              4
            </div>
            <div className="ml-8 md:ml-12">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
                variants={fadeInUp}
              >
                Your Privacy Rights
              </motion.h2>
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8"
                variants={fadeInScale}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Right to Access", desc: "Request a copy of your personal information", icon: "📄" },
                    { title: "Right to Correction", desc: "Request correction of inaccurate information", icon: "✏️" },
                    { title: "Right to Deletion", desc: "Request deletion of your information", icon: "🗑️" },
                    { title: "Right to Object", desc: "Object to certain processing activities", icon: "🚫" },
                    { title: "Right to Portability", desc: "Request data in structured format", icon: "📤" },
                    { title: "Right to Withdraw Consent", desc: "Withdraw consent for processing", icon: "↩️" },
                  ].map((right, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#02C112] transition-colors"
                      variants={fadeInScale}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl mb-4">{right.icon}</div>
                      <h3 className="font-bold text-lg text-[#19461D] mb-2">{right.title}</h3>
                      <p className="text-sm text-gray-600">{right.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="mt-8 bg-gradient-to-r from-[#19461D]/10 to-[#02C112]/10 rounded-xl p-6 border border-[#02C112]/30"
                  variants={fadeInScale}
                >
                  <p className="text-center text-gray-700">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:compliance@pinovx.com" className="text-[#19461D] font-semibold hover:underline">
                      compliance@pinovx.com
                    </a>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Section 5: Contact & Regulatory Info */}
          <motion.section 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="absolute -left-4 md:-left-8 top-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
              5
            </div>
            <div className="ml-8 md:ml-12">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
                variants={fadeInUp}
              >
                Contact & Regulatory Information
              </motion.h2>
              <motion.div 
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200"
                variants={fadeInScale}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-bold text-2xl mb-6 text-[#19461D] flex items-center">
                      <span className="mr-3">📞</span>
                      Contact Us
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg text-[#19461D] mb-2">General Inquiries & Support</h4>
                        <p className="text-gray-700">
                          Email:{" "}
                          <a href="mailto:support@pinovx.com" className="text-[#02C112] hover:underline font-medium">
                            support@pinovx.com
                          </a>
                        </p>
                        <p className="text-gray-700 mt-1">Phone: +14376960800</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-[#19461D] mb-2">Privacy & Compliance</h4>
                        <p className="text-gray-700">
                          Email:{" "}
                          <a href="mailto:compliance@pinovx.com" className="text-[#02C112] hover:underline font-medium">
                            compliance@pinovx.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Office Locations */}
                  <div>
                    <h3 className="font-bold text-2xl mb-6 text-[#19461D] flex items-center">
                      <span className="mr-3">📍</span>
                      Office Locations
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-[#19461D]/5 rounded-xl p-5">
                        <h4 className="font-semibold text-lg text-[#19461D] mb-2">Canada Office</h4>
                        <p className="text-gray-700">180 Northfield Dr W</p>
                        <p className="text-gray-700">Waterloo, ON N2L 0C7</p>
                        <p className="text-gray-700">Canada</p>
                        <p className="text-sm text-gray-600 mt-2">
                          FINTRAC MSB: C100000263
                        </p>
                      </div>
                      <div className="bg-[#19461D]/5 rounded-xl p-5">
                        <h4 className="font-semibold text-lg text-[#19461D] mb-2">Australia Office</h4>
                        <p className="text-gray-700">232 Unley Rd</p>
                        <p className="text-gray-700">Unley SA 5061</p>
                        <p className="text-gray-700">Australia</p>
                        <p className="text-sm text-gray-600 mt-2">
                          AUSTRAC DCE: DCE100884196-001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Last Updated Footer */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="inline-block bg-gradient-to-r from-[#19461D] to-[#02C112] text-white font-semibold py-3 px-8 rounded-full shadow-lg">
            Last Updated: January 2, 2026
          </div>
          <p className="text-gray-600 mt-4">
            This Privacy Policy is regularly reviewed and updated to ensure compliance with evolving regulations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;