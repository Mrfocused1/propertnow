import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimationWrapper from './AnimationWrapper'

const CTASection = ({
  title = "Ready to Find Your Perfect Home?",
  description = "Browse our extensive collection of premium properties across London.",
  buttonText = "Browse All Properties",
  buttonLink = "/listings",
  variant = "primary"
}) => {
  const bgClass = variant === 'primary'
    ? 'bg-gradient-to-r from-accent to-blue-600'
    : 'bg-neutral'

  const textClass = variant === 'primary' ? 'text-white' : 'text-primary'

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container">
        <AnimationWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClass}`}>
              {title}
            </h2>
            <p className={`text-lg md:text-xl mb-8 ${variant === 'primary' ? 'text-gray-100' : 'text-gray-600'}`}>
              {description}
            </p>
            <Link
              to={buttonLink}
              className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-accent'} inline-flex items-center gap-2`}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default CTASection
