import PropertyCard from './PropertyCard'
import AnimationWrapper from './AnimationWrapper'

const PropertyGrid = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
        <p className="text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <AnimationWrapper key={property.id} delay={index * 0.1}>
          <PropertyCard property={property} />
        </AnimationWrapper>
      ))}
    </div>
  )
}

export default PropertyGrid
