import { Link, NavLink } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Body scroll block açıq menyuda
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-[#d37643]" : "hover:text-[#d37643]";

  return (
    <div className="z-30 sticky top-0 bg-[#fcf2dc]">
      <div className="container mx-auto px-6 h-[70px] flex justify-between items-center ">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[#826a59] font-semibold">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/book" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="fixed md:hidden top-[70px] left-0 right-0 bg-[#f4e5c1] py-[25px] text-[#826a59] font-semibold shadow-lg z-10"
            >
              <div className="container mx-auto px-6 flex flex-col gap-3">
                <NavLink
                  to="/"
                  className={navLinkClass}
                  onClick={() => setShowMobileMenu(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/book"
                  className={navLinkClass}
                  onClick={() => setShowMobileMenu(false)}
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={() => setShowMobileMenu(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/blog"
                  className={navLinkClass}
                  onClick={() => setShowMobileMenu(false)}
                >
                  Blog
                </NavLink>
                <Link
                  to="/book"
                  onClick={() => setShowMobileMenu(false)}
                  className="bg-[#d37643] w-fit px-6 py-2.5 text-white font-semibold duration-300 hover:opacity-75 hover:scale-95"
                >
                  Buy now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Side */}
        <div className="flex gap-5 items-center justify-between">
          <button className="text-[#d37643] text-2xl cursor-pointer">
            <MdLocalGroceryStore />
          </button>
          <Link
            to="/book"
            className="bg-[#d37643] px-6 py-2.5 text-white font-semibold hidden md:flex duration-300 hover:opacity-75 hover:scale-95"
          >
            Buy now
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-3xl cursor-pointer flex md:hidden z-20"
          >
            {showMobileMenu ? <LiaTimesSolid /> : <LiaBarsSolid />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
