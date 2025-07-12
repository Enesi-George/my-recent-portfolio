import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Twitter, Mail, MapPin, Cpu } from "lucide-react";
import myImage from "../assets/profile.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="  text-blue-600 text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold bg-clip-text text-transparent"
          >
            <a href="#home" className="flex px-2 shadow">
              <Cpu className="h-5 w-8 sm:h-6 sm:w-6 my-auto text-blue-600" />{" "}
              FIDTech
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 relative p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
            )}
          </button>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
                onClick={handleNavClick}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl md:hidden z-50 overflow-hidden"
              >
                <div className="py-6 px-4">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="block w-full px-6 py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                        onClick={handleNavClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-100"
                  >
                    <div className="flex items-center justify-center space-x-6">
                      <motion.a
                        href="https://github.com/Enesi-George?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://twitter.com/EnesiGeorge1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400 transition-colors duration-200 p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="mailto:georgeenesi81@gmail.com"
                        className="text-gray-600 hover:text-red-500 transition-colors duration-200 p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-gray-600 flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">Lagos, Nigeria</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 sm:pb-3"
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className="relative">
                <motion.img
                  src={myImage}
                  alt="George Enesi"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white shadow-2xl object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-pulse"></div>
                {/* Online status indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                George Enesi
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
              A passionate software engineer with deep foresight for innovative
              solutions. I thrive in communities with unique dreams of using
              innovative technology to simplify human day-to-day activities and
              improve societal growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-2 sm:mb-6 px-4 sm:px-0">
              <motion.a
                href="#about"
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <motion.a
                  href="https://github.com/Enesi-George?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/EnesiGeorge1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200 p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
                <motion.a
                  href="mailto:georgeenesi81@gmail.com"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200 p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              </div>

              {/* Location */}
              <motion.div
                className="text-gray-600 flex items-center mt-2 sm:mt-0"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm ">Lagos, Nigeria</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header;
