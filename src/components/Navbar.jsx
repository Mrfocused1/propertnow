import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/listings', label: 'Listings' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between md:justify-between justify-center h-20 relative">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            Property Now
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-primary hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/listings" className="btn btn-primary">
              Browse Properties
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors absolute right-4"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/listings" className="btn btn-primary mt-2">
                Browse Properties
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
