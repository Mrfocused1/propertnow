import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'

const ContactForm = ({ propertyTitle = null }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-card p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {propertyTitle && (
        <div className="bg-neutral p-4 rounded-button">
          <p className="text-sm text-gray-600">Enquiry about:</p>
          <p className="font-semibold text-primary">{propertyTitle}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone">Phone Number *</label>
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9+\s()-]{10,}$/,
              message: 'Invalid phone number'
            }
          })}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Subject (if not property enquiry) */}
      {!propertyTitle && (
        <div>
          <label htmlFor="subject">Subject *</label>
          <select
            id="subject"
            {...register('subject', { required: 'Please select a subject' })}
            className={errors.subject ? 'border-red-500' : ''}
          >
            <option value="">Select a subject...</option>
            <option value="general">General Enquiry</option>
            <option value="viewing">Book a Viewing</option>
            <option value="rent">Rental Information</option>
            <option value="sale">Purchase Information</option>
            <option value="other">Other</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows="5"
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' }
          })}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-accent w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="loading" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  )
}

export default ContactForm
