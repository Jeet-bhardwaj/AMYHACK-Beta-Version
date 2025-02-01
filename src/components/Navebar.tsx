
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import both Menu and X icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Button */}
      <button
        className="fixed top-6 left-6 z-50 p-2 bg-black bg-opacity-50 rounded-full"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
        >
          <motion.div
            initial={false}
            animate={{ scale: isOpen ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="text-white w-8 h-8" />
            ) : (
              <Menu className="text-white w-8 h-8" />
            )}
          </motion.div>
        </motion.div>
      </button>

      {/* Fullscreen Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center text-white"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Close Button (Click Anywhere to Close) */}
        <div
          className="absolute inset-0"
          onClick={toggleMenu} // Clicking outside closes menu
        ></div>

        {/* Navigation Links */}
        <nav className="text-center relative z-50">
          <ul className="text-3xl font-bold space-y-6">
            {[
              "Home",
              "Register",
              "Events",
              "Profile",
              "Event Cart",
              "Pronites",
              "Accomodation",
              "Schedule",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20 
                }}
                transition={{ 
                  delay: isOpen ? 0.1 * index : 0,
                  duration: 0.3 
                }}
              >
                <a
                  href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className={`${
                    index === 0 ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-400 transition`}
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
