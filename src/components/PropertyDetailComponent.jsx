import { useState } from 'react'
import { MapPin, Bed, Bath, Maximize, Calendar, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactForm from './ContactForm'

const PropertyDetailComponent = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)

  const images = property.images || [property.image]

  const handleImageError = (e) => {
    e.target.src = `https://placehold.co/1200x800/00A8E8/FFFFFF?text=${encodeURIComponent(property.propertyType || 'Property')}`
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      {/* Image Gallery */}
      <div className="relative h-[500px] bg-gray-900 rounded-card overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onError={handleImageError}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all"
              aria-label="Next image"
            >
              →
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Type Badge */}
        <div className={`absolute top-6 right-6 px-6 py-3 rounded-full text-base font-semibold ${
          property.type === 'Rent' ? 'bg-accent text-white' : 'bg-primary text-white'
        }`}>
          For {property.type}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-gray-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{property.location}</span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">{property.title}</h1>
            <p className="text-5xl font-bold text-accent">{property.price}</p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-6 p-6 bg-neutral rounded-card mb-8">
            <div className="text-center">
              <Bed className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{property.bedrooms}</p>
              <p className="text-sm text-gray-600">Bedrooms</p>
            </div>
            <div className="text-center">
              <Bath className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{property.bathrooms}</p>
              <p className="text-sm text-gray-600">Bathrooms</p>
            </div>
            <div className="text-center">
              <Maximize className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{property.size}</p>
              <p className="text-sm text-gray-600">sq ft</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="bg-neutral p-6 rounded-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Property Type</p>
                <p className="font-semibold text-primary">{property.propertyType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Available From</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <p className="font-semibold text-primary">{property.available}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Enquiry Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-card p-6">
              <h3 className="text-2xl font-semibold mb-6">Interested in this property?</h3>
              <ContactForm propertyTitle={property.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailComponent
