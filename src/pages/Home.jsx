import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ProductCategories from "../components/home/ProductCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import IndustriesPreview from "../components/home/IndustriesPreview";
import SupplyAreas from "../components/home/SupplyAreas";
import CTA from "../components/home/CTA";

import {
  ShieldCheck,
  BadgeCheck,
  Truck,
  Handshake,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <Hero />

      {/* =====================================================
          TRUST & COMPANY HIGHLIGHTS
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          
          {/* B-BBEE */}
          <div className="flex items-center gap-3 border-b border-r border-slate-200 px-5 py-6 md:border-b-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A]">
              <BadgeCheck className="h-5 w-5 text-[#C9A227]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#0B1F3A]">
                B-BBEE Level 1
              </p>
              <p className="text-xs text-slate-500">
                100% Black Owned
              </p>
            </div>
          </div>

          {/* QUALITY */}
          <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-6 md:border-b-0 md:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A]">
              <ShieldCheck className="h-5 w-5 text-[#C9A227]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#0B1F3A]">
                Quality & Safety
              </p>
              <p className="text-xs text-slate-500">
                Workplace Protection
              </p>
            </div>
          </div>

          {/* DELIVERY */}
          <div className="flex items-center gap-3 border-r border-slate-200 px-5 py-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A]">
              <Truck className="h-5 w-5 text-[#C9A227]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#0B1F3A]">
                Reliable Supply
              </p>
              <p className="text-xs text-slate-500">
                Dependable Delivery
              </p>
            </div>
          </div>

          {/* PARTNERSHIP */}
          <div className="flex items-center gap-3 px-5 py-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A]">
              <Handshake className="h-5 w-5 text-[#C9A227]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#0B1F3A]">
                Trusted Partner
              </p>
              <p className="text-xs text-slate-500">
                Procurement Support
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT PREVIEW
      ====================================================== */}
      <AboutPreview />

      {/* =====================================================
          PRODUCT CATEGORIES
      ====================================================== */}
      <ProductCategories />

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <WhyChooseUs />

      {/* =====================================================
          INDUSTRIES WE SERVE
      ====================================================== */}
      <IndustriesPreview />

      {/* =====================================================
          SUPPLY AREAS
      ====================================================== */}
      <SupplyAreas />

      {/* =====================================================
          FINAL CALL TO ACTION
      ====================================================== */}
      <CTA />

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ====================================================== */}
      <a
        href="https://wa.me/27765683130"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NEI-NEI on WhatsApp"
        className="group fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#0B1F3A] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
}

export default Home;