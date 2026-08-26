import {
  HardHat,
  Shirt,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "PPE & Safety",
    description:
      "Personal protective equipment designed to help keep workers protected in demanding environments.",
    icon: HardHat,
  },
  {
    title: "Workwear",
    description:
      "Practical and durable workwear solutions for professional and industrial working environments.",
    icon: Shirt,
  },
  {
    title: "Safety Equipment",
    description:
      "Essential safety products and equipment to support safer workplaces and job sites.",
    icon: ShieldCheck,
  },
  {
    title: "Industrial Supplies",
    description:
      "A growing range of industrial products and equipment to support business operations.",
    icon: Wrench,
  },
];

function ProductCategories() {
  return (
    <section className="bg-[#F5F6F8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              What We Supply
            </span>

            <span className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
            Industrial Products for Your Business
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Our product offering is built around quality, workplace safety
            and the practical needs of our customers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227]/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B1F3A] text-[#C9A227] transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-[#0B1F3A]">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {category.description}
                </p>

                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] transition-colors hover:text-[#C9A227]"
                >
                  Explore

                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ProductCategories;