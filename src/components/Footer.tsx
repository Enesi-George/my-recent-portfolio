import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {currentYear} George Enesi. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
