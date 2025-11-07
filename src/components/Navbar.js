import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#fdf1ec] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6 relative">
        <Link to="/" className="flex items-center gap-1 text-2xl font-bold">
          <span className="text-orange-600">V</span>Films
        </Link>

        
        <nav className="hidden md:flex gap-6">
          <Link to="/services" className="hover:text-orange-600">
            Services
          </Link>
          <Link to="#" className="hover:text-orange-600">
            Their Stories
          </Link>
          <Link to="#" className="hover:text-orange-600">
            Our Story
          </Link>
          <Link to="#" className="hover:text-orange-600">
            Varnan
          </Link>
         <button className="bg-orange-500 text-white px-4 py-1 rounded-full flex items-center space-x-2">
  <span>Let’s Talk</span>
  <svg
    className="w-5 h-5 stroke-current text-white"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l9 6 9-6M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
    />
  </svg>
</button>


        </nav>

       
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        
        {open && (
          <div className="absolute top-full right-6 mt-2 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-4 md:hidden">
            <Link
              to="/services"
              className="hover:text-orange-600"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              Their Stories
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              Our Story
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              Yarnan
            </Link>
            <button
              className="bg-orange-500 text-white px-4 py-1 rounded-full"
              onClick={() => setOpen(false)}
            >
              Let's Talk
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
