"use client";
import { motion } from "framer-motion";
import React from "react";

const PageTransition = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={className}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
