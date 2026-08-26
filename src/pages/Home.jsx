import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ProductCategories from "../components/home/ProductCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import IndustriesPreview from "../components/home/IndustriesPreview";
import SupplyAreas from "../components/home/SupplyAreas";
import CTA from "../components/home/CTA";

import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <ProductCategories />

      <WhyChooseUs />

      <IndustriesPreview />

      <SupplyAreas />

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