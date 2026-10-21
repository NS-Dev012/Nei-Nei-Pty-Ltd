import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  PackageCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

import industrialBackground from "../../assets/images/industrial-background-image.png";

function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#07182D]">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0 -z-20">
        <img
          src={industrialBackground}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          DARK OVERLAY
      ========================================================= */}
      <div className="absolute inset-0 -z-10 bg-[#07182D]/60" />

      {/* Left-heavy gradient for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061426] via-[#07182D]/90 to-[#07182D]/35" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#07182D] to-transparent" />

      {/* =========================================================
          DECORATIVE INDUSTRIAL GRID
      ========================================================= */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Gold vertical accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A227]" />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">

        <div className="w-full max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-[#C9A227]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D8B83F] sm:text-sm">
              NEI-NEI (Pty) Ltd
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            Industrial Supply
            <span className="block text-[#D8B83F]">
              Built Around Safety.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg"
          >
            Quality PPE, safety products and industrial supplies for
            businesses that need dependable solutions for the workplace.
          </motion.p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >

            {/* Primary */}
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#07182D] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B83F]"
            >
              Explore Products

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary */}
            {/* <Link
              to="/request-a-quote"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C9A227] hover:bg-white hover:text-[#07182D]"
            >
              Request a Quote

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link> */}

          </motion.div>

          {/* =====================================================
              TRUST / CAPABILITY STRIP
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 grid max-w-3xl grid-cols-1 border-t border-white/15 pt-6 sm:grid-cols-3"
          >

            {/* Item 1 */}
            <div className="flex items-center gap-3 border-b border-white/10 py-4 sm:border-b-0 sm:border-r sm:pr-5 sm:py-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <ShieldCheck
                  size={20}
                  className="text-[#D8B83F]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Safety
                </p>

                <p className="text-xs text-gray-400">
                  Workplace focused
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 border-b border-white/10 py-4 sm:border-b-0 sm:border-r sm:px-5 sm:py-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <PackageCheck
                  size={20}
                  className="text-[#D8B83F]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Quality
                </p>

                <p className="text-xs text-gray-400">
                  Supply solutions
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 py-4 sm:pl-5 sm:py-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Truck
                  size={20}
                  className="text-[#D8B83F]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Reliability
                </p>

                <p className="text-xs text-gray-400">
                  Built to grow
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Explore
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Hero;