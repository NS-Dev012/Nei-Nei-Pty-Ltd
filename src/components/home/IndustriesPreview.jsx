import {
  Building2,
  Factory,
  HardHat,
  Truck,
} from "lucide-react";

const industries = [
  {
    title: "Construction",
    icon: HardHat,
  },
  {
    title: "Mining",
    icon: Factory,
  },
  {
    title: "Manufacturing",
    icon: Building2,
  },
  {
    title: "Logistics & Transport",
    icon: Truck,
  },
];

function IndustriesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Industries
            </span>

            <span className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
            Supporting Different Industries
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Our solutions are designed to support businesses operating
            across a range of demanding environments.
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group relative overflow-hidden rounded-xl bg-[#F5F6F8] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1F3A]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1F3A] text-[#C9A227] transition-colors group-hover:bg-[#C9A227] group-hover:text-[#0B1F3A]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#0B1F3A] transition-colors group-hover:text-white">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
                  Industrial supply solutions tailored to your environment.
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default IndustriesPreview;