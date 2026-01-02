"use client";

import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

export default function WaitlistSuccessModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl p-6 max-w-md w-full text-center"
      >
        <h3 className="text-xl font-semibold mb-2">
          🎉 You’re on the waitlist!
        </h3>
        <p className="text-gray-600 mb-6">
          We’ve added you to the PinovX waitlist and sent a confirmation email.
        </p>

        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          Got it
        </button>
      </motion.div>
    </div>
  );
}
