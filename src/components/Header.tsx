import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    }),
    hover: {
      y: -2,
      color: '#00d4ff',
      transition: { duration: 0.2 }
    }
  };


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-dark-border' 
            : 'bg-black/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-width-container section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Left side: Logo and Company Name */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="flex items-center space-x-4"
            >
              <Link to="/" className="flex items-center space-x-4">
                {/* Logo */}
                <div className="relative w-14 h-14 flex-shrink-0">
                  <img 
                    src="/fpd-logo.png" 
                    alt="Fusion Print & Design Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Company Name */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-50 animate-pulse-slow"></div>
                  <h1 className="relative text-2xl font-bold">
                    <span className="text-text-primary">Fusion</span>{' '}
                    <span className="text-gradient">Print & Design</span>
                  </h1>
                </div>
              </Link>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                item.label === 'Contact' ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Link to={item.href} className="btn-primary group">
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={navItemVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    <Link
                      to={item.href}
                      className="text-text-secondary font-medium transition-colors duration-300 hover:text-accent-cyan"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              ))}
            </nav>

            {!isMenuOpen && (
              <motion.button
                className="lg:hidden text-text-primary hover:text-accent-cyan transition-colors z-50"
                onClick={() => setIsMenuOpen(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - No Animations */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-[80%] max-w-sm z-40 bg-dark-base lg:hidden shadow-2xl">
            <div className="h-full flex flex-col">
              {/* Navigation Links */}
              <nav className="flex-1 px-6 pt-20">
                {/* Menu Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-4 text-lg font-medium text-text-primary hover:text-accent-cyan transition-colors border-b border-dark-border"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Go Back to Home Button */}
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-4 mt-4 text-lg font-medium text-accent-cyan hover:text-accent-gold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Go Back
                </Link>
              </nav>
              
              {/* Footer */}
              <div className="p-6 border-t border-dark-border">
                <p className="text-text-muted text-sm text-center">
                  © 2024 Fusion Print & Design
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;