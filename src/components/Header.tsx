import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${isActive ? "text-blue-600" : "hover:text-blue-600"}`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to={ROUTES.HOME} className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Khonthoklon Lab Logo"
            className="w-10 h-10 rounded-full shadow"
          />
          <h1 className="text-xl font-semibold text-gray-800">
            Khonthoklon Lab
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink to={ROUTES.EVENTS} className={desktopLinkClass}>
            Events
          </NavLink>
          <NavLink to={ROUTES.CERTIFICATES} className={desktopLinkClass}>
            Certificates
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-2 text-gray-700 font-medium">
            <NavLink
              to={ROUTES.EVENTS}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              to={ROUTES.CERTIFICATES}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Certificates
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
