import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-gradient-forest relative overflow-hidden pt-32 pb-20 text-primary-foreground md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute -top-32 -left-20 size-80 rounded-full opacity-25 blur-3xl"
        style={{ backgroundImage: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className="container-luxe relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl text-4xl leading-tight font-semibold sm:text-6xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base/relaxed opacity-75"
          >
            {lead}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  );
}
