import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import plainIndustrial from "../../assets/images/plain-industrial.png";

const highlights = [
  "Quality industrial products",
  "Reliable supply solutions",
  "Safety-focused approach",
  "Growing product range",
];

function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-[#C9A227]" />

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={plainIndustrial}
                alt="Industrial workplace and equipment"
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#0B1F3A]/10" />
            </div>

            <div className="absolute -bottom-5 -right-5 hidden rounded-xl bg-[#0B1F3A] px-7 py-5 shadow-xl sm:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                Our Commitment
              </p>

              <p className="mt-1 text-lg font-bold text-[#C9A227]">
                Quality • Reliability • Safety
              </p>
            </div>
          </div>

          {/* Content */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                About NEI-NEI
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Your Industrial Supply Partner
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              NEI-NEI (Pty) Ltd is an industrial supplies company focused on
              providing quality products and reliable supply solutions to
              businesses and organisations.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Starting with personal protective equipment and safety
              products, our vision is to continuously expand our range to
              meet the evolving needs of our customers across different
              industries.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#C9A227]"
                  />

                  <span className="text-sm font-medium text-[#0B1F3A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-[#0B1F3A] transition-colors hover:text-[#C9A227]"
            >
              Learn More About Us

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;