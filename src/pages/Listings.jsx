import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterBar from '../components/FilterBar'
import PropertyGrid from '../components/PropertyGrid'
import AnimationWrapper from '../components/AnimationWrapper'
import { properties } from '../data/properties'

const Listings = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    type: searchParams.get('type') || '',
    location: searchParams.get('location') || '',
    propertyType: searchParams.get('propertyType') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || ''
  })

  const [filteredProperties, setFilteredProperties] = useState(properties)

  useEffect(() => {
    let result = [...properties]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.location.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      )
    }

    // Type filter (Rent/Sale)
    if (filters.type) {
      result = result.filter((p) => p.type === filters.type)
    }

    // Location filter
    if (filters.location) {
      result = result.filter((p) => p.area === filters.location)
    }

    // Property Type filter
    if (filters.propertyType) {
      result = result.filter((p) => p.propertyType === filters.propertyType)
    }

    // Bedrooms filter
    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms >= parseInt(filters.bedrooms))
    }

    // Price range filter
    if (filters.minPrice) {
      result = result.filter((p) => p.priceValue >= parseInt(filters.minPrice))
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.priceValue <= parseInt(filters.maxPrice))
    }

    setFilteredProperties(result)
  }, [filters])

  const handleClearFilters = () => {
    setFilters({
      search: '',
      type: '',
      location: '',
      propertyType: '',
      bedrooms: '',
      minPrice: '',
      maxPrice: ''
    })
  }

  return (
    <div className="pt-20 min-h-screen bg-neutral/30">
      <div className="container py-12">
        {/* Page Header */}
        <AnimationWrapper>
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Properties</h1>
            <p className="text-xl text-gray-600">
              Discover {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} matching your criteria
            </p>
          </div>
        </AnimationWrapper>

        {/* Filter Bar */}
        <AnimationWrapper delay={0.1}>
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            onClearFilters={handleClearFilters}
          />
        </AnimationWrapper>

        {/* Results */}
        <AnimationWrapper delay={0.2}>
          <PropertyGrid properties={filteredProperties} />
        </AnimationWrapper>

        {/* Results Summary */}
        {filteredProperties.length > 0 && (
          <AnimationWrapper delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Showing {filteredProperties.length} of {properties.length} properties
              </p>
            </div>
          </AnimationWrapper>
        )}
      </div>
    </div>
  )
}

export default Listings
