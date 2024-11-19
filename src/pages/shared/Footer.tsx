import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "../../assets/ejobsit-logo-DaA8dHRr.svg"
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-gradient-to-r from-black to-gray-500 text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
        {/* About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
        >
            <img 
            className="w-[150px] mx-auto mb-5"
            src={logo} 
            alt="logo" />
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            We are committed to delivering the best services to our customers
            and ensuring a seamless experience.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
        >
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
        >
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-lg text-gray-700"
            />
            <Button >Subscribe</Button>
          </form>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
        >
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white text-blue-500 hover:bg-gray-200 transition"
            >
              <i className="fab fa-facebook-f"><FaFacebook/></i>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white text-blue-500 hover:bg-gray-200 transition"
            >
              <i className="fab fa-twitter"><FaXTwitter/></i>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white text-blue-500 hover:bg-gray-200 transition"
            >
              <i className="fab fa-instagram"><FaInstagramSquare/></i>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mt-8 text-center border-t border-white pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} eJobsIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
