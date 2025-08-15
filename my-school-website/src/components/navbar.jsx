import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef(null);

  const menus = [
    {
      title: "About Us",
      links: [
        { name: "Our Moto", path: "/our-moto" },
        { name: "School Prayer", path: "/school-prayer" },
        { name: "Our Faculties", path: "/our-faculties" },
        { name: "Management", path: "/management" },
      ],
    },
    {
      title: "Message",
      links: [
        { name: "Director Message", path: "/director-message" },
        { name: "Principal Message", path: "/principal-message" },
      ],
    },
    {
      title: "Academic Profile",
      links: [{ name: "Academics", path: "/academics" }],
    },
    {
      title: "Rules & Regulations",
      links: [
        { name: "Admission Guidelines", path: "/admission-guidelines" },
        { name: "School Timings", path: "/school-timings" },
        { name: "School Uniform", path: "/school-uniform" },
        { name: "Payment of Fees", path: "/payment-of-fees" },
      ],
    },
    { title: "Gallery", links: [{ name: "Gallery", path: "/gallery" }] },
    { title: "Achievement", links: [{ name: "Achievement", path: "/achievement" }] },
    { title: "Contact Us", links: [{ name: "Contact Us", path: "/contact" }] },
    {
      title: "Fee Payment",
      links: [
        { name: "QR Code", path: "/qr-code" },
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 1000); // 1 sec delay
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="School Logo" className="h-10" />
          <span className="font-bold text-xl">School Name</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none relative"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-2'}`}
            style={{ left: '7px', top: '20px' }}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            style={{ left: '7px', top: '20px' }}
          ></span>
          <span
            className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-2'}`}
            style={{ left: '7px', top: '20px' }}
          ></span>
        </button>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`pb-1 border-b-2 transition-all duration-300 ${
                  openMenu === idx
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {menu.title}
              </button>

              {/* Dropdown */}
              {openMenu === idx && (
                <ul
                  className="absolute left-0 mt-1 mr-5 bg-white shadow-lg border rounded w-56 z-50"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="block px-4 py-2 hover:bg-blue-100"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      ></div>
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul className="flex flex-col mt-16 space-y-2 px-6">
          {menus.map((menu, idx) => (
            <li key={idx} className="relative">
              <details>
                <summary className="cursor-pointer py-2 px-2 font-semibold text-gray-800 hover:text-blue-500 hover:bg-blue-50 rounded">
                  {menu.title}
                </summary>
                <ul className="pl-4">
                  {menu.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="block py-2 px-2 text-gray-700 hover:bg-blue-100 rounded"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
