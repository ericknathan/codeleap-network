import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideDownAnimationProps {
  children: ReactNode;
  delay?: number;
}

export function SlideDownAnimation({ children, delay = 0 }: SlideDownAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}
