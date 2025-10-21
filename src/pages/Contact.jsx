import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import AnimationWrapper from '../components/AnimationWrapper'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Property Lane', 'London, UK', 'SW1A 1AA']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 20 7123 4567', '+44 20 7123 4568', 'Mon-Sat: 9am-6pm']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@propertynow.co.uk', 'support@propertynow.co.uk', 'We reply within 24hrs']
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-gray-800 text-white py-20">
        <div className="container">
          <AnimationWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-200">
                Have a question or need assistance? We're here to help you find your perfect property.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section bg-neutral/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimationWrapper key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-card shadow-md text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimationWrapper>
              <div>
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                <div className="bg-white shadow-lg rounded-card p-8">
                  <ContactForm />
                </div>
              </div>
            </AnimationWrapper>

            {/* Map & Additional Info */}
            <AnimationWrapper delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-4">Find Our Office</h2>
                <p className="text-gray-600 mb-8">
                  Visit us at our central London office. We're conveniently located and easy to reach.
                </p>

                {/* Google Maps Placeholder */}
                <div className="bg-gray-200 rounded-card h-80 mb-8 flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540628804857!2d-0.1419!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property Now Office Location"
                  ></iframe>
                </div>

                {/* Additional Info */}
                <div className="bg-accent/10 rounded-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Expert guidance on property search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Arrange property viewings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Market insights and valuations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Personalized property recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral">
        <div className="container">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions
              </p>
            </div>
          </AnimationWrapper>

          <div className="max-w-3xl mx-auto space-y-6">
            <AnimationWrapper delay={0.1}>
              <div className="bg-white p-6 rounded-card shadow-md">
                <h3 className="text-xl font-semibold mb-3">How do I schedule a property viewing?</h3>
                <p className="text-gray-600">
                  Simply fill out the enquiry form on any property page, or contact us directly via phone or email.
                  We'll arrange a convenient viewing time within 24-48 hours.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
              <div className="bg-white p-6 rounded-card shadow-md">
                <h3 className="text-xl font-semibold mb-3">Are there any fees for your services?</h3>
                <p className="text-gray-600">
                  For renters and buyers, our property search and viewing services are completely free.
                  Landlords and sellers pay a commission only upon successful completion.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.3}>
              <div className="bg-white p-6 rounded-card shadow-md">
                <h3 className="text-xl font-semibold mb-3">How quickly can I move into a property?</h3>
                <p className="text-gray-600">
                  Move-in timelines vary by property. Some are available immediately, while others may have
                  specific availability dates. Check each property listing for availability information.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.4}>
              <div className="bg-white p-6 rounded-card shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you help with the application process?</h3>
                <p className="text-gray-600">
                  Absolutely! We guide you through every step, from initial viewing to final contract signing,
                  ensuring a smooth and stress-free experience.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
