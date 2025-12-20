"use client";

import { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";
import { homeLogo } from "@/utils/externalMedia";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Product", to: "product" },
  { name: "Company", to: "company" },
  { name: "Resources", to: "resources" },
  { name: "Help", to: "help" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* LOGO */}
        <Image src={homeLogo} alt="Logo" width={153} height={39} />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth
              spy
              offset={-100}
              duration={600}
              activeClass="text-green-500"
              className="cursor-pointer text-lg font-medium font-geist
                         text-black transition-colors duration-300
                         hover:text-green-500"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Button text="Get Started" type="button" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(true)} className="md:hidden">
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
              className="fixed top-0 left-0 w-full bg-white z-50 p-6"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-8">
                <Image src={homeLogo} alt="Logo" width={120} height={32} />
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <ScrollLink
                      to={link.to}
                      smooth
                      spy
                      offset={-100}
                      duration={600}
                      activeClass="text-green-500"
                      onClick={() => setOpen(false)}
                      className="cursor-pointer text-lg font-medium
                                 text-gray-800 transition-colors
                                 hover:text-green-500"
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                  className="pt-4"
                >
                  <Button text="Get Started" type="button" />
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
