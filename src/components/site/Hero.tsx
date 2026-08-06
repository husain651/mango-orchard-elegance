import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-orchard.jpg";
import mango from "@/assets/mango-sindhri.png";

const badges = [
  { icon: ShieldCheck, label: "Export Quality" },
  { icon: Leaf, label: "Fresh from Farms" },
  { icon: Globe2, label: "Worldwide Shipping" },
  { icon: Sparkles, label: "Since 2000" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-dvh min-h-[42rem] overflow-hidden">
      <motion.img
        src={hero}
        alt="Pakistani mango orchard at golden hour with ripe mangoes on the branch"
        width={1920}
        height={1280}
        style={{ y: bgY, scale }}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      {[
        { top: "18%", left: "8%", size: 92, delay: 0 },
        { top: "62%", left: "12%", size: 64, delay: 1.4 },
        { top: "26%", right: "10%", size: 110, delay: 0.7 },
        { top: "70%", right: "18%", size: 56, delay: 2.1 },
      ].map((f, i) => (
        <img
          key={i}
          src={mango}
          alt=""
          aria-hidden="true"
          className="float-slow pointer-events-none absolute hidden opacity-70 drop-shadow-2xl lg:block"
          style={{ ...f, width: f.size, animationDelay: `${f.delay}s` }}
        />
      ))}

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-luxe relative flex h-full flex-col items-center justify-center pt-20 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow rounded-full glass-dark px-4 py-2 text-white/90"
        >
          Multan · Mirpurkhas · Rahim Yar Khan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl"
        >
          Pakistan's Finest Mangoes,{" "}
          <span className="text-gradient-gold italic">Delivered Worldwide.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base/relaxed text-white/80 sm:text-lg"
        >
          Premium export-quality Pakistani mangoes sourced directly from trusted farms and
          delivered fresh across the globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            to="/products"
            className="bg-gradient-gold inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            Shop Now
          </Link>
          <Link
            to="/corporate"
            className="inline-flex min-h-12 items-center justify-center rounded-full glass-dark px-8 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Request Bulk Quote
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {badges.map((b) => (
            <li
              key={b.label}
              className="flex flex-col items-center gap-2 rounded-2xl glass-dark px-3 py-4 text-white"
            >
              <b.icon className="size-5 text-accent" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide">{b.label}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
