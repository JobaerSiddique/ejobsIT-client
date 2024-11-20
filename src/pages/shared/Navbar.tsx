import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/ejobsit-logo-DaA8dHRr.svg"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

const menuItems = <>
     <Link to="/"
  className="relative text-gray-600 hover:text-black font-semibold group">
  Home
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"
  ></span>
</Link>
<Link to="/contact"
  className="relative text-gray-600 hover:text-black font-semibold group">
  Contact-Us
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"
  ></span>
</Link>
<Link to="/about-us"
  className="relative text-gray-600 hover:text-black font-semibold group">
  About-Us
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"
  ></span>
</Link>

</>

  return (
    <header className="sticky border-b shadow-md  bg-gradient-to-r from-cyan-100 to-blue-100  hover:bg-gradient-to-l top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">
            <img
              className="w-30 h-10"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation Links - Large Screens */}
        <nav className="hidden md:flex space-x-6">
         {menuItems}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Small Screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {menuItems}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
