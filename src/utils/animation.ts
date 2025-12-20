// animations.ts (optional but clean)
export const mobileMenuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};
