import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building2,
  FileText,
  CheckCircle2,
} from "lucide-react";

const services = [
  "PPE & Safety Solutions",
  "Industrial Engineering Components",
  "Cleaning & Hygiene Supplies",
  "Corporate Branding & Workwear",
  "Corporate Gifts & Promotional Items",
  "General Industrial Supplies",
  "Other / Multiple Requirements",
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary form handling.
    // EmailJS can be connected here later.
    console.log("Contact Form:", formData);

    setSubmitted(true);

    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B1F3A] py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,31,58,0.98),rgba(11,31,58,0.88))]" />

        {/* Decorative industrial lines */}
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full border border-[#C9A227]/20" />
        <div className="absolute -right-10 top-10 h-52 w-52 rounded-full border border-[#C9A227]/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              Get In Touch
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let’s Work
              <span className="text-[#C9A227]"> Together</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Whether you need PPE, industrial components, workplace
              consumables, corporate branding or a broader procurement
              solution, NEI-NEI is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                Contact NEI-NEI
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
                Speak With Our Team
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Contact us for product enquiries, quotations, supplier
                requirements, procurement opportunities or general business
                enquiries.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">

                {/* Phone */}
                <a
                  href="tel:0765683130"
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1F3A] text-[#C9A227]">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Phone
                    </p>

                    <p className="mt-1 font-semibold text-[#0B1F3A]">
                      076 568 3130
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Call us for enquiries and quotations
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:delina@neinei.co.za"
                  className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1F3A] text-[#C9A227]">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-[#0B1F3A]">
                      delina@neinei.co.za
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Send us your requirements
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1F3A] text-[#C9A227]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Business Address
                    </p>

                    <p className="mt-1 font-semibold leading-6 text-[#0B1F3A]">
                      23431 Umbhola Street
                      <br />
                      Palm Ridge Ext 22
                      <br />
                      Katlehong, Gauteng
                      <br />
                      1401, South Africa
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1F3A] text-[#C9A227]">
                    <Clock size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Business Enquiries
                    </p>

                    <p className="mt-1 font-semibold text-[#0B1F3A]">
                      Monday – Friday
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Contact us during business hours
                    </p>
                  </div>
                </div>

              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27765683130"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 font-bold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-lg"
              >
                <MessageCircle size={22} />
                Chat With Us on WhatsApp
              </a>

            </div>

            {/* =====================================================
                CONTACT FORM
            ===================================================== */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Request Information
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
                  Send Us an Enquiry
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Tell us what you need and our team will get back to you.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <div>
                    <p className="font-semibold text-green-800">
                      Enquiry received
                    </p>

                    <p className="mt-1 text-sm text-green-700">
                      Thank you for contacting NEI-NEI. We will get back to you
                      as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Company */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                    >
                      Company
                    </label>

                    <div className="relative">
                      {/* <Building2
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      /> */}

                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                      />
                    </div>
                  </div>

                </div>

                {/* Email + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.co.za"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="076 000 0000"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>

                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                  >
                    What Do You Need? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                  >
                    Your Requirements *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the products, quantities, specifications or services you require..."
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#0B1F3A] px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#162f52] hover:shadow-lg"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>

                <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                  <FileText
                    size={20}
                    className="mt-0.5 shrink-0 text-[#C9A227]"
                  />

                  <p className="text-xs leading-5 text-gray-600">
                    For procurement and quotation requests, please include
                    product specifications, quantities, delivery requirements
                    and any relevant company or project information.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCUREMENT CTA
      ========================================================= */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1F3A] text-[#C9A227]">
            <Building2 size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-[#0B1F3A]">
            Looking for a Reliable Supply Partner?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            NEI-NEI provides consolidated supply solutions across PPE,
            industrial components, workplace consumables, corporate branding
            and promotional products.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="mailto:delina@neinei.co.za"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9A227] px-6 py-3 font-bold text-[#0B1F3A] transition hover:bg-[#b58f1e]"
            >
              <Mail size={19} />
              Email NEI-NEI
            </a>

            <a
              href="tel:0765683130"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#0B1F3A] px-6 py-3 font-bold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              <Phone size={19} />
              Call Us
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;