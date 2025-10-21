import { useState, useEffect } from 'react'
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FilterBar = ({ filters, setFilters, onClearFilters }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const locations = [
    'All Locations',
    'East London',
    'West London',
    'North London',
    'South London',
    'Central London',
    'Canary Wharf'
  ]

  const propertyTypes = [
    'All Types',
    'Apartment',
    'Flat',
    'House',
    'Townhouse',
    'Penthouse',
    'Studio',
    'Loft',
    'Duplex',
    'Mews'
  ]

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value === 'All Locations' || value === 'All Types' ? '' : value
    }))
  }

  const hasActiveFilters = filters.search || filters.type || filters.location || filters.propertyType || filters.minPrice || filters.maxPrice || filters.bedrooms

  const showFilters = !isMobile || isOpen

  return (
    <div className="bg-white shadow-md rounded-card mb-8">
      {/* Filter Header - Always Visible */}
      <div
        className="flex items-center justify-between p-6 cursor-pointer md:cursor-default md:pb-6"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-accent flex-shrink-0" />
          <h3 className="text-lg font-semibold leading-none hidden md:block">Filter Properties</h3>
          {hasActiveFilters && (
            <span className="bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </div>

        {/* Toggle Button - Only visible on mobile */}
        <button
          className="md:hidden text-primary hover:text-accent transition-colors"
          aria-label="Toggle filters"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
      </div>

      {/* Filter Content - Collapsible on mobile, always visible on desktop */}
      <AnimatePresence initial={false}>
        {showFilters && (
          <motion.div
            key="filter-content"
            initial={isMobile ? { height: 0, opacity: 0 } : {}}
            animate={isMobile ? { height: 'auto', opacity: 1 } : {}}
            exit={isMobile ? { height: 0, opacity: 0 } : {}}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Type (Rent/Sale) */}
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="">Rent or Buy</option>
                  <option value="Rent">For Rent</option>
                  <option value="Sale">For Sale</option>
                </select>

                {/* Location */}
                <select
                  value={filters.location || 'All Locations'}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                {/* Property Type */}
                <select
                  value={filters.propertyType || 'All Types'}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Bedrooms */}
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                >
                  <option value="">Any Bedrooms</option>
                  <option value="1">1+ Bedroom</option>
                  <option value="2">2+ Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>

                {/* Min Price */}
                <input
                  type="number"
                  placeholder="Min Price (£)"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />

                {/* Max Price */}
                <input
                  type="number"
                  placeholder="Max Price (£)"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </div>

              {hasActiveFilters && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={onClearFilters}
                    className="text-accent hover:text-primary font-medium transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FilterBar
