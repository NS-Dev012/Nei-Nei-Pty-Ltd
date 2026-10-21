import ppeImage from "../assets/images/products/ppe-safety.jpg";
import engineeringImage from "../assets/images/products/engineering-components.jpg";
import hygieneImage from "../assets/images/products/cleaning-hygiene.jpg";
import brandingImage from "../assets/images/products/corporate-branding.jpg";
import workplaceImage from "../assets/images/products/workplace-supplies.jpg";
import deliveryImage from "../assets/images/products/supply-delivery.jpg";
import hygieneFeatureImage from "../assets/images/products/hygiene-feature.jpg";
import workImage from "../assets/images/work.jpeg";
import officeImage from "../assets/images/office.jpeg";
import mineImage from "../assets/images/mine.jpeg";

import { Link } from "react-router-dom";
import {
  ShieldCheck,
  HardHat,
  Wrench,
  Sparkles,
  BriefcaseBusiness,
  Truck,
  ArrowRight,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";



const products = [
  {
    id: 1,
    title: "PPE & Safety Solutions",
    category: "PPE & SAFETY",
    description:
      "Workplace protection solutions designed to support safer working environments across industrial and commercial operations.",
    image: ppeImage,
    icon: HardHat,
    items: [
      "Safety boots",
      "Protective workwear",
      "Reflective jackets",
      "Safety gloves",
      "Safety helmets",
      "Eye protection",
      "Hearing protection",
      "Respiratory protection",
    ],
  },

  {
    id: 2,
    title: "Industrial Engineering Components",
    category: "ENGINEERING",
    description:
      "Industrial components and maintenance products supporting mechanical, engineering and operational requirements.",
    image: engineeringImage,
    icon: Wrench,
    items: [
      "Bearings",
      "V-belts & drive belts",
      "Industrial chains",
      "Power transmission products",
      "Industrial lubricants",
      "Transmission oils",
      "Mechanical maintenance products",
    ],
  },

  {
    id: 3,
    title: "Cleaning & Hygiene Solutions",
    category: "CLEANING & HYGIENE",
    description:
      "Professional cleaning and hygiene solutions for offices, facilities, industrial environments and high-traffic workplaces.",
    image: hygieneImage,
    icon: Sparkles,
    items: [
      "Foam soap dispensers",
      "Hand sanitiser dispensers",
      "Paper towel dispensers",
      "Toilet roll holders",
      "Hygiene bag dispensers",
      "Sanitary bins",
      "Cleaning chemicals",
      "Hygiene consumables",
    ],
  },

  {
    id: 4,
    title: "Corporate Branding Solutions",
    category: "BRANDING",
    description:
      "Professional branded products that help organisations present a consistent and professional identity.",
    image: brandingImage,
    icon: BriefcaseBusiness,
    items: [
      "Branded workwear",
      "Embroidery",
      "Printing",
      "Golf shirts",
      "Corporate gifts",
      "Promotional merchandise",
      "Branded stationery",
    ],
  },

  {
    id: 5,
    title: "Industrial & Workplace Supplies",
    category: "WORKPLACE SUPPLIES",
    description:
      "Essential products supporting day-to-day workplace, facility and operational requirements.",
    image: workplaceImage,
    icon: PackageCheck,
    items: [
      "Workplace consumables",
      "Facility supplies",
      "Janitorial products",
      "General industrial supplies",
      "Safety accessories",
      "Operational supplies",
    ],
  },

  {
    id: 6,
    title: "Supply & Delivery Support",
    category: "PROCUREMENT SUPPORT",
    description:
      "Procurement and supply support helping organisations source products according to their operational requirements.",
    image: deliveryImage,
    icon: Truck,
    items: [
      "Product sourcing",
      "Procurement support",
      "Supply coordination",
      "Product quotations",
      "Bulk supply",
      "Delivery coordination",
    ],
  },
];

function Products() {
  return (
    <main className="bg-white text-[#0B1F3A]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C9A227]" />

              <span className="text-sm font-bold tracking-[0.22em] text-[#C9A227]">
                OUR PRODUCTS & SOLUTIONS
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Industrial Supply
              <span className="block text-[#C9A227]">
                Built Around Your Needs.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              NEI-NEI (Pty) Ltd provides reliable supply solutions across
              workplace safety, industrial components, cleaning and hygiene,
              corporate branding and procurement support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-6 py-3 font-bold text-[#0B1F3A] transition hover:bg-[#b58f1e]"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link> */}

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-[#C9A227] hover:text-[#C9A227]"
              >
                About NEI-NEI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-[#C9A227]">
              SUPPLY SOLUTIONS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Products for Safer, Cleaner & More Efficient Workplaces
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From PPE and engineering components to workplace hygiene and
              corporate branding, NEI-NEI provides access to multiple product
              categories through a single supply partner.
            </p>
          </div>

          {/* =====================================================
              PRODUCT CARDS
          ====================================================== */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-200">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A227] text-[#0B1F3A] shadow-lg">
                      <Icon size={22} />
                    </div>

                    <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.18em] text-white">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-[#0B1F3A]">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <div className="my-5 h-px bg-slate-200" />

                    <ul className="space-y-2.5">
                      {product.items.slice(0, 5).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#C9A227]"
                          />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 font-bold text-[#0B1F3A] transition group-hover:text-[#C9A227]"
                    >
                      Request Product Quote
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link> */}
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          HYGIENE FEATURE
      ====================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-[#C9A227]">
                CLEANING & HYGIENE
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Professional Hygiene Solutions
                <span className="block text-[#C9A227]">
                  for Modern Facilities
                </span>
              </h2>

              <p className="mt-6 leading-7 text-slate-600">
                Our hygiene supply category can support facilities requiring
                professional dispensing, paper, sanitary and cleaning
                solutions.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {[
                  "Soap & foam dispensers",
                  "Hand sanitiser solutions",
                  "Paper towel dispensers",
                  "Toilet roll holders",
                  "Sanitary bins",
                  "Hygiene consumables",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    <ShieldCheck
                      size={19}
                      className="shrink-0 text-[#C9A227]"
                    />

                    <span className="text-sm font-semibold text-[#0B1F3A]">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#0B1F3A] p-3 shadow-2xl">
              <img
                src={officeImage}
                alt="NEI-NEI hygiene supply solutions"
                className="h-[420px] w-full rounded-xl object-cover object-center"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-[#0B1F3A]/90 p-5 backdrop-blur">
                <p className="text-sm font-bold tracking-[0.15em] text-[#C9A227]">
                  NEI-NEI
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Hygiene & Workplace Solutions
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold tracking-[0.2em] text-[#C9A227]">
            INDUSTRIES WE SUPPORT
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Supply Solutions Across Multiple Sectors
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Our product categories are positioned to support organisations
            with different operational, workplace safety and procurement
            requirements.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Mining",
              "Construction",
              "Manufacturing",
              "Logistics",
              "Automotive",
              "Corporate",
              "Municipalities",
              "Institutions",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 font-semibold text-white transition hover:border-[#C9A227] hover:bg-white/10"
              >
                {industry}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold tracking-[0.2em] text-[#C9A227]">
            NEED A SUPPLY SOLUTION?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
            Tell Us What You Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Contact NEI-NEI with your product requirements and our team can
            assist with sourcing, quotation and supply support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {/* <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0B1F3A] px-7 py-3.5 font-bold text-white transition hover:bg-[#162f52]"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link> */}

            <a
              href="https://wa.me/27765683130"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0B1F3A] px-7 py-3.5 font-bold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Products;