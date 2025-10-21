import { Target, Users, Award, TrendingUp } from 'lucide-react'
import AnimationWrapper from '../components/AnimationWrapper'
import CTASection from '../components/CTASection'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect people with beautiful homes across London, making property search simple, transparent, and enjoyable.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make is driven by what\'s best for our clients. Your satisfaction is our success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in property selection, service delivery, and customer care.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging modern technology and processes to provide a seamless property search experience.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-gray-800 text-white py-20">
        <div className="container">
          <AnimationWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Property Now</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                We're on a mission to transform the way Londoners discover, explore, and secure their perfect property.
                With a passion for excellence and a commitment to service, we've become a trusted name in London's property market.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Founded in 2018, Property Now emerged from a simple observation: finding the right property
                    in London shouldn't be complicated or stressful. Our founder, Sarah Mitchell, experienced
                    firsthand the challenges of navigating London's property market.
                  </p>
                  <p>
                    What started as a vision to create a more transparent, efficient property service has grown
                    into a thriving business that's helped thousands of people find their perfect London home.
                  </p>
                  <p>
                    Today, we're proud to offer an extensive portfolio of premium properties across London,
                    supported by a dedicated team of property experts who genuinely care about finding you
                    the perfect match.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                  alt="London skyline"
                  className="rounded-card shadow-md"
                  onError={(e) => e.target.src = 'https://placehold.co/600x400/00A8E8/FFFFFF?text=London'}
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop"
                  alt="London architecture"
                  className="rounded-card shadow-md mt-8"
                  onError={(e) => e.target.src = 'https://placehold.co/600x400/1A1A1A/FFFFFF?text=Property'}
                  loading="lazy"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-neutral">
        <div className="container">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimationWrapper key={index} delay={0.1 * index}>
                <div className="bg-white p-8 rounded-card shadow-md text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimationWrapper delay={0.1}>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-3">500+</p>
                <p className="text-lg text-gray-300">Properties Listed</p>
              </div>
            </AnimationWrapper>
            <AnimationWrapper delay={0.2}>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-3">2000+</p>
                <p className="text-lg text-gray-300">Happy Clients</p>
              </div>
            </AnimationWrapper>
            <AnimationWrapper delay={0.3}>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-3">50+</p>
                <p className="text-lg text-gray-300">London Areas</p>
              </div>
            </AnimationWrapper>
            <AnimationWrapper delay={0.4}>
              <div className="text-center">
                <p className="text-5xl font-bold text-accent mb-3">6</p>
                <p className="text-lg text-gray-300">Years Experience</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work With Us?"
        description="Let our experienced team help you find your perfect London property today."
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="secondary"
      />
    </div>
  )
}

export default About
