import { RiMenu3Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const links = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about", active: false },
  { name: "Skills", href: "#skills", active: false },
  { name: "Projects", href: "#projects", active: false },
  { name: "Contact", href: "#contact", active: false },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0].name);
  const menuRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleActive = (name) => {
    setActive(name);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Blur click to close menu
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Update active link on params
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const currentLink = links.find((link) => link.href === `#${hash}`);
    if (currentLink) {
      setActive(currentLink.name);
    }
  }, [window.location.hash]);

  return (
    <div className="container">
      <nav className="bg-navbar-bg w-full rounded-lg drop-shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8 font-inter">
          <div className="flex items-center justify-between py-3">
            {/* Logo Text */}
            <div>
              <a href="#home" className="text-xl text-navbar-text">
                Zarmani<span className="text-active">.dev</span>
              </a>
            </div>
            {/* Nav Links */}
            <div className="hidden md:block text-navbar-text">
              <ul className="flex space-x-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`hover:text-text-light ${
                        active === link.name ? "text-text-light" : ""
                      } `}
                      onClick={() => handleActive(link.name)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Check for Hamburger Menu */}
            {!open && (
              <motion.div
                onClick={handleClick}
                whileTap={{ rotate: 135, opacity: [1, 0] }}
                className="md:hidden"
              >
                <RiMenu3Fill className=" text-2xl text-navbar-text cursor-pointer" />
              </motion.div>
            )}
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="h-screen w-2/3 rounded-tl-3xl fixed top-0 right-0 bg-navbar-bg py-3"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex justify-end p-4"
            >
              <RxCrossCircled
                onClick={handleClick}
                className="text-2xl text-navbar-text cursor-pointer "
              />
            </motion.div>
            <ul className="flex flex-col space-y-3 text-center">
              {links.map((link) => (
                <li key={link.name}>
                  <motion.a
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: active === link.name ? 1 : 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    href={link.href}
                    className={`text-navbar-text block hover:text-text-light py-3 ${
                      active === link.name ? "mobile-active" : ""
                    }`}
                    onClick={() => handleActive(link.name)}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Nav;
