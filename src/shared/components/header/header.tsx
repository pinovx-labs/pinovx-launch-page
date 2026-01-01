"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";
import { homeLogo } from "@/utils/externalMedia";
import Link from "next/link";

// Main navigation links
const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "Faqs", href: "/faqs" },
];

// Company dropdown links
const companyLinks = [
  { name: "About us", href: "/about-us" },
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "AML policy", href: "/aml-policy" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#19451D] shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image src={homeLogo} alt="Logo" width={153} height={39} />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {/* Home Link */}
          <Link
            href="/"
            className="text-lg font-medium font-geist text-white transition-colors duration-300 hover:text-green-500"
          >
            Home
          </Link>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 text-lg font-medium font-geist text-white transition-colors duration-300 hover:text-green-500"
            >
              Company
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  companyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setCompanyOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Faqs Link */}
          <Link
            href="/faqs"
            className="text-lg font-medium font-geist text-white transition-colors duration-300 hover:text-green-500"
          >
            Faqs
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Button text="Access OTC" type="button" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 p-6 shadow-xl"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-8">
                <Image src={homeLogo} alt="Logo" width={120} height={32} />
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-800"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {/* Home Link */}
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-800 transition-colors hover:text-green-500 py-3 px-4 rounded-lg hover:bg-gray-50"
                >
                  Home
                </Link>

                {/* Company Accordion */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="w-full flex items-center justify-between text-lg font-medium text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span>Company</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        companyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {companyOpen && (
                      <motion.div
                        className="pl-6"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {companyLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                              setOpen(false);
                              setCompanyOpen(false);
                            }}
                            className="block text-gray-600 hover:text-green-500 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Faqs Link */}
                <Link
                  href="/faqs"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-800 transition-colors hover:text-green-500 py-3 px-4 rounded-lg hover:bg-gray-50"
                >
                  Faqs
                </Link>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    text="Access OTC"
                    type="button"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}