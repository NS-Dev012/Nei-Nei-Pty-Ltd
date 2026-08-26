import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-[0.12em]">
                NEI-NEI
              </h2>

              <p className="mt-1 text-xs font-semibold tracking-[0.25em] text-[#C9A227]">
                INDUSTRIAL SUPPLIES
              </p>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-300">
              Providing quality industrial supplies and safety solutions
              designed to support safer, more reliable and efficient
              workplaces.
            </p>

            <p className="mt-5 text-sm font-semibold tracking-wider text-[#C9A227]">
              QUALITY • RELIABILITY • SAFETY
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#C9A227]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/industries"
                  className="transition-colors hover:text-white"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#C9A227]">
              Products
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  PPE & Safety
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  Workwear
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  Safety Equipment
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  Industrial Tools
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  Site Equipment
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  General Industrial Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#C9A227]">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-gray-300">

              {/* Phone */}
              <a
                href="tel:0765683130"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <span>076 568 3130</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@neinei.co.za"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <span>info@neinei.co.za</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A227]"
                />

                <span>
                  23431 Imbola Street
                  <br />
                  Palm Ridge, Katlehong
                  <br />
                  1401, South Africa
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} NEI-NEI (Pty) Ltd. All rights
            reserved.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-3">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1F3A]"
            >
              <FaFacebookF size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1F3A]"
            >
              <FaLinkedinIn size={16} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27765683130"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1F3A]"
            >
              <MessageCircle size={18} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;