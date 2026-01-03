// FILE: components/privacy-policy/sections/CookiesTracking.tsx
import React from "react";
import { motion } from "framer-motion";
import { fadeInScale, fadeInUp, staggerContainer } from "@/utils/animation";
import { SectionBadge } from "./SectionBadge";
import { cookieTypes } from "../../../../public/assets/data/privacy-policy";


export const CookiesTracking: React.FC = () => (
  <motion.section 
    id="cookies"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={9} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Cookies and Tracking Technologies
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="mb-6 text-lg">
          Our website and mobile application use cookies and similar technologies to enhance user experience and improve our services.
        </p>
        
        <h3 className="font-bold text-xl text-[#19461D] mb-4">Types of Cookies We Use:</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {cookieTypes.map((cookie, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-[#19461D] mb-2">{cookie.title}</h4>
              <p className="text-gray-700 mb-3">{cookie.description}</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-1">Examples:</p>
                <ul className="space-y-1">
                  {cookie.examples.map((example, i) => (
                    <li key={i}>• {example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-[#02C112] pl-6">
            <h3 className="font-bold text-xl text-[#19461D] mb-3">Managing Cookies</h3>
            <p className="text-gray-700 mb-2">
              You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies.
            </p>
            <p className="text-sm text-gray-600 italic">
              Please note that disabling certain cookies may affect website functionality and your ability to access certain features.
            </p>
          </div>

          <div className="border-l-4 border-[#02C112] pl-6">
            <h3 className="font-bold text-xl text-[#19461D] mb-3">Third-Party Cookies</h3>
            <p className="text-gray-700">
              We may use third-party analytics services (such as Google Analytics) that use cookies. These third parties have their own privacy policies governing their use of information.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);



export const ChildrensPrivacy: React.FC = () => (
  <motion.section 
    id="childrens-privacy"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <SectionBadge number={10} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Children's Privacy
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <p className="text-red-900 font-semibold text-lg">
            Our services are not intended for individuals under 18 years of age.
          </p>
        </div>
        
        <p className="text-lg leading-relaxed mb-6">
          We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at{" "}
          <a href="mailto:compliance@pinovx.com" className="text-[#19461D] font-semibold hover:underline">
            compliance@pinovx.com
          </a>
          , and we will take steps to delete such information.
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg text-[#19461D] mb-3">What to do if you discover unauthorized use:</h3>
          <ol className="space-y-2 text-gray-700">
            <li>1. Contact us immediately via email or phone</li>
            <li>2. Provide details about the account or information in question</li>
            <li>3. We will verify the claim and take immediate action</li>
            <li>4. All data will be permanently deleted from our systems</li>
          </ol>
        </div>
      </motion.div>
    </div>
  </motion.section>
);


export const MarketingCommunications: React.FC = () => (
  <motion.section 
    id="marketing"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <SectionBadge number={11} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Marketing Communications
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="text-lg leading-relaxed mb-6">
          With your consent (where required by law), we may send you promotional communications about our services, special offers, and updates.
        </p>
        
        <div className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6 border border-[#19461D]/20 mb-6">
          <h3 className="font-bold text-xl text-[#19461D] mb-4">You can opt out of marketing communications at any time by:</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email Unsubscribe</h4>
                <p className="text-gray-600 text-sm">Clicking the "unsubscribe" link in our emails</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Direct Contact</h4>
                <p className="text-gray-600 text-sm">
                  Contacting us at{" "}
                  <a href="mailto:support@pinovx.com" className="text-[#02C112] hover:underline">
                    support@pinovx.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#02C112] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Account Settings</h4>
                <p className="text-gray-600 text-sm">Updating your communication preferences in your account settings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-gray-700">
            <strong>Important Note:</strong> Even if you opt out of marketing communications, we will still send you essential service-related communications regarding your account and transactions.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const ThirdPartyLinks: React.FC = () => (
  <motion.section 
    id="third-party-links"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <SectionBadge number={12} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Third-Party Links
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="text-lg leading-relaxed mb-6">
          Our website and mobile application may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these external sites.
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg text-[#19461D] mb-3 flex items-center">
            <span className="mr-2">⚠️</span>
            Important Disclaimer
          </h3>
          <p className="text-gray-700">
            When you click on third-party links and leave our platform, you are subject to the privacy policies and terms of those external websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-lg text-[#19461D] mb-3">We encourage you to:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Review the privacy policies of any third-party sites you visit</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Be cautious when providing personal information to external websites</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Verify the legitimacy of third-party services before engaging with them</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#02C112] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Contact us if you have concerns about any linked third-party services</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const PolicyChanges: React.FC = () => (
  <motion.section 
    id="policy-changes"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <SectionBadge number={13} />
    <div className="ml-8 md:ml-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 text-[#19461D] pb-3 border-b border-gray-300"
        variants={fadeInUp}
      >
        Changes to This Privacy Policy
      </motion.h2>
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        variants={fadeInScale}
      >
        <p className="text-lg leading-relaxed mb-6">
          We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, technology, or business operations.
        </p>
        
        <div className="bg-gradient-to-br from-[#19461D]/5 to-[#02C112]/5 rounded-xl p-6 border border-[#19461D]/20 mb-6">
          <h3 className="font-bold text-xl text-[#19461D] mb-4">When we make material changes, we will:</h3>
          <div className="space-y-4">
            {[
              {
                number: "1",
                title: "Post the Updated Policy",
                desc: "Display the revised policy on our website and mobile application with a new effective date"
              },
              {
                number: "2",
                title: "Notify You",
                desc: "Send notification via email or through a prominent notice on our platform"
              },
              {
                number: "3",
                title: "Obtain Consent",
                desc: "Request your consent where required by applicable law"
              },
              {
                number: "4",
                title: "Provide Time to Review",
                desc: "Give you reasonable time to review the changes before they take effect"
              }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#19461D] to-[#02C112] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#19461D] mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-gray-700 mb-3">
            <strong>Your Continued Use:</strong> We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information.
          </p>
          <p className="text-gray-700">
            Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const ContactInfo: React.FC = () => (
  <motion.section 
    id="contact"
    className="relative mb-16 scroll-mt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <SectionBadge number={14} />
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
        <p className="text-lg mb-8 text-gray-700">
          If you have questions, concerns, or wish to exercise your privacy rights, please contact us. We will respond to your inquiry within 30 days of receipt.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-2xl mb-6 text-[#19461D] flex items-center">
              <span className="mr-3">📞</span>
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-lg text-[#19461D] mb-2">General Inquiries & Support</h4>
                <p className="text-gray-700">
                  Email: <a href="mailto:support@pinovx.com" className="text-[#02C112] hover:underline font-medium">support@pinovx.com</a>
                </p>
                <p className="text-gray-700 mt-1">Phone: +1 437-696-0800</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-lg text-[#19461D] mb-2">Privacy & Compliance</h4>
                <p className="text-gray-700">
                  Email: <a href="mailto:compliance@pinovx.com" className="text-[#02C112] hover:underline font-medium">compliance@pinovx.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-2xl mb-6 text-[#19461D] flex items-center">
              <span className="mr-3">📍</span>
              Office Locations
            </h3>
            <div className="space-y-6">
              <div className="bg-[#19461D]/5 rounded-xl p-5 border border-[#19461D]/20">
                <h4 className="font-semibold text-lg text-[#19461D] mb-2 flex items-center">
                  <span className="mr-2">🇨🇦</span>
                  Canada Office
                </h4>
                <p className="text-gray-700">180 Northfield Dr W</p>
                <p className="text-gray-700">Waterloo, ON N2L 0C7, Canada</p>
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-sm text-gray-600">Business Number: 1591582-1</p>
                  <p className="text-sm text-gray-600">FINTRAC MSB: C100000263</p>
                </div>
              </div>
              <div className="bg-[#19461D]/5 rounded-xl p-5 border border-[#19461D]/20">
                <h4 className="font-semibold text-lg text-[#19461D] mb-2 flex items-center">
                  <span className="mr-2">🇦🇺</span>
                  Australia Office
                </h4>
                <p className="text-gray-700">232 Unley Rd</p>
                <p className="text-gray-700">Unley SA 5061, Australia</p>
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-sm text-gray-600">ACN: 682 072 608</p>
                  <p className="text-sm text-gray-600">AUSTRAC DCE: DCE100884196-001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Authorities */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <h3 className="font-bold text-2xl mb-6 text-[#19461D]">Privacy Regulatory Authority Contacts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-lg text-[#19461D] mb-2 flex items-center">
                <span className="mr-2">🇨🇦</span>
                Canada
              </h4>
              <p className="text-gray-700 mb-1">Office of the Privacy Commissioner of Canada</p>
              <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-[#02C112] hover:underline font-medium">
                www.priv.gc.ca
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-lg text-[#19461D] mb-2 flex items-center">
                <span className="mr-2">🇦🇺</span>
                Australia
              </h4>
              <p className="text-gray-700 mb-1">Office of the Australian Information Commissioner (OAIC)</p>
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#02C112] hover:underline font-medium">
                www.oaic.gov.au
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

