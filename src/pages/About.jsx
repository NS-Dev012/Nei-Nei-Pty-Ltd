import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Factory,
  HardHat,
  Handshake,
  HeartPulse,
  Landmark,
  PackageCheck,
  ShieldCheck,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import plainIndustrial from "../assets/images/plain-industrial.png";

const products = [
  {
    icon: HardHat,
    number: "01",
    title: "PPE & Safety Solutions",
    description:
      "Workplace safety products designed to support employees and organisations operating in safety-sensitive environments.",
    items: [
      "Safety boots",
      "Protective clothing & overalls",
      "Reflective jackets",
      "Safety gloves & helmets",
      "Eye protection",
      "Respiratory protection",
      "Hearing protection",
      "Workplace safety accessories",
    ],
  },
  {
    icon: Wrench,
    number: "02",
    title: "Industrial Engineering Components",
    description:
      "Industrial maintenance and mechanical components supporting reliable operations and helping businesses reduce downtime.",
    items: [
      "Industrial bearings",
      "Machine & replacement bearings",
      "V-belts & drive belts",
      "Power transmission solutions",
      "Industrial chains",
      "Chain accessories",
      "Industrial lubricants",
      "Mechanical maintenance products",
    ],
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Cleaning & Hygiene Supplies",
    description:
      "Workplace cleaning, hygiene and janitorial products for businesses and operational environments.",
    items: [
      "Industrial cleaning chemicals",
      "Hygiene products",
      "Cleaning equipment",
      "Workplace consumables",
      "Janitorial supplies",
    ],
  },
  {
    icon: Award,
    number: "04",
    title: "Corporate Branding",
    description:
      "Branding solutions that help organisations present a professional and consistent corporate image.",
    items: [
      "Embroidery",
      "Printing",
      "Corporate clothing",
      "Branded workwear",
      "Golf shirts",
      "Promotional materials",
    ],
  },
  {
    icon: GiftIcon,
    number: "05",
    title: "Corporate Gifts & Promotional Items",
    description:
      "Customised products for employee recognition, corporate events, client appreciation and marketing campaigns.",
    items: [
      "Branded pens",
      "Promotional items",
      "Corporate gift sets",
      "Corporate merchandise",
      "Client appreciation products",
    ],
  },
];

const industries = [
  {
    icon: Factory,
    title: "Mining",
    description:
      "Safety products, industrial components and workplace supplies for mining environments.",
  },
  {
    icon: Building2,
    title: "Manufacturing",
    description:
      "Supply solutions supporting production, maintenance, safety and operational requirements.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "PPE, workwear and workplace safety products for construction environments.",
  },
  {
    icon: Wrench,
    title: "Engineering",
    description:
      "Mechanical, maintenance and industrial engineering components.",
  },
  {
    icon: Truck,
    title: "Automotive",
    description:
      "Industrial supplies and maintenance-related products for automotive operations.",
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description:
      "Workplace safety, consumables and operational supply solutions.",
  },
  {
    icon: Landmark,
    title: "Government & Municipalities",
    description:
      "Procurement-ready supply solutions for public-sector requirements.",
  },
  {
    icon: Users,
    title: "Corporate & Institutions",
    description:
      "Workplace supplies, branding, promotional products and safety solutions.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "We recognise the importance of protecting people and supporting safer working environments.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "We focus on dependable products and practical supply solutions suited to customer requirements.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    description:
      "We aim to provide responsive service and dependable customer support throughout the supply process.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We work to understand customer requirements and provide solutions aligned with their procurement needs.",
  },
];

const credentials = [
  {
    icon: Award,
    title: "B-BBEE Level 1",
    description:
      "NEI-NEI is a B-BBEE Level 1 Contributor with 135% procurement recognition.",
  },
  {
    icon: ClipboardCheck,
    title: "CSD Registered",
    description:
      "Registered on the Central Supplier Database and positioned to participate in procurement opportunities.",
  },
  {
    icon: CheckCircle2,
    title: "Tax Compliant",
    description:
      "The company maintains an active SARS Tax Compliance Status.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Safety",
    description:
      "Formal Health & Safety and Substance Abuse policies are maintained within the business.",
  },
];

function GiftIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13" />
      <path d="M3 12h18" />
      <path d="M12 8H7.5a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8Z" />
      <path d="M12 8h4.5a2.5 2.5 0 1 0 0-5C14 3 12 8 12 8Z" />
    </svg>
  );
}

function About() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07182D] py-24 sm:py-28 lg:py-32">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A227]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#C9A227]/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C9A227]/10" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D8B83F] sm:text-sm">
                About NEI-NEI (Pty) Ltd
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Industrial Supply.
              <span className="block text-[#D8B83F]">
                Quality. Reliability. Safety.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              A South African industrial supply and solutions company
              providing workplace safety products, industrial components,
              engineering consumables, corporate branding solutions and
              support services.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-md bg-[#C9A227] px-6 py-3.5 text-sm font-bold text-[#07182D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B83F]"
              >
                Explore Our Solutions
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#D8B83F]"
              >
                Contact NEI-NEI
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY OVERVIEW
      ====================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

            <div className="relative">

              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-[#C9A227]" />

              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={plainIndustrial}
                  alt="Industrial supply and operations"
                  className="h-[430px] w-full object-cover sm:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D8B83F]">
                    NEI-NEI (PTY) LTD
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    Industrial Supplies & Solutions
                  </p>
                </div>
              </div>

            </div>

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Company Overview
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
                A Growing Industrial Supply & Solutions Partner
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                NEI-NEI (Pty) Ltd is a South African industrial supply and
                solutions company specialising in the supply of workplace
                safety products, industrial components, engineering
                consumables, corporate branding solutions and support
                services.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                The company provides supply solutions to businesses across
                the mining, manufacturing, construction, logistics,
                automotive, corporate and commercial sectors, as well as
                government departments and institutions.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our goal is to become a trusted single-source supplier by
                delivering quality products, competitive pricing, responsive
                service and dependable customer support.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#C9A227]/30 bg-[#FBFAF4] p-5">
                <Target className="mt-1 shrink-0 text-[#C9A227]" size={24} />

                <div>
                  <h3 className="font-bold text-[#0B1F3A]">
                    Our Supply Philosophy
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Simplify procurement by giving customers access to
                    multiple industrial and workplace supply categories
                    through one reliable supplier.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          AT A GLANCE
      ====================================================== */}
      <section className="border-y border-gray-200 bg-[#F5F6F8] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              At a Glance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A]">
              Key Company Information
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Building2 className="text-[#C9A227]" size={28} />

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-500">
                Company
              </p>

              <h3 className="mt-1 font-bold text-[#0B1F3A]">
                NEI-NEI (Pty) Ltd
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Private Company
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Award className="text-[#C9A227]" size={28} />

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-500">
                B-BBEE Status
              </p>

              <h3 className="mt-1 font-bold text-[#0B1F3A]">
                Level 1 Contributor
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                135% Procurement Recognition
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <ClipboardCheck className="text-[#C9A227]" size={28} />

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-500">
                Supplier Registration
              </p>

              <h3 className="mt-1 font-bold text-[#0B1F3A]">
                CSD Registered
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Active supplier registration
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Landmark className="text-[#C9A227]" size={28} />

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-500">
                Location
              </p>

              <h3 className="mt-1 font-bold text-[#0B1F3A]">
                Gauteng, South Africa
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Katlehong
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS & SERVICES
      ====================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                What We Supply
              </span>

              <span className="h-px w-10 bg-[#C9A227]" />
            </div>

            <h2 className="text-3xl font-bold text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Products & Services
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our supply portfolio brings together safety, industrial,
              workplace, branding and promotional solutions to help
              customers simplify procurement.
            </p>

          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl sm:p-8"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A227]">
                      <Icon size={27} />
                    </div>

                    <span className="text-4xl font-black text-gray-100">
                      {product.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                    {product.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {product.description}
                  </p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {product.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#C9A227]"
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          TARGET MARKETS
      ====================================================== */}
      <section className="bg-[#0B1F3A] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-end gap-8 lg:grid-cols-2">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Target Markets
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Supporting Multiple Industries
              </h2>
            </div>

            <p className="leading-8 text-gray-300 lg:text-right">
              NEI-NEI is positioned to support organisations across
              industrial, commercial, public-sector and institutional
              environments.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-white/10"
                >

                  <Icon
                    size={28}
                    className="text-[#C9A227]"
                  />

                  <h3 className="mt-5 font-bold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {industry.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY PARTNER WITH US
      ====================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Why Partner With Us
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
                A Single-Source Approach to Procurement
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                NEI-NEI's value proposition is centred around bringing
                multiple workplace and industrial supply requirements
                together through one supplier.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Safety compliance products",
                  "Industrial maintenance components",
                  "Workplace consumables",
                  "Corporate branding solutions",
                  "Promotional products",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C9A227]">
                      <CheckCircle2
                        size={17}
                        className="text-[#0B1F3A]"
                      />
                    </div>

                    <span className="font-medium text-[#0B1F3A]">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {credentials.map((credential) => {
                const Icon = credential.icon;

                return (
                  <div
                    key={credential.title}
                    className="rounded-xl border border-gray-200 bg-[#F8F9FA] p-6"
                  >

                    <Icon
                      size={27}
                      className="text-[#C9A227]"
                    />

                    <h3 className="mt-5 font-bold text-[#0B1F3A]">
                      {credential.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {credential.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          COMPLIANCE
      ====================================================== */}
      <section className="border-y border-gray-200 bg-[#F5F6F8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Compliance & Credentials
              </span>

              <span className="h-px w-10 bg-[#C9A227]" />
            </div>

            <h2 className="text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              Procurement-Ready
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              NEI-NEI maintains the registrations, compliance credentials
              and supporting documentation required to participate in
              commercial and procurement opportunities.
            </p>

          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            <div className="grid border-b border-gray-200 bg-[#0B1F3A] px-6 py-5 sm:grid-cols-2">
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Credential
              </span>

              <span className="mt-2 text-sm font-bold uppercase tracking-wider text-white sm:mt-0">
                Status
              </span>
            </div>

            <div className="divide-y divide-gray-100">

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  B-BBEE
                </span>

                <span className="text-gray-600">
                  Level 1 Contributor — 135% Procurement Recognition
                </span>
              </div>

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  Central Supplier Database
                </span>

                <span className="text-gray-600">
                  Registered / Active
                </span>
              </div>

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  SARS Tax Compliance
                </span>

                <span className="text-gray-600">
                  Tax Compliant — active Tax Compliance Status
                </span>
              </div>

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  VAT Registration
                </span>

                <span className="text-gray-600">
                  Not currently VAT registered
                </span>
              </div>

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  OHS Compliance
                </span>

                <span className="text-gray-600">
                  OHS Act audit completed — 90.5% compliance score
                </span>
              </div>

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  SHE Protection Representative
                </span>

                <span className="text-gray-600">
                  Director competency certification held
                </span>
              </div>

              <div className="grid gap-2 px-6 py-5 sm:grid-cols-2">
                <span className="font-semibold text-[#0B1F3A]">
                  First Aid
                </span>

                <span className="text-gray-600">
                  Director holds First Aid Level 2 certification
                </span>
              </div>

            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-gray-500">
            Supporting registration certificates and procurement
            documentation can be provided as part of the applicable
            supplier or tender submission process.
          </p>

        </div>
      </section>

      {/* =====================================================
          DIRECTOR PROFILE
      ====================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

          <div className="rounded-2xl bg-[#0B1F3A] p-8 shadow-xl sm:p-12 lg:p-14">

            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#C9A227]">
                <Users
                  size={38}
                  className="text-[#0B1F3A]"
                />
              </div>

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Leadership
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  Delina Sports
                </h2>

                <p className="mt-1 text-sm font-medium text-gray-400">
                  Founder & Director
                </p>

                <p className="mt-6 leading-8 text-gray-300">
                  Delina is the founder and director of NEI-NEI (Pty) Ltd,
                  responsible for operations, procurement, client
                  relationships and compliance.
                </p>

                <p className="mt-4 leading-8 text-gray-300">
                  Her health and safety competency qualifications support
                  NEI-NEI's ability to operate safely and knowledgeably
                  within regulated and safety-sensitive environments such
                  as mining, logistics and industrial sites.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <ShieldCheck
                      size={24}
                      className="text-[#C9A227]"
                    />

                    <h3 className="mt-4 font-bold text-white">
                      S.H.E Protection Representative
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Director competency certification through Lushaka
                      Training Solutions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <HeartPulse
                      size={24}
                      className="text-[#C9A227]"
                    />

                    <h3 className="mt-4 font-bold text-white">
                      First Aid — Level 2
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Workplace emergency care and first-aid competency
                      certification.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HEALTH, SAFETY & GOVERNANCE
      ====================================================== */}
      <section className="bg-[#F5F6F8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A227]">
                <ShieldCheck size={28} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-[#0B1F3A]">
                Health & Safety
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                NEI-NEI's Occupational Health and Safety approach is
                focused on maintaining safe working conditions for
                employees, clients, contractors and other stakeholders.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Periodic risk assessments and job hazard analysis",
                  "Provision of appropriate protective equipment",
                  "Regular equipment inspections",
                  "Health & safety training",
                  "Emergency preparedness",
                  "Fire and evacuation procedures",
                  "Accessible first-aid resources",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#C9A227]"
                    />

                    <span className="text-sm leading-6 text-gray-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            <div className="rounded-2xl bg-[#0B1F3A] p-8 shadow-sm sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A227] text-[#0B1F3A]">
                <ClipboardCheck size={28} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-white">
                Governance & Workplace Standards
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                NEI-NEI maintains formal workplace policies supporting
                responsible operations, safety and employee wellbeing.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">

                <h3 className="font-bold text-white">
                  Substance Abuse Policy
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  The company maintains safeguards against drug and alcohol
                  abuse in the workplace, including controls relating to
                  prohibited substances, workplace incidents and
                  legally compliant testing procedures.
                </p>

              </div>

              <p className="mt-6 text-sm leading-7 text-gray-400">
                Full policy documents and supporting compliance
                documentation can be made available where required as
                part of supplier pre-qualification or procurement
                processes.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          GROWTH VISION
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#C9A227]/5" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Our Growth Vision
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
                Growing Into a
                <span className="block text-[#C9A227]">
                  Trusted Single-Source Supplier
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                NEI-NEI is being developed with a long-term approach to
                industrial supply. While our current portfolio covers PPE,
                safety, engineering components, hygiene, branding and
                promotional solutions, we aim to continue expanding our
                capabilities.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our objective is to build a supply business capable of
                responding to changing customer requirements while
                maintaining quality, competitive pricing, professional
                service and reliable support.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 font-bold text-[#0B1F3A] transition-colors hover:text-[#C9A227]"
                >
                  Discuss Your Requirements

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

            </div>

            <div className="rounded-2xl bg-[#0B1F3A] p-8 shadow-xl sm:p-10">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Our Direction
              </p>

              <div className="mt-8 space-y-6">

                {[
                  "Expand our industrial product portfolio",
                  "Strengthen supplier and customer relationships",
                  "Support more industries and procurement environments",
                  "Provide increasingly comprehensive single-source solutions",
                  "Maintain a strong culture of safety and compliance",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9A227] text-xs font-black text-[#0B1F3A]">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-300">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROCUREMENT CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07182D] py-20 sm:py-24">

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Procurement & Enquiries
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Looking for a Reliable Industrial Supply Partner?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
            Talk to NEI-NEI about your PPE, safety, engineering,
            workplace, branding or promotional supply requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/request-a-quote"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#07182D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8B83F]"
            >
              Request a Quote

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#C9A227] hover:text-[#D8B83F]"
            >
              Contact Us
            </Link>

          </div>

          <div className="mx-auto mt-10 h-px max-w-xl bg-white/10" />

          <div className="mt-7 flex flex-col items-center justify-center gap-2 text-sm text-gray-400 sm:flex-row sm:gap-6">
            <span>Katlehong, Gauteng</span>
            <span className="hidden text-[#C9A227] sm:block">•</span>
            <span>076 568 3130</span>
            <span className="hidden text-[#C9A227] sm:block">•</span>
            <span>delina@neinei.co.za</span>
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;