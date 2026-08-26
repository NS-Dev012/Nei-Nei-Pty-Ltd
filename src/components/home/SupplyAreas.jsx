import {
  Boxes,
  PackageCheck,
  Settings,
  Shield,
} from "lucide-react";

const areas = [
  {
    icon: Shield,
    title: "Personal Protection",
    text: "PPE and protective equipment for safer working environments.",
  },
  {
    icon: PackageCheck,
    title: "Workplace Safety",
    text: "Products that support safety requirements across work sites.",
  },
  {
    icon: Settings,
    title: "Industrial Equipment",
    text: "A growing range of equipment and supplies for industrial operations.",
  },
  {
    icon: Boxes,
    title: "Future Supply Categories",
    text: "Expanding our offering as customer needs and opportunities grow.",
  },
];

function SupplyAreas() {
  return (
    <section className="bg-[#F5F6F8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Our Direction
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
              More Than PPE.
              <span className="block text-[#C9A227]">
                Built to Grow.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              NEI-NEI is being built with a long-term vision. While PPE and
              safety products form an important part of our initial offering,
              our goal is to develop a broader industrial supply portfolio
              that can support customers across multiple categories.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <Icon
                    size={28}
                    className="text-[#C9A227]"
                  />

                  <h3 className="mt-4 font-bold text-[#0B1F3A]">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {area.text}
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

export default SupplyAreas;