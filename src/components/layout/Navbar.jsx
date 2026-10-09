import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import neineiLogo from "../../assets/images/neinei-logo.jpeg";

const productLinks = [
  { name: "PPE & Safety", path: "/products" },
  { name: "Workwear", path: "/products" },
  { name: "Safety Equipment", path: "/products" },
  { name: "Industrial Tools", path: "/products" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  // { name: "Industries", path: "/industries" },
  // { name: "Projects", path: "/projects" },
  // { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center"
          aria-label="NEI-NEI Industrial Supplies Home"
        >
          <img
            src={neineiLogo}
            alt="NEI-NEI Industrial Supplies"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-6 lg:flex">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#C9A227]"
                  : "text-[#0B1F3A] hover:text-[#C9A227]"
              }`
            }
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#C9A227]"
                  : "text-[#0B1F3A] hover:text-[#C9A227]"
              }`
            }
          >
            About Us
          </NavLink>

          {/* =================================================
              PRODUCTS DROPDOWN
          ================================================= */}
          <div className="group relative">
            <Link
              to="/products"
              className="flex items-center gap-1 py-2 text-sm font-semibold text-[#0B1F3A] transition-colors duration-200 hover:text-[#C9A227]"
            >
              Products

              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            {/* Dropdown */}
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-2xl">

                {/* Dropdown heading */}
                <div className="border-b border-gray-100 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C9A227]">
                    Product Categories
                  </p>
                </div>

                {productLinks.map((product) => (
                  <Link
                    key={product.name}
                    to={product.path}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#F5F6F8] hover:pl-5 hover:text-[#0B1F3A]"
                  >
                    {product.name}
                  </Link>
                ))}

                <Link
                  to="/products"
                  className="mt-1 block rounded-lg bg-[#0B1F3A] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#162f52]"
                >
                  View All Products
                </Link>

              </div>
            </div>
          </div>

          {/* Other navigation links */}
          {navLinks
            .filter(
              (link) =>
                link.name !== "Home" &&
                link.name !== "About Us"
            )
            .map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#C9A227]"
                      : "text-[#0B1F3A] hover:text-[#C9A227]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          {/* =================================================
              REQUEST QUOTE
          ================================================= */}
          {/* <Link
            to="/request-a-quote"
            className="ml-2 rounded-md bg-[#C9A227] px-5 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D8B83F] hover:shadow-md"
          >
            Request a Quote
          </Link> */}
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-[#0B1F3A] transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg lg:hidden">

          <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">

            <div className="space-y-1">

              {/* Home */}
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-[#0B1F3A] text-white"
                      : "text-[#0B1F3A] hover:bg-gray-100"
                  }`
                }
              >
                Home
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-[#0B1F3A] text-white"
                      : "text-[#0B1F3A] hover:bg-gray-100"
                  }`
                }
              >
                About Us
              </NavLink>

              {/* =================================================
                  MOBILE PRODUCTS
              ================================================== */}
              <div>

                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-[#0B1F3A] transition-colors hover:bg-gray-100"
                >
                  Products

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="ml-4 mt-1 border-l-2 border-[#C9A227] pl-3">

                    {productLinks.map((product) => (
                      <Link
                        key={product.name}
                        to={product.path}
                        onClick={closeMobileMenu}
                        className="block rounded-md px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#0B1F3A]"
                      >
                        {product.name}
                      </Link>
                    ))}

                    <Link
                      to="/products"
                      onClick={closeMobileMenu}
                      className="mt-1 block rounded-md px-4 py-2.5 text-sm font-bold text-[#0B1F3A] hover:bg-gray-50"
                    >
                      View All Products
                    </Link>

                  </div>
                )}
              </div>

              {/* Remaining Links */}
              {navLinks
                .filter(
                  (link) =>
                    link.name !== "Home" &&
                    link.name !== "About Us"
                )
                .map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-sm font-semibold ${
                        isActive
                          ? "bg-[#0B1F3A] text-white"
                          : "text-[#0B1F3A] hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

              {/* Mobile Quote Button */}
              <Link
                to="/request-a-quote"
                onClick={closeMobileMenu}
                className="mt-4 block rounded-lg bg-[#C9A227] px-4 py-3.5 text-center text-sm font-bold text-[#0B1F3A] shadow-sm transition-colors hover:bg-[#D8B83F]"
              >
                Request a Quote
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;