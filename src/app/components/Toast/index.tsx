"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ToastMessage } from "@/types";

type ToastListProps = {
  toasts: ToastMessage[];
};

export const ToastList = ({ toasts }: ToastListProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const hidden = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 16, scale: 0.96 };
  const visible = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 grid w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 gap-2 lg:left-6 lg:translate-x-0"
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <motion.p
            key={toast.id}
            initial={hidden}
            animate={visible}
            exit={hidden}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="rounded-xl bg-light px-4 py-2 text-center font-body font-semibold text-dark shadow-xl"
          >
            {toast.message}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};
