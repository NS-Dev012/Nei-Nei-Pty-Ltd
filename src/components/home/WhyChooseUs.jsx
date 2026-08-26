import {
  BadgeCheck,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Quality Focused",
    description:
      "We aim to provide dependable products that meet the practical requirements of modern workplaces.",
  },
  {
    icon: Handshake,
    title: "Reliable Service",
    description:
      "We build relationships with customers through professional communication and dependable service.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Safety is at the heart of our business, particularly through our PPE and protective equipment offering.",
  },
  {
    icon: TrendingUp,
    title: "Growing With You",
    description:
      "Our product range is designed to grow as the needs of our customers and industries evolve.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#0B1F3A] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          {/* Heading */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Why NEI-NEI
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Built Around
              <span className="block text-[#C9A227]">
                Quality & Safety.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-300">
              We believe industrial supply is more than simply providing
              products. It is about understanding customer requirements,
              delivering reliable solutions and building long-term
              relationships.
            </p>
          </div>

          {/* Reasons */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-white/10"
                >
                  <Icon
                    size={30}
                    className="text-[#C9A227]"
                  />

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;