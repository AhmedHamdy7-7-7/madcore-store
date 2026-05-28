"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function CartToast({
  show,
}: {
  show: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-8 right-8 z-[9999] bg-violet-600 text-white px-6 py-4 uppercase tracking-widest text-sm shadow-2xl"
        >
          ADDED TO THE CHAOS
        </motion.div>
      )}
    </AnimatePresence>
  );
}