import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchTerm) params.append('search', searchTerm)
    if (selectedType) params.append('type', selectedType)
    navigate(`/listings?${params.toString()}`)
  }

  return (
    <div className="relative bg-gradient-to-br from-primary via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&h=1080&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="py-24 md:py-32">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Next Home in London
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
              Instantly browse premium properties for rent and sale across London
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSearch}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-card shadow-2xl p-3 md:p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                {/* Search Input */}
                <div className="md:col-span-6 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by location, area, or property name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-primary rounded-button focus:ring-2 focus:ring-accent border-none"
                  />
                </div>

                {/* Type Select */}
                <div className="md:col-span-3">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full py-4 px-4 text-primary rounded-button focus:ring-2 focus:ring-accent border-none"
                  >
                    <option value="">Rent or Buy</option>
                    <option value="Rent">For Rent</option>
                    <option value="Sale">For Sale</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="md:col-span-3">
                  <button type="submit" className="btn btn-accent w-full h-full flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.form>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</p>
              <p className="text-sm md:text-base text-gray-300">Properties Available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</p>
              <p className="text-sm md:text-base text-gray-300">London Areas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</p>
              <p className="text-sm md:text-base text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</p>
              <p className="text-sm md:text-base text-gray-300">Support Available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
