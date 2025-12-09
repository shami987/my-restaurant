import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

const links = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Book Table", path: "/book-table" },
];

  return (
    <header className="relative w-full py-4 bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-vibes text-4xl">Feane</h1>

        {/* Links (desktop) */}
<nav className="hidden md:flex space-x-8">
  {links.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className="cursor-pointer hover:text-yellow-400"
    >
      {link.name}
    </Link>
  ))}
</nav>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Order button (desktop) */}
          <button className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            Order Online
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-7 h-[3px] bg-white"></span>
            <span className="w-7 h-[3px] bg-white"></span>
            <span className="w-7 h-[3px] bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown (same links reused) */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-center py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <Link
             key={link.name}
             to={link.path}
             className="block hover:text-yellow-400"
             onClick={() => setOpen(false)} // closes menu after click
  >
               {link.name}
            </Link>
          ))}
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            Order Online
          </button>
        </div>
      )}
    </header>
  );
}
