import { Variants } from "framer-motion";

// ✅ Type-safe easing functions
const EASING = {
  easeOut: "easeOut" as const,
  easeInOut: "easeInOut" as const,
  linear: "linear" as const,
  customBezier: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

// ✅ Properly typed variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: EASING.easeOut,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASING.easeOut,
    },
  },
};

export const slideInBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASING.customBezier, // ✅ Now properly typed
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};