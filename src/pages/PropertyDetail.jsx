import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PropertyDetailComponent from '../components/PropertyDetailComponent'
import PropertyCard from '../components/PropertyCard'
import AnimationWrapper from '../components/AnimationWrapper'
import { properties } from '../data/properties'

const PropertyDetail = () => {
  const { id } = useParams()
  const property = properties.find((p) => p.id === parseInt(id))

  if (!property) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the property you're looking for.
          </p>
          <Link to="/listings" className="btn btn-primary">
            Browse All Properties
          </Link>
        </div>
      </div>
    )
  }

  // Get related properties (same type, different property)
  const relatedProperties = properties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3)

  return (
    <div className="pt-20">
      <div className="container py-12">
        {/* Back Button */}
        <AnimationWrapper>
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Listings</span>
          </Link>
        </AnimationWrapper>

        {/* Property Detail */}
        <AnimationWrapper delay={0.1}>
          <PropertyDetailComponent property={property} />
        </AnimationWrapper>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-20">
            <AnimationWrapper delay={0.2}>
              <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
            </AnimationWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProperties.map((relatedProperty, index) => (
                <AnimationWrapper key={relatedProperty.id} delay={0.3 + index * 0.1}>
                  <PropertyCard property={relatedProperty} />
                </AnimationWrapper>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PropertyDetail
