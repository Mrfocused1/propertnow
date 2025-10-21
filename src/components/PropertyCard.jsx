import { Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Maximize } from 'lucide-react'
import { motion } from 'framer-motion'

const PropertyCard = ({ property }) => {
  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/800x600/00A8E8/FFFFFF?text=${encodeURIComponent(property.propertyType || 'Property')}`
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="card shadow-md"
    >
      <Link to={`/property/${property.id}`}>
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-neutral">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={handleImageError}
            loading="lazy"
          />
          {/* Type Badge */}
          <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
            property.type === 'Rent' ? 'bg-accent text-white' : 'bg-primary text-white'
          }`}>
            For {property.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
            {property.title}
          </h3>

          {/* Features */}
          <div className="flex items-center gap-4 text-gray-600 mb-4 text-sm">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Bed</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="w-4 h-4" />
              <span>{property.size} sq ft</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <p className="text-2xl font-bold text-primary">
              {property.price}
            </p>
            <button className="text-accent font-medium hover:text-primary transition-colors">
              View Details →
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyCard
