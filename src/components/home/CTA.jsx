import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] py-20">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#C9A227]/5" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">

        <div className="mx-auto mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#C9A227]" />

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            Let's Work Together
          </span>

          <span className="h-px w-10 bg-[#C9A227]" />
        </div>

        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Need Reliable Industrial Supplies?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
          Talk to NEI-NEI about your requirements and let us help you find
          the right supply solution for your business.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          {/* <Link
            to="/request-a-quote"
            className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#C9A227] px-7 py-4 text-sm font-bold text-[#0B1F3A] transition-all hover:-translate-y-1 hover:bg-[#d7b438]"
          >
            Request a Quote

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link> */}

          {/* <a
            href="tel:0837208184"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-white/30 px-7 py-4 text-sm font-bold text-white transition-all hover:border-[#C9A227] hover:bg-white hover:text-[#0B1F3A]"
          >
            <Phone size={18} />

            083 720 8184
          </a> */}

        </div>

      </div>
    </section>
  );
}

export default CTA;