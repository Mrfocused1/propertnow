import { Link } from 'react-router-dom'
import { Home as HomeIcon, Shield, Clock, Award } from 'lucide-react'
import Hero from '../components/Hero'
import PropertyCard from '../components/PropertyCard'
import CTASection from '../components/CTASection'
import AnimationWrapper from '../components/AnimationWrapper'
import { properties } from '../data/properties'

const Home = () => {
  // Get featured properties (first 6)
  const featuredProperties = properties.slice(0, 6)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="section">
        <div className="container">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our hand-picked selection of premium properties across London
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <AnimationWrapper key={property.id} delay={index * 0.1}>
                <PropertyCard property={property} />
              </AnimationWrapper>
            ))}
          </div>

          <AnimationWrapper>
            <div className="text-center">
              <Link to="/listings" className="btn btn-primary">
                View All Properties
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary">
        <div className="container">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Property Now?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Your trusted partner in finding the perfect London property
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimationWrapper delay={0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Premium Properties</h3>
                <p className="text-gray-300">
                  Carefully curated selection of high-quality properties in prime London locations
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Trusted Service</h3>
                <p className="text-gray-300">
                  Professional support and transparent processes every step of the way
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.3}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
                <p className="text-gray-300">
                  Our dedicated team is always available to help you find your perfect home
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.4}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Award Winning</h3>
                <p className="text-gray-300">
                  Recognized for excellence in property services and customer satisfaction
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section">
        <div className="container">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Type</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find the perfect property type for your lifestyle
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimationWrapper delay={0.1}>
              <Link
                to="/listings?type=Rent"
                className="group relative block h-64 rounded-card overflow-hidden shadow-md hover:shadow-xl transition-all bg-neutral"
              >
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
                  alt="Properties for Rent"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => e.target.src = 'https://placehold.co/800x600/00A8E8/FFFFFF?text=For+Rent'}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end p-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">For Rent</h3>
                    <p className="text-white/90">Find your perfect rental home</p>
                  </div>
                </div>
              </Link>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
              <Link
                to="/listings?type=Sale"
                className="group relative block h-64 rounded-card overflow-hidden shadow-md hover:shadow-xl transition-all bg-neutral"
              >
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
                  alt="Properties for Sale"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => e.target.src = 'https://placehold.co/800x600/1A1A1A/FFFFFF?text=For+Sale'}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end p-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">For Sale</h3>
                    <p className="text-white/90">Discover your dream property</p>
                  </div>
                </div>
              </Link>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export default Home
